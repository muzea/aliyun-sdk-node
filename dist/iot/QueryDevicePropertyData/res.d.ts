export interface QueryDevicePropertyDataResponse {
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
     * 调用成功时，返回的设备属性记录。
     */
    Data: {
        /**
         * 下一页面中的属性记录的起始时间。
         * - 当属性记录的排序方式为倒序（入参**Asc**为**0**），调用本接口查询下一页属性记录时，该值可作为下次查询的入参**EndTime**的值。
         * - 当属性记录的排序方式为正序（入参**Asc**为**1**），调用本接口查询下一页属性记录时，该值可作为下次查询的入参**StartTime**的值。
         * @example `1579249499000`
         */
        NextTime: number;
        /**
         * 是否有下一页属性记录。
         * - **true**：有，返回**NextTime**。详细说明，请参见**NextTime**描述。
         * - **false**：没有。
         * @example `true`
         */
        NextValid: boolean;
        List: {
            /**
             * 属性数据列表。
             */
            PropertyInfo: {
                /**
                 * 属性值。
                 * @example `2`
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
