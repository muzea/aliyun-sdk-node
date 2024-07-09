export interface CreateAntChainAccountRequest {
    /**
     * 区块链ID
     * @example `bDXK6boZ`
     */
    "AntChainId": string;
    /**
     * 账号名，只能是英文大小写、数字、汉字及短划线（-）的自由组合
     * @example `test`
     */
    "Account": string;
    /**
     * 账户公钥，属于hash值，固定128个字符
     * @example `AEDC32...`
     */
    "AccountPubKey": string;
    /**
     * 账户恢复公钥，属于hash值，固定128个字符
     * @example `AEDC32...`
     */
    "AccountRecoverPubKey": string;
}
