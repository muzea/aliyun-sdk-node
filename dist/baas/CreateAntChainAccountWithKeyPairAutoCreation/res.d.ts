export interface CreateAntChainAccountWithKeyPairAutoCreationResponse {
    /**
     * 请求ID
     * @example `5F058BB4-3043-4638-86D4-EED84AD1AE54`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 账户公钥
         * @example `b***7`
         */
        AccountPublicKey: string;
        /**
         * 账户名
         * @example `accountname`
         */
        Account: string;
        /**
         * 账户恢复私钥
         * @example `-----BEGIN ENCRYPTED PRIVATE KEY-----\nM***Io=\n-----END ENCRYPTED PRIVATE KEY-----\n`
         */
        AccountRecoverPrivateKey: string;
        /**
         * 账户恢复公钥
         * @example `d***b`
         */
        AccountRecoverPublicKey: string;
        /**
         * 账户私钥
         * @example `-----BEGIN ENCRYPTED PRIVATE KEY-----\nM***8=\n-----END ENCRYPTED PRIVATE KEY-----\n`
         */
        AccountPrivateKey: string;
        /**
         * 区块链ID
         * @example `1q8B5R9p`
         */
        AntChainId: string;
    };
}
