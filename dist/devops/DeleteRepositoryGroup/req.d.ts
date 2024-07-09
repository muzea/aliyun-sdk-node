export interface DeleteRepositoryGroupRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `624666bd54d036291ae13a36`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码组主键ID
     * @example `22901`
     */
    "groupId": number;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 删除代码组的原因（必填）
         * @example `代码组废弃且不再使用`
         */
        reason: string;
    };
}