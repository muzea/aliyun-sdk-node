export interface QueryDevicePropertyStatusResponse {
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
     * 调用成功时，返回的数据，详情请参见**List**包含的参数。
     */
    Data: {
        List: {
            /**
             * 返回的属性集合信息（**PropertyStatusInfo**）。
             */
            PropertyStatusInfo: {
                /**
                 * 属性修改的时间，单位是毫秒。
                 * @example `1517553572362`
                 */
                Time: string;
                /**
                 * 属性值。
                 * @example `25`
                 */
                Value: string;
                /**
                 * 属性格式类型，取值：
                 * - **int**：整型。
                 * - **float**：单精度浮点型。
                 * - **double**：双精度浮点型。
                 * - **enum**：枚举型。
                 * - **bool**：布尔型。
                 * - **text**：字符型。
                 * - **date**：时间型（String类型的UTC时间戳，单位是毫秒）。
                 * - **array**：数组型。
                 * - **struct**：结构体类型。
                 * @example `int`
                 */
                DataType: string;
                /**
                 * 属性值的单位。
                 * @example `°C`
                 */
                Unit: string;
                /**
                 * 属性标识符。
                 * @example `Temperature`
                 */
                Identifier: string;
                /**
                 * 属性名称。
                 * @example `temperature`
                 */
                Name: string;
            }[];
        };
    };
}
