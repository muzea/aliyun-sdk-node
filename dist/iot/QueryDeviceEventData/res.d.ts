export interface QueryDeviceEventDataResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
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
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的设备事件记录。
     */
    Data: {
        /**
         * 是否有下一页事件记录。
         * - **true**：有，返回**NextTime**。详细说明，请参见**NextTime**描述。
         * - **false**：没有。
         * @example `true`
         */
        NextValid: boolean;
        /**
         * 下一页面中的事件记录的起始时间。毫秒级时间戳。
         * - 当事件记录的排序方式为倒序（入参**Asc**为0或不传入），调用本接口查询下一页事件记录时，该值可作为下次查询的入参**EndTime**的值。
         * - 当事件记录的排序方式为正序（入参**Asc**为1），调用本接口查询下一页事件记录时，该值可作为下次查询的入参**StartTime**的值。
         * @example `1579163099000`
         */
        NextTime: number;
        List: {
            /**
             * 事件集合。每个元素代表一个事件。
             */
            EventInfo: {
                /**
                 * 事件标识符。
                 * @example `PowerOff`
                 */
                Identifier: string;
                /**
                 * 事件的输出参数，map格式的字符串。
                 * @example `{"structArgs":{"structchildFLOATf71c20e":1.23}}`
                 */
                OutputData: string;
                /**
                 * 事件发生时间。毫秒级时间戳。
                 * @example `1579163099000`
                 */
                Time: string;
                /**
                 * 事件类型。
                 * - **info**：信息。
                 * - **alert**：告警。
                 * - **error**：故障。
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
