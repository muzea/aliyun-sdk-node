export interface QueryEdgeInstanceDeviceResponse {
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
     * @example `AC76932E-E0C9-41EE-843D-B1CA3279B053`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的设备数量。
         * @example `15`
         */
        PageSize: number;
        /**
         * 设备数量。
         * @example `4`
         */
        Total: number;
        /**
         * 设备信息列表。
         */
        DeviceList: {
            /**
             * 产品的唯一标识符。
             * @example `a1p5QfE****`
             */
            ProductKey: string;
            /**
             * 驱动ID。
             * @example `44c090ba7b104641a4b9bcf10241****`
             */
            DriverId: string;
            /**
             * 设备名称。
             * @example `test_tmp_zdy`
             */
            DeviceName: string;
            /**
             * 设备ID。
             * @example `XSpPdtxzE6ebtCkx****000101`
             */
            IotId: string;
        }[];
    };
}
