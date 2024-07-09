export interface CreateProjectLabelResponse {
    /**
     * 请求ID，每次请求都是唯一值，便于后续排查问题
     * @example `A7586FEB-E48D-5579-983F-74981FBFF627`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 类标ID，唯一标识
         * @example `b5b5738b94954bc6aa5a293316ed1d24`
         */
        id: string;
        /**
         * 类标名称
         * @example `新特性`
         */
        name: string;
        /**
         * 类标颜色
         * @example `#006AD4`
         */
        color: string;
        /**
         * 类标描述
         * @example `新的特性或需求
        `
         */
        description: string;
    };
}
