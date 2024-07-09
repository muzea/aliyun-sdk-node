export interface CreateAntChainAccountWithKeyPairAutoCreationRequest {
    /**
     * 区块链ID
     * @example `1q8B5R9p`
     */
    "AntChainId": string;
    /**
     * 账户名称
     * @example `accountname`
     */
    "Account": string;
    /**
     * 密码
     * @example `password`
     */
    "Password": string;
    /**
     * 恢复密码
     * @example `************`
     */
    "RecoverPassword": string;
}
