import { envs } from './plugins/envs.plugin';
import 'dotenv/config'
import { Server } from './presentation/server';

(async() => {
    main();
})();

function main() {
    Server.start();
    // console.log( envs )
}