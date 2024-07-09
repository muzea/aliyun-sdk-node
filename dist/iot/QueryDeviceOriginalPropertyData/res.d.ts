export interface QueryDeviceOriginalPropertyDataResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.device.InvalidIoTId`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
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
     * 调用成功时，返回的设备属性记录。
     */
    Data: {
        /**
         * 下一页标识。
         * @example `Bo***x44Qx`
         */
        nextPageToken: string;
        /**
         * 是否有下一页属性记录。
         * - **true**：有。
         * - **false**：没有。
         * 返回**NextValid**为**true**时，可以将**NextPageToken**的值作为下次查询的**NextPageToken**，继续查询本次查询不显示的数据。
         * @example `true`
         */
        NextValid: boolean;
        List: {
            /**
             * 属性集合。每个元素代表一个属性。
             */
            PropertyInfo: {
                /**
                 * 属性值。
                 * @example `{\"data\":32.49}`
                 */
                Value: string;
                /**
                 * 属性修改时间。
                 * @example `1516541885630`
                 */
                Time: string;
            }[];
        };
    };
}
