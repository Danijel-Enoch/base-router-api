import { UniswapV2Factory, UniswapV2Factory__factory, Uniswapv2Router, Uniswapv2Router__factory } from "src/types/contracts"
import { IdexRouter } from "./IDexRouter"
import { UniswapV3 } from "."
import { ERC20__factory } from "src/types/contracts/factories/ERC20__factory"
import { Provider } from "ethers"

export default class Uniswapv2 implements IdexRouter{
    factory:string
    router:string
    factoryContract:UniswapV2Factory
    routerContract:Uniswapv2Router
    provider:Provider
     constructor(factory:string,router:string,provider:Provider){
        this.provider=provider
        this.factory=factory
        this.factoryContract= UniswapV2Factory__factory.connect(factory,this.provider)
        this.routerContract= Uniswapv2Router__factory.connect(router,this.provider)
        this.router=router
        
    }

    async getPairAddress(token0:string,token1:string){
        return await this.factoryContract.getPair(token0,token1)

    }
    async checkIfpairExistOnDex(token0:string,token1:string){
        let isAvailable=false;
            await this.getPairAddress(token0,token1).then(res=>{
                isAvailable=true
            }).catch(err=>{
                isAvailable=false
            })
        return isAvailable
    }
    async getPairAddressBalance(token0:string,token1:string){
        const token1Contract= ERC20__factory.connect(token1,this.provider)
        const token0Contract= ERC20__factory.connect(token0,this.provider)
        const pairAddress= (await this.getPairAddress(token0,token1)).toString()
        const token0PairContractBalance=(await token0Contract.balanceOf(pairAddress)).toString()
        const token1PairContractBalance= (await token1Contract.balanceOf(pairAddress)).toString()
        return {balance:token1PairContractBalance,balance0:token0PairContractBalance}
    }
    
}