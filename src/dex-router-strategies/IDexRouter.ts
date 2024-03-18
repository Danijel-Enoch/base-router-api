export interface IdexRouter {
    factory: string;
    router: string;
     getPairAddress:  (token0:string,token1:string) => any;
    checkIfpairExistOnDex:(token0:string,token1:string) => any;
    getPairAddressBalance:(token0:string,token1:string) => any;
}