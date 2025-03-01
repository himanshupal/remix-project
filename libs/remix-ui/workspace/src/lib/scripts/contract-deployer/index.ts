export const contractDeployerScripts = async (plugin) => {
    await plugin.call('fileManager', 'writeFile', 
        'scripts/contract-deployer/create2-factory-deploy.ts' ,
        // @ts-ignore
        (await import('!!raw-loader!./create2-factory-deploy.ts')).default)
    
    await plugin.call('fileManager', 'writeFile', 
        'scripts/contract-deployer/basic-contract-deploy.ts' ,
        // @ts-ignore
        (await import('!!raw-loader!./basic-contract-deploy.ts')).default)
}