import {app} from "./app";
import {log} from "./core/Logger";

const PORT = 3000;

app.listen(PORT, () => log(`🚀 Server running on port ${PORT}`));





