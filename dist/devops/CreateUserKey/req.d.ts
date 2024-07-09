export interface CreateUserKeyRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513
    `
     */
    "accessToken"?: string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * SSH-Key的公钥串
         * @example `xxx`
         */
        publicKey: string;
        /**
         * SSH-Key的标题信息
         * @example `SSH Title`
         */
        title: string;
        /**
         * 必填，作用范围，可选值：ALL、READ
         * - ALL：全部（读/写操作包括 clone/pull/push 等）
         * - READ：只读（仅支持 clone/pull ）
         * @example `ALL`
         */
        keyScope: string;
        /**
         * 过期时间
         * @example `2022-03-12 12:00:00`
         */
        expireTime: string;
    };
}
