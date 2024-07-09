export interface DeleteGroupMemberRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `6082a9b0c7972588ac363793`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码组的主键ID
     * @example `34410`
     */
    "groupId": number;
    /**
     * 组成员的阿里云账号ID
     * @example `1789095186553536`
     */
    "aliyunPk": string;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 成员类型，填写默认值：USERS
         * @example `USERS`
         */
        memberType: string;
    };
}
