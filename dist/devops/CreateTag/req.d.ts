export interface CreateTagRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
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
     * @example `2080972`
     */
    "repositoryId": number;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 标签名
         * @example `v1.0`
         */
        tagName: string;
        /**
         * 标签创建的来源，可以为分支名称、标签名称或提交版本
         * @example `master`
         */
        ref: string;
        /**
         * 标签的描述信息
         * @example `描述信息`
         */
        message: string;
    };
}
