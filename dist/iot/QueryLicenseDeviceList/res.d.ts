export interface QueryLicenseDeviceListResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见本文下方**错误码**。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `291438BA-6E10-4C4C-B761-243B9A0D324F`
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
     * 返回的结果信息。
     */
    Data: {
        /**
         * 每页显示的记录数。
         * @example `2`
         */
        PageSize: number;
        /**
         * 分页查询的当前页码。
         * @example `1`
         */
        PageId: number;
        /**
         * 总记录数。
         * @example `10`
         */
        Total: number;
        DeviceList: {
            /**
             * 设备列表信息。
             */
            item: {
                /**
                 * 设备授权License的失效时间。
                 * @example `1690934297000`
                 */
                ExpiryTime: number;
                /**
                 * 设备所属产品的**ProductKey**。
                 * @example `es****`
                 */
                ProductKey: string;
                /**
                 * 产品名称。
                 * @example `测试产品`
                 */
                ProductName: string;
                /**
                 * 设备名称。
                 * @example `device1`
                 */
                DeviceName: string;
                /**
                 * 设备授权License的时间。
                 * @example `1620634297000`
                 */
                GmtCreate: number;
                /**
                 * License类型（音视频规格），可取值：**480P**、**720P**。
                 * @example `720P`
                 */
                LicenseCode: string;
                /**
                 * 设备ID。
                 * @example `Q7uOhVRdZRRlDnTLv****00100`
                 */
                IotId: string;
            }[];
        };
    };
}
