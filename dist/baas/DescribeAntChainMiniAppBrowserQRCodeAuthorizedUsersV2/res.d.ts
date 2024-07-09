export interface DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果消息
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
    /**
     * 请求消息
     * @example `OK`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 二维码类型，当前可以选值为 MINI_APP_BROWSER_TRANSACTION 代表支付宝小程序区块链浏览器。
         * @example `MINI_APP_BROWSER_TRANSACTION`
         */
        QRCodeType: string;
        /**
         * 授权类型， 当前可选值为 ALL_USER_AUTHORIZATION 代表授权所有用户，SPECIFIC_USER_AUTHORIZATION 代表授权部分用户，UNAUTHORIZED 代表未授权
         * @example `SPECIFIC_USER_AUTHORIZATION`
         */
        AuthorizationType: string;
        /**
         * 区块链ID
         * @example `4505A1E4-0EDD-4A02-A4D7-B49219328D49`
         */
        AntChainId: string;
        /**
         *
         * 授权用户列表
         */
        AuthorizedUserList: {
            /**
             * 授权时间
             * @example `2021-01-07 10:55:42`
             */
            GmtAuthorized: string;
            /**
             * 被授权手机号
             * @example `13800138011`
             */
            Phone: string;
        }[];
        /**
         * 分页情况
         */
        Pagination: {
            /**
             * 每页显示条例数
             * @example `10`
             */
            PageSize: number;
            /**
             * 页面编号，从1开始
             * @example `1`
             */
            PageNumber: number;
            /**
             * 总授权用户数
             * @example `100`
             */
            TotalCount: number;
        };
    };
}
