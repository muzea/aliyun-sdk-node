export interface DeleteRepositoryMemberRequest {
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
     * 代码库ID
     * @example `2080398`
     */
    "repositoryId": number;
    /**
     * 阿里云账号ID
     * @example `1789095186553536`
     */
    "aliyunPk": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 成员类型
         * TEAMS：部门
         * USERS：员工
         * @example `USERS`
         */
        memberType: string;
    };
}
