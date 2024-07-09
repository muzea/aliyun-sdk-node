export interface ListRepositoryWebhookResponse {
    /**
     * 错误信息
     * @example `“”`
     */
    errorMessage: string;
    /**
     * 请求ID
     * @example `HC93CE1A-8D7A-13A9-8306-7465DE2E5C0F`
     */
    requestId: string;
    /**
     * 总记录数。
     * @example `100`
     */
    total: number;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `SYSTEM_NOT_FOUND_ERROR`
     */
    errorCode: string;
    /**
     * dataSet列表
     */
    result: {
        /**
         * 是否为代码推送事件
         * 可选值：true / false
         * @example `false`
         */
        pushEvents: boolean;
        /**
         * 代码库ID
         * @example `2825387`
         */
        projectId: number;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * webhook链接
         * @example `https://xxxx`
         */
        url: string;
        /**
         * 是否为标签推送事件
         * 可选值：true / false
         * @example `false`
         */
        tagPushEvents: boolean;
        /**
         * 最后执行结果
         * 可选值：ok / error / ""（空字符串）
         * @example `ok`
         */
        lastTestResult: string;
        /**
         * 是否为代码合并事件
         * 可选值：true / false
         * @example `true`
         */
        mergeRequestsEvents: boolean;
        /**
         * 描述
         * @example `线下测试`
         */
        description: string;
        /**
         * 是否为评论事件
         * 可选值：true / false
         * @example `false`
         */
        noteEvents: boolean;
        /**
         * 密钥，用户自定义用于区分hook
         * @example `xxxx`
         */
        secretToken: string;
        /**
         * webhook唯一标识
         * @example `16776`
         */
        id: number;
        /**
         * 是否使用SSL认证
         * 可选值：true / false
         * @example `false`
         */
        enableSslVerification: boolean;
    }[];
}
