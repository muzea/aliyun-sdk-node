export interface BatchGetDeviceBindStatusResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `B1DF865D-2474-4CD5-9B7E-59B06D204CBF`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时返回的数据。
     */
    Data: {
        /**
         * 网关或设备是否已绑定到边缘实例。
         * - 0：表示未绑定。
         * - 1：表示已绑定。
         * @example `1`
         */
        BindStatus: number;
        /**
         * 实例ID。
         * @example `iot-v64********`
         */
        InstanceId: string;
        /**
         * 设备ID。
         * @example `sjI0Sd124XFYyjBYMiYO******`
         */
        IotId: string;
    }[];
}
