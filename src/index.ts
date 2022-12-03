import { paymentRouter } from './Routes/paymentRouter';
import { clientRouter } from './Routes/clientRouter';
import app from "./app";

app.use("/client", clientRouter)
app.use("/payment", paymentRouter)

