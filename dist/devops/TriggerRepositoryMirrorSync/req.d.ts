export interface TriggerRepositoryMirrorSyncRequest {
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513
    `
     */
    "accessToken"?: string;
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如 https://devops.aliyun.com/organization/
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 代码库ID
     * @example `100`
     */
    "repositoryId": number;
    /**
     * 远程同步库克隆账号
     * @example `test-account`
     */
    "account"?: string;
    /**
     * 远程同步库克隆令牌
     * @example `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`
     */
    "token"?: string;
}
