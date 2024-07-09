export interface UpdateMergeRequestPersonnelRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
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
     * @example `1233456`
     */
    "repositoryId": number;
    /**
     * 合并请求局部ID，表示代码库下的第几个合并请求
     * @example `1`
     */
    "localId": number;
    /**
     * 干系人的类型
     * - REVIEWER：评审人
     * - SUBSCRIBER：关注人
     * @example `REVIEWER`
     */
    "personType": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 干系人的阿里云账号ID列表
         */
        newUserIdList: string[];
    };
}
