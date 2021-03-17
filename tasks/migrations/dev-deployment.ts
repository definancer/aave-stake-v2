import { task } from 'hardhat/config';
import { eContractid } from '../../helpers/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { StakedAave } from '../../types/StakedAave';

let log = console.log;

task('dev-deployment', 'Deployment in hardhat').setAction(async (_, localBRE) => {
  log(`--------------------------`);
  const DRE: HardhatRuntimeEnvironment = await localBRE.run('set-dre');

  // debugger;
  for (let key in localBRE) {
    log(key);
  }

  log(`deploy-${eContractid.StakedAave} \n\n`);
  const aaveStake = (await DRE.run(`deploy-${eContractid.StakedAave}`)) as StakedAave;
});
