export interface QueryDevicesHotStorageDataResponse {
    /**
     * 调用失败时，返回错误码。详细信息，请参见下文**错误码**。
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
     * 调用成功后，返回的数据。
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
             * 时序数据集合。
             */
            PropertyInfo: {
                /**
                 * 字段值。
                 * @example `2`
                 */
                Value: string;
                /**
                 * 字段值对应时间戳，单位为毫秒。
                 * @example `1516541885630`
                 */
                Time: string;
            }[];
        };
    };
}
