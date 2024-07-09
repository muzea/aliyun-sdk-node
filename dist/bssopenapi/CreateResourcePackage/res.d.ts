export interface CreateResourcePackageResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6000EE23-274B-4E07-A697-FF2E999520A4`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 订单ID。
     * @example `202407022550621`
     */
    OrderId: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 订单ID。
         * @example `202407022550621`
         */
        OrderId: number;
        /**
         * 实例ID。
         * @example `OSSBAG-cn-****s`
         */
        InstanceId: string;
    };
}
