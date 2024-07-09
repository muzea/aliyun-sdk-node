export interface GetAppResponse {
    /**
     * 错误信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 无
     */
    Data: {
        /**
         * 创建日期
         * @example `1`
         */
        CreatedAt: string;
        /**
         * 关闭状态
         * @example `false`
         */
        Disabled: string;
        /**
         * 应用名称
         * @example `应用`
         */
        Name: string;
        /**
         * 客户端相关配置
         * @example `{}`
         */
        Config: string;
        /**
         * 对账 ID
         * @example `ff1d7783-e087-4d62-92df-3a163eca7c07`
         */
        FeeId: string;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
