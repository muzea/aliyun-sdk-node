export interface UpdateApplicationResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `18A1F87E-591D-4491-90D5-2B101FA*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
    /**
     * 返回的应用信息数据
     */
    Application: {
        /**
         * 应用名称
         * @example `user1`
         */
        AppName: string;
        /**
         * 应用创建者
         * @example `user1`
         */
        CreateUsername: string;
        /**
         * 应用最后更新时间
         * @example `1564139945132`
         */
        UpdateTime: number;
        /**
         * 应用最后更新者
         * @example `user1`
         */
        UpdateUsername: string;
        /**
         * 应用创建时间
         * @example `1562048968834`
         */
        CreateTime: number;
        /**
         * 应用ID
         * @example `wa-5d1af9c802470221ab7*****`
         */
        AppId: string;
        /**
         * 应用类型
         * @example `Java`
         */
        CategoryName: string;
        /**
         * 应用描述
         * @example `This is a updated Description`
         */
        AppDescription: string;
    };
}
