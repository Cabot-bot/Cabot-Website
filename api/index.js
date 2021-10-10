const express = require("express");
const app = express();

app.get("/reverse/:query", (req, res) => {
    const query = req.params.query;
    //['h', 'e' ,'l', 'l', 'o']
    const split = query.split("");

    // [o l l e h]
    const reversed = split.reverse();

    // olleh
    const response = reversed.join("");
    res.status(200).send({ response });
});

app.get("/cases/:query", (req, res) => {
    const query = req.params.query;
    const response = query.split("").map((character, index) => index % 2 === 0 ? character.toLowerCase() : character.toUpperCase()
    )
    .join("");
    res.status(200).send({ response });
})


//===========================================================================[ Fortunes ] =======================================================================================================


app.get("/api/random/fortune/", (req, res) => {
    const { proverb } = require('./scripts/fortune.json')

    const prov = proverb[Math.floor(Math.random() * proverb.length)]

    const text = [
        prov
    ]

    const response = text[Math.floor(Math.random() * text.length)]
    
    res.status(200).send({ response });
})

app.get("/api/fortune/", (req, res) => {
    const { proverb } = require('./scripts/fortune.json')
    
    res.status(200).send({ proverb });
})


//===========================================================================[ Biblimancy ] =======================================================================================================


app.get("/api/random/biblio/", (req, res) => {
    const { budda } = require('./scripts/biblio.json')
    const { crowley } = require('./scripts/crowley.json')
    const { verses } = require('./scripts/eng-bible.json')
    const { hindu } = require('./scripts/hinduism.json')
    const { proverb } = require('./scripts/fortune.json')


    const cro = crowley[Math.floor(Math.random() * crowley.length)]
    const ver = verses[Math.floor(Math.random() * verses.length)]
    const bud = budda[Math.floor(Math.random() * budda.length)]
    const hind = hindu[Math.floor(Math.random() * hindu.length)]
    const prov = proverb[Math.floor(Math.random() * proverb.length)]


    const text = [
        cro, ver, bud, hind, prov
    ]

    const response = text[Math.floor(Math.random() * text.length)]
    
    res.status(200).send({ response });
})

app.get("/api/biblio/", (req, res) => {
    const { all } = require('./scripts/biblio-all.json')
    
    res.status(200).send({ all });
})


//===========================================================================[ Tarot ] =======================================================================================================


app.get("/api/random/tarot/", (req, res) => {
    const { burnt } = require('./scripts/tarot.json')

    const tarot = burnt[Math.floor(Math.random() * burnt.length)]

    const text = [
        tarot
    ]

    const response = text[Math.floor(Math.random() * text.length)]
    
    res.status(200).send({ response });
})

app.get("/api/tarot/", (req, res) => {
    const { burnt } = require('./scripts/tarot.json')
    
    res.status(200).send({ burnt });
})

//===========================================================================[ Runes ] =======================================================================================================


app.get("/api/random/runes/", (req, res) => {
    const { runes } = require('./scripts/runes.json')

    const rune = runes[Math.floor(Math.random() * runes.length)]

    const text = [
        rune
    ]

    const response = text[Math.floor(Math.random() * text.length)]
    
    res.status(200).send({ response });
})

app.get("/api/runes/", (req, res) => {
    const { runes } = require('./scripts/runes.json')
    
    res.status(200).send({ runes });
})


//===========================================================================[ Facts ] =======================================================================================================


app.get("/api/random/fact/", (req, res) => {
    const { facts } = require('./scripts/facts.json')

    const fact = facts[Math.floor(Math.random() * facts.length)]

    const text = [
        fact
    ]

    const response = text[Math.floor(Math.random() * text.length)]
    
    res.status(200).send({ response });
})

//all
app.get("/api/fact/", (req, res) => {
    const { facts } = require('./scripts/facts.json')
    
    res.status(200).send({ facts });
})


app.use((req, res) => {
    res.status(400).send("this route is invalid")
})

app.listen(3000, () => console.log("server is online!"));