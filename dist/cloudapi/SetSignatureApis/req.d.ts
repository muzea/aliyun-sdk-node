export interface SetSignatureApisRequest {
    /**
     * 指定要操作的签名密钥id
     * @example `9242e31589fc41f4ba15dd52ffa2ce61`
     */
    "SignatureId": string;
    /**
     * 指定的分组编号
     * @example `b1eed5faa2404af4945cca26d611a136`
     */
    "GroupId": string;
    /**
     * 指定要操作的API编号
     * @example `7ce7022b23a340c7becd947487fad84c`
     */
    "ApiIds": string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    "StageName": string;
}
