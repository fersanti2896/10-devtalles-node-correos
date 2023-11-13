import { envs } from './plugins/envs.plugin';
import 'dotenv/config'

(async() => {
    main();
})();

function main() {
    // Server.start();
    console.log( envs )
}