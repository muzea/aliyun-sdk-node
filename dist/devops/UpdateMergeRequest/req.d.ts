export interface UpdateMergeRequestRequest {
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
     * @example `889910`
     */
    "repositoryId": number;
    /**
     * 合并请求局部ID，表示代码库下的第几个合并请求
     * @example `1`
     */
    "localId": number;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 合并请求标题
         * @example `test-更新标题`
         */
        title: string;
        /**
         * 合并请求描述信息
         * @example `test-描述信息`
         */
        description: string;
    };
}