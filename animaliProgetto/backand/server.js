const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configurazione del middleware
app.use(cors());
app.use(bodyParser.json());

// Configurazione della connessione al database
const pool = mysql.createPool({
    host: "localhost", // Correggi l'host
    user: "afriCode",
    password: "tounkara10A",
    database: "animale",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Rotta per ottenere tutti gli animali
app.get("/animale", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM animali");
        res.json(rows);
    } catch (err) {
        console.error("Errore nel recupero degli animali:", err);
        res.status(500).send("Errore nel recupero degli animali");
    }
});

// Rotta per creare un nuovo animale
app.post("/animale", async (req, res) => {
    try {
        const { nome, razza, eta } = req.body;
        const [result] = await pool.query(
            "INSERT INTO animali (nome, razza, eta) VALUES (?, ?, ?)",
            [nome, razza, eta]
        );
        const nuovoAnimale = {
            id: result.insertId,
            nome,
            razza,
            eta
        };
        res.status(201).json(nuovoAnimale);
    } catch (err) {
        console.error("Errore nella creazione dell'animale:", err);
        res.status(500).send("Errore nella creazione dell'animale");
    }
});

// Rotta per aggiornare un animale esistente
app.put("/animale/:id", async (req, res) => {
    try {
        const { nome, razza, eta } = req.body;
        const [result] = await pool.query(
            "UPDATE animali SET nome = ?, razza = ?, eta = ? WHERE id = ?",
            [nome, razza, eta, req.params.id]
        );
        if (result.affectedRows === 0) {
            res.status(404).send("Animali non trovato");
        } else {
            res.json({ id: req.params.id, nome, razza, eta });
        }
    } catch (err) {
        console.error("Errore nell'aggiornamento dell'animale:", err);
        res.status(500).send("Errore nell'aggiornamento dell'animale");
    }
});

// Rotta per eliminare un animale
app.delete("/animale/:id", async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM animali WHERE id = ?", [req.params.id]);
        if (result.affectedRows === 0) {
            res.status(404).send("Animale non trovato");
        } else {
            res.status(204).send();
        }
    } catch (err) {
        console.error("Errore nell'eliminazione dell'animale:", err);
        res.status(500).send("Errore nell'eliminazione dell'animale");
    }
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});