

const { expect } = require("chai");


     describe("initialize", function (){ 
   
      it( "intialized", async () => {
     
        signers = await ethers.getSigners();
                 
        const Factory = await ethers.getContractFactory("UniswapV3Factory");
        const factory = await Factory.deploy();
                        await factory.deployed();
          
        

        const PoolDeploy = await ethers.getContractFactory("UniswapV3PoolDeployer");
        const poolDeploy = await PoolDeploy.deploy();
                           await poolDeploy.deployed();

        const Token0 = await ethers.getContractFactory("ERC20_");
        const token0 = await Token0.deploy("token0", "token0");
                       await token0.deployed();

        const Token1 = await ethers.getContractFactory("ERC20_");
        const token1 = await Token1.deploy("token1", "token1");
                       await token1.deployed();

     




        

                      
                      

        
        // 1. create pool

        const _enableFeeAmount = await factory.enableFeeAmount(2000, 7998);
                                 await _enableFeeAmount.wait()


                          pool = (await ethers.getContractAt(
                                    "UniswapV3Pool",
                                    await factory.getPool(token0.address, token1.address, "3000")
                                  )) 

                                 

       // 2. initialize the pool
                                  await pool.initialize(2000);
                         
                                  

 

        // strategy_factory

                const Strategy_Factory = await ethers.getContractFactory("DefiEdgeStrategyFactory");
                const _strategy_factory = await Strategy_Factory.deploy(signers[0].address);
                                          await _strategy_factory.deployed();





        // creating strategy
                                          /**
                                           *  white list the pool  then create strategy
                                           */


                                          await _strategy_factory.whitelistPool(pool.address);
                                    
                                          await _strategy_factory.createStrategy(pool.address, signers[0].address);

        // get strategy
                                strategy01 = (await ethers.getContractAt(
                                            "DefiEdgeStrategy",
                                            await _strategy_factory.strategyByIndex(await _strategy_factory.totalIndex())
                                          )) 

       // initialising strategy 
                                
                                 
              })





              describe ("mint", function () { 
                it(" Minting ", async () => {

                  const Token0 = await ethers.getContractFactory("ERC20_");
                  const token0 = await Token0.deploy("token0", "token0");
                                 await token0.deployed();
                                 
                                  /// console.log( awaittoken0.balanceOf(signers[0].address));
                                

                    
                      

                const Token1 = await ethers.getContractFactory("ERC20_");
                const token1 = await Token1.deploy("token1", "token1");
                              await token1.deployed();
            


           const Strategy_Factory =  await ethers.getContractFactory("DefiEdgeStrategyFactory");
           const _strategy_factory = await Strategy_Factory.deploy(signers[0].address);
                                        await _strategy_factory.deployed();

                     const Factory = await ethers.getContractFactory("UniswapV3Factory");
                     const factory = await Factory.deploy();
                                     await factory.deployed();

            const Defi_strategy =  await ethers.getContractFactory("DefiEdgeStrategy");
             const defi_strategy = await  Defi_strategy.deploy(_strategy_factory.address, pool.address, signers[0].address);
                                  await  defi_strategy.deployed();
                  const _amt    = [0,0 ,3000, 4000];     // randomly selected
                                  await defi_strategy.initialize(_amt);


                              pool = (await ethers.getContractAt(
                                    "UniswapV3Pool",
                                    await factory.getPool(token0.address, token1.address, "3000")
                                    )) 
                                    await pool.initialize(2000);
                                    await _strategy_factory.whitelistPool(pool.address);


                                    await token0.approve(defi_strategy.address, 10000);
                                    await token1.approve(defi_strategy.address, 10000);
                   

                              /*   await defi_strategy.mint(
                                      400,
                                     4500,
                                      0,
                                      0,
                                      0
                                    );

                                    */
                               })

                             
              })

                                  


            
                   describe("burn", function (){

                      it("should burn share tokens", async () => {





                                      const Token0 = await ethers.getContractFactory("ERC20_");
                                      const token0 = await Token0.deploy("token0", "token0");
                                                    await token0.deployed();
                                    const Token1 = await ethers.getContractFactory("ERC20_");
                                    const token1 = await Token1.deploy("token1", "token1");
                                                  await token1.deployed();
                                
                    
                    
                              const Strategy_Factory =  await ethers.getContractFactory("DefiEdgeStrategyFactory");
                              const _strategy_factory = await Strategy_Factory.deploy(signers[0].address);
                                                            await _strategy_factory.deployed();
                    
                                        const Factory = await ethers.getContractFactory("UniswapV3Factory");
                                        const factory = await Factory.deploy();
                                                        await factory.deployed();
                    
                                const Defi_strategy =  await ethers.getContractFactory("DefiEdgeStrategy");
                                const defi_strategy = await  Defi_strategy.deploy(_strategy_factory.address, pool.address, signers[0].address);
                                                      await  defi_strategy.deployed();
                                      const _amt    = [0,0 ,3000, 4000];     // randomly selected
                                                      await defi_strategy.initialize(_amt);
                                                        
                    
                    
                                                  pool = (await ethers.getContractAt(
                                                        "UniswapV3Pool",
                                                        await factory.getPool(token0.address, token1.address, "3000")
                                                        )) 
                                                        await pool.initialize(2000);
                                                        await _strategy_factory.whitelistPool(pool.address);
                    
                    
                                                        await token0.approve(defi_strategy.address, 10000);
                                                        await token1.approve(defi_strategy.address, 10000);
                          

                                                    await defi_strategy.mint(
                                                                                  400,
                                                                                4500,
                                                                                  0,
                                                                                  0,
                                                                                  0
                                                                                );
                                                                                
                                                                          })

                                                        await defi_strategy.burn(11, 10, 10);
                                                      
                                                                          


                                                       
                                                                         });


                            describe("rebalance", function () {

                                  it("should rebalance", async () =>{



                              const Strategy_Factory =  await ethers.getContractFactory("DefiEdgeStrategyFactory");
                              const _strategy_factory = await Strategy_Factory.deploy(signers[0].address);
                                                            await _strategy_factory.deployed();
                    
                                        const Factory = await ethers.getContractFactory("UniswapV3Factory");
                                        const factory = await Factory.deploy();
                                                        await factory.deployed();
                    
                                const Defi_strategy =  await ethers.getContractFactory("DefiEdgeStrategy");
                                const defi_strategy = await  Defi_strategy.deploy(_strategy_factory.address, pool.address, signers[0].address);
                                                      await  defi_strategy.deployed();
                                      const _amt    = [0,0 ,3000, 4000];     // randomly selected
                                                      await defi_strategy.initialize(_amt);
                                                        
                    
                    
                                               pool = (await ethers.getContractAt(
                                                        "UniswapV3Pool",
                                                        await factory.getPool(token0.address, token1.address, "3000")
                                                        )) 
                                                        await pool.initialize(2000);
                                                        await _strategy_factory.whitelistPool(pool.address);


                                await token0.approve(strategy.address, expandTo18Decimals(1000000));
                                await token1.approve(strategy.address, expandTo18Decimals(1000000));
                          
                                await defi_strategy.mint(
                                  100,
                                  4500,
                                  0,
                                  0,
                                  0
                                );
                              });

                              it("should redeploy the amounts if on hold", async () => {
                                await strategy.hold();
                                const _amt = [1,89 ,1000, 2000];  // randomly selected
                                await strategy.rebalance(_amt)
                                  






                               })

                            })




                  });

               








              
                   
                   








     

     
    
  
        




                    


            

          
        


        



   






 
