export interface DeleteRepositoryWebhookResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    result: {
        /**
         * webhook唯一标识
         * @example `524836`
         */
        id: number;
        /**
         * webhook链接URL
         * @example `https://xxxxx`
         */
        url: string;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 代码库ID
         * @example `2369234`
         */
        projectId: number;
        /**
         * 是否订阅分支推送事件
         * 可选值：true / false
         * @example `true`
         */
        pushEvents: boolean;
        /**
         * 是否订阅Issues事件
         * 可选值：true / false
         * @example `false`
         */
        issuesEvents: boolean;
        /**
         * 是否订阅合并请求事件
         * 可选值：true / false
         * @example `true`
         */
        mergeRequestsEvents: boolean;
        /**
         * 是否订阅标签推送事件
         * 可选值：true / false
         * @example `true`
         */
        tagPushEvents: boolean;
        /**
         * 是否订阅build事件
         * 可选值：true / false
         * @example `false`
         */
        buildEvents: boolean;
        /**
         * 是否订阅评论事件
         * 可选值：true / false
         * @example `true`
         */
        noteEvents: boolean;
        /**
         * 是否使用SSL认证
         * 可选值：true / false
         * @example `false`
         */
        enableSslVerification: boolean;
        /**
         * 最后执行结果，可选值：ok / error / ""（空字符串）
         * @example `""`
         */
        lastTestResult: string;
        /**
         * Webhook描述信息
         * @example `Webhook描述内容`
         */
        description: string;
        /**
         * 用于验证身份的token，用户自定义
         * @example `xxxx`
         */
        secretToken: string;
        /**
         * Webhook类型
         * 可选值：
         * ProjectHook（代码库webhook）；
         * OrganizationHook（企业webhook）
         * @example `ProjectHook`
         */
        type: string;
    };
}
