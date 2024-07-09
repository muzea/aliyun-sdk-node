export interface QueryDeviceDesiredPropertyResponse {
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
     * 调用成功时，返回的数据（**List**）。
     */
    Data: {
        List: {
            /**
             * 返回的期望属性信息（**DesiredPropertyInfo**）。
             */
            DesiredPropertyInfo: {
                /**
                 * 期望属性值的修改时间，单位是毫秒。
                 * @example `1579335899000`
                 */
                Time: string;
                /**
                 * 期望属性值。
                 * > 如果已调用[ClearDeviceDesiredProperty](~~477431~~)接口清空对应属性的期望值，则不会返回参数**Value**。
                 * @example `34`
                 */
                Value: string;
                /**
                 * 属性数据类型。
                 * @example `int`
                 */
                DataType: string;
                /**
                 * 当前期望属性值的版本号。
                 * @example `1`
                 */
                Version: number;
                /**
                 * 属性单位。
                 * @example `℃`
                 */
                Unit: string;
                /**
                 * 属性标识符。
                 * @example `Temperature`
                 */
                Identifier: string;
                /**
                 * 属性名称。
                 * @example `airconditioning`
                 */
                Name: string;
            }[];
        };
    };
}
