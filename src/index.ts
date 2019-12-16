import express from "express";
import { SupermarketScraper } from "supermarketscraper";

const app = express();
const port = 8080 || process.env.PORT;

const supermarkt = new SupermarketScraper();

app.get("/product/:productname", (req, res) => {
    const result = supermarkt.SearchProduct(req.param("productname"));
    result.then((resultNonAsync: any) => {
        res.send(resultNonAsync);
    });
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
