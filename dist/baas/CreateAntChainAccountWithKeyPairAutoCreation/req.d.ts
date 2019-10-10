interface CreateAntChainAccountWithKeyPairAutoCreationRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 账户名称
    * @example `accountname`
    */ "Account": string;
    /**
    * 密码
    * @example `password`
    */ "Password": string;
    "RecoverPassword": string;
    /**
    * 区块链ID
    * @example `1q8B5R9p`
    */ "AntChainId": string;
}
export { CreateAntChainAccountWithKeyPairAutoCreationRequest };