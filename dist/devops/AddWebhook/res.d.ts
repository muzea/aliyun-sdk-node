export interface AddWebhookResponse {
    /**
     * 错误信息
     * @example `“”`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `6177543A-8D54-5736-A93B-E0195A1512CB`
     */
    requestId: string;
    /**
     * 错误码
     * @example `SYSTEM_NOT_FOUND_ERROR`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 结果。
     */
    result: {
        /**
         * 是否订阅分支推送事件
         * 可选值：true / false
         * @example `true`
         */
        pushEvents: boolean;
        /**
         * 代码库ID
         * @example `2835387`
         */
        repositoryId: number;
        /**
         * 创建时间
         * @example `2022-03-12 12:00:00`
         */
        createdAt: string;
        /**
         * webhook链接URL
         * @example `https://xxxxx`
         */
        url: string;
        /**
         * 是否订阅标签推送事件
         * 可选值：true / false
         * @example `true`
         */
        tagPushEvents: boolean;
        /**
         * 最后执行结果
         * 可选值：ok / error / ""（空字符串）
         * @example `ok`
         */
        lastTestResult: string;
        /**
         * 描述信息
         * @example `线下测试`
         */
        description: string;
        /**
         * 是否订阅合并请求事件
         * 可选值：true / false
         * @example `true`
         */
        mergeRequestsEvents: boolean;
        /**
         * 用于验证身份的token，用户自定义
         * @example `xxxx`
         */
        secretToken: string;
        /**
         * 是否订阅评论事件
         * 可选值：true / false
         * @example `false`
         */
        noteEvents: boolean;
        /**
         * webhook唯一标识
         * @example `30815`
         */
        id: number;
        /**
         * 是否使用SSL认证
         * 可选值：true / false
         * @example `false`
         */
        enableSslVerification: boolean;
    };
}
