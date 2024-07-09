export interface QueryProjectShareDeviceListResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `An internal error occurred. Try again later.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `671D0F8F-FDC7-4B12-93FA-336C079C965A`
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
         * 当前页码。
         * @example `1`
         */
        PageId: number;
        /**
         * 返回数据的总条数。
         * @example `200`
         */
        Total: number;
        DeviceList: {
            /**
             * 返回的设备列表。
             */
            items: {
                /**
                 * 设备所属产品的**ProductKey**。
                 * @example `a1BwAGV****`
                 */
                ProductKey: string;
                /**
                 * 设备名称。
                 * @example `test`
                 */
                DeviceName: string;
                /**
                 * 是否可以分享。
                 * - **1**：可以。
                 * - **0**：不可以。
                 * @example `1`
                 */
                Sharable: number;
                /**
                 * 物联网平台为设备颁发的ID，是设备的唯一标识符。
                 * @example `Q7uOhVRdZRRlDnTLv****00100`
                 */
                IotId: string;
            }[];
        };
    };
}
