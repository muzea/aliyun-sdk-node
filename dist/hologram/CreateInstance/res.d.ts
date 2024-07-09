export interface CreateInstanceResponse {
    /**
     * 请求ID。
     * @example `9CC37B9F-F4B4-5FF1-939B-AEE78DC70130`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 实例ID。
         * @example `hgpostcn-cn-xxxxxx`
         */
        InstanceId: string;
        /**
         * 订单ID。
         * @example `217523224780172`
         */
        OrderId: string;
        /**
         * 错误码。
         * @example `InvalidVpcOrVSwitch.NotAvailable`
         */
        Code: string;
        /**
         * 错误详细信息。
         * @example `专有网络或交换机不可用`
         */
        Message: string;
        /**
         * 创建是否成功。
         * - true：创建成功。
         * - false：创建失败。
         * @example `true`
         */
        Success: string;
    };
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `null`
     */
    ErrorCode: string;
}
