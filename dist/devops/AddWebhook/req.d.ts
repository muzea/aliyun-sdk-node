export interface AddWebhookRequest {
    /**
     * 企业标识，也称企业ID，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
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
     * @example `2835387`
     */
    "repositoryId": number;
    /**
     * 请求Body
     */
    "body": {
        /**
         * Webhook链接URL
         * @example `https://xxxxx`
         */
        url: string;
        /**
         * 是否订阅分支推送事件
         * 可选值：true / false
         * @example `true`
         */
        pushEvents: boolean;
        /**
         * 是否订阅合并请求事件
         * 可选值：true / false
         * @example `true`
         */
        mergeRequestsEvents: boolean;
        /**
         * 是否订阅标签推送事件
         * 可选值：true / false
         * @example `false`
         */
        tagPushEvents: boolean;
        /**
         * 是否订阅评论事件
         * 可选值：true / false
         * @example `false`
         */
        noteEvents: boolean;
        /**
         * 使用SSL认证
         * 可选值：true / false
         * @example `false`
         */
        enableSslVerification: boolean;
        /**
         * webhook描述
         * @example `线下测试`
         */
        description: string;
        /**
         * 用于验证身份的Token，用户自定义
         * @example `xxxx`
         */
        secretToken: string;
    };
}
