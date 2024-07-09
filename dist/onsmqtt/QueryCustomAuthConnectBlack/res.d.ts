export interface QueryCustomAuthConnectBlackResponse {
    /**
     * Id of the request
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
    /**
     * 接口返回码：200：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 是否调用成功：true：调用成功。                                 false：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 返回参数数据结构。
     */
    Data: {
        /**
         * 返回数据。
         */
        Results: {
            /**
             * 设备的Client ID。
             * @example `GID_TEST@@@test`
             */
            ClientId: string;
            /**
             * 允许或拒绝。
             * @example `ALLOW`
             */
            Effect: string;
            /**
             * 授权操作。
             * @example `CONNECT`
             */
            PermitAction: string;
        }[];
        /**
         * 下一页的token。
         * @example `AAAAAZ0cM0HTqLXvgm7oMHWXcvc=`
         */
        NextToken: string;
    };
}
