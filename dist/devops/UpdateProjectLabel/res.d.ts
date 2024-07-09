export interface UpdateProjectLabelResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
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
         * @example `8d84d73cf315473683400760f02dbfc1`
         */
        id: string;
        /**
         * 类标名称
         * @example `缺陷`
         */
        name: string;
        /**
         * 类标颜色
         * @example `#EF433B`
         */
        color: string;
        /**
         * 类标描述
         * @example `需要进行修复的缺陷`
         */
        description: string;
    };
}
