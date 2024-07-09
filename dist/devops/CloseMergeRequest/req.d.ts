export interface CloseMergeRequestRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `0cf2c8458ac44d9481aab2dd6ec10596v3
    `
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2369234`
     */
    "repositoryId": number;
    /**
     * 合并请求局部ID，表示代码库下的第几个合并请求
     * @example `1`
     */
    "localId": number;
}
