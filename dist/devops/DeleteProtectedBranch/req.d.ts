export interface DeleteProtectedBranchRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `611b75680fc7bf0dbe1dce55`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2813489`
     */
    "repositoryId": number;
    /**
     * 保护分支规则ID
     * @example `5326`
     */
    "protectedBranchId": number;
}
