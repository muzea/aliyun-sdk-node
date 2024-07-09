export interface CreateDataAPIServiceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~135176~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `请求参数错误`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `57b144cf-09fc-4916-a272-a62902d5b207`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回注册的设备信息。
     */
    Data: {
        /**
         * API的最后更新时间，单位为毫秒（ms）。
         * @example `1557839468865`
         */
        LastUpdateTime: number;
        /**
         * API资源标识符，API的全局唯一标识。
         * 示例：
         * `acs:iot:*:127103983461****:serveapi/device/getDeviceCountByStatus2`
         * 以上示例中的信息说明如下：
         * - `127103983461****`是阿里云主账号ID。
         * - `/device/getDeviceCountByStatus`是请求参数ApiPath的值，即API调用地址的自定义部分。
         * @example `acs:iot:*:127103983461****:serveapi/device/getDeviceCountByStatus2`
         */
        ApiSrn: string;
        /**
         * API的创建时间，单位为毫秒（ms）。
         * @example `1557839468865`
         */
        CreateTime: number;
    };
}
