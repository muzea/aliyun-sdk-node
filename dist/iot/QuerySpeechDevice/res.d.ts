export interface QuerySpeechDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `speech solution has not been signed`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `AF71BF1D-B552-47CD-B34B-352557627992`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 每页返回的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 返回数据的总条数。
         * @example `200`
         */
        Total: number;
        /**
         * 当前页。
         * @example `1`
         */
        PageId: number;
        List: {
            /**
             * 返回的设备列表。
             */
            Items: {
                /**
                 * 设备所隶属产品的ProductKey。
                 * @example `a1BwAGV****`
                 */
                ProductKey: string;
                /**
                 * 设备的实际可用空间，单位KB。
                 * @example `200`
                 */
                AvailableSpace: number;
                /**
                 * 设备名称。
                 * @example `test`
                 */
                DeviceName: string;
                /**
                 * 物联网平台为设备颁发的ID，是设备的唯一标识符。
                 * @example `Q7uOhVRdZRRlDnTLv****00100`
                 */
                IotId: string;
            }[];
        };
    };
}
