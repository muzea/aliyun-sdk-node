interface CreateAntChainAccountRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 账号名
    * @example `test`
    */ "Account": string;
    /**
    * 账户公钥
    * @example `AEDC32...`
    */ "AccountPubKey": string;
    /**
    * 账户恢复公钥
    * @example `AEDC32...`
    */ "AccountRecoverPubKey": string;
    /**
    * 区块链ID
    * @example `bDXK6boZ`
    */ "AntChainId": string;
}
export { CreateAntChainAccountRequest };