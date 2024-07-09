export interface QueryDeviceOriginalEventDataResponse {
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
     * 表示是否调用成功。
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的设备事件记录。
     */
    Data: {
        /**
         * 下一页标识。
         * @example `Bo***x44Qx`
         */
        NextPageToken: string;
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
             * 事件集合。每个元素代表一个事件。事件详情请参见**EventInfo**下参数。
             */
            EventInfo: {
                /**
                 * 事件标识符。
                 * @example `PowerOff`
                 */
                Identifier: string;
                /**
                 * 事件的输出参数，MAP格式的字符串。
                 * @example `{"structArgs":{"structchildFLOATf71c20e":1.23}}`
                 */
                OutputData: string;
                /**
                 * 事件发生时间。毫秒级的13位时间戳。
                 * @example `1579163099000`
                 */
                Time: string;
                /**
                 * 事件类型。
                 * - info：信息。
                 * - alert：告警。
                 * - error：故障。
                 * @example `info`
                 */
                EventType: string;
                /**
                 * 事件名称。
                 * @example `设备关机`
                 */
                Name: string;
            }[];
        };
    };
}
