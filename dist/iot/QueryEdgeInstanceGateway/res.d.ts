export interface QueryEdgeInstanceGatewayResponse {
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
     * @example `28D159F4-980F-423D-95F0-F705E9DFC016`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的网关数据。
     */
    GatewayList: {
        /**
         * 网关所属产品的Key，产品的唯一标识符。
         * @example `a1mAdeG****`
         */
        ProductKey: string;
        /**
         * 边缘服务版本号。
         * @example `v1.0.0`
         */
        EdgeVersion: string;
        /**
         * 网关设备名称。
         * @example `gateway_01`
         */
        DeviceName: string;
        /**
         * 网关设备的ID，物联网平台为设备生成的唯一标识符。
         * @example `LuD9x5hiRUdVemWU****000101`
         */
        IotId: string;
    }[];
}
