export interface ListGroupMemberRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `632bbfdf419338aaa2b1360a`
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
     * 代码组的主键ID
     * @example `22901`
     */
    "groupId": number;
}
