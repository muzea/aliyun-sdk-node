export interface QuerySpeechLicenseDeviceListResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
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
             * 设备列表。
             */
            item: {
                /**
                 * License到期时间。
                 * @example `1620624606000`
                 */
                ExpiryTime: number;
                /**
                 * 设备所属产品的**ProductKey**。
                 * @example `a1BwAGV****`
                 */
                ProductKey: string;
                /**
                 * License状态。
                 * - **NORMAL**：正常。
                 * - **EXPIRE**：到期。
                 * - **EXPIRING**：即将到期。
                 * @example `NORMAL`
                 */
                LicenseStatus: string;
                /**
                 * 设备所属产品的名称。
                 * @example `test`
                 */
                ProductName: string;
                /**
                 * 设备名称。
                 * @example `test`
                 */
                DeviceName: string;
                /**
                 * 当前设备是否在指定的设备分组下。
                 * @example `true`
                 */
                InSpecifiedGroup: boolean;
                /**
                 * 设备状态。
                 * - **ONLINE**：在线。
                 * - **OFFLINE**：离线。
                 * - **UNACTIVE**：未激活。
                 * - **DISABLE**：禁用。
                 * - **DELETE**：已删除。
                 * @example `ONLINE`
                 */
                DeviceStatus: string;
                /**
                 * 物联网平台为设备颁发的ID，是设备的唯一标识符。
                 * @example `Q7uOhVRdZRRlDnTLv****00100`
                 */
                IotId: string;
            }[];
        };
    };
}
