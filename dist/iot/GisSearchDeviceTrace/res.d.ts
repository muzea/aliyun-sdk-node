export interface GisSearchDeviceTraceResponse {
    /**
     * 200表示成功。其它表示错误码。错误码详情，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `4C717018-B6D4-5EB0-8495-2A4FF08D58CA`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回设备的轨迹信息。
     */
    Data: {
        /**
         * 设备名称。
         * @example `mock_device_name`
         */
        DeviceName: string;
        /**
         * 设备所属产品的**productKey**。
         * @example `g3r****Vjta`
         */
        ProductKey: string;
        /**
         * 轨迹点列表，最多返回200个点。
         */
        Points: {
            /**
             * 位置点时间，如果是纠偏过的轨迹，则没有该字段。
             * @example `1645071254000`
             */
            LocateTime: number;
            /**
             * 轨迹点坐标，格式为：（经度，维度）。
             * @example `120.0,30.0`
             */
            Location: string;
        }[];
    };
}
