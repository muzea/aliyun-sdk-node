export interface QueryDevicePropertiesDataResponse {
    /**
     * 目前本接口不支持分页查询，请忽略此参数返回值。
     * @example `true`
     */
    NextValid: boolean;
    /**
     * 目前本接口不支持分页查询，请忽略此参数返回值。
     * @example `1579249499000`
     */
    NextTime: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    PropertyDataInfos: {
        /**
         * 调用成功时，返回的属性信息列表（**PropertyDataInfo**）。
         */
        PropertyDataInfo: {
            /**
             * 属性的标识符。
             * @example `temperature`
             */
            Identifier: string;
            List: {
                /**
                 * 属性数据列表。
                 */
                PropertyInfo: {
                    /**
                     * 属性值。
                     * @example `21.3`
                     */
                    Value: string;
                    /**
                     * 属性上报时间。取值为毫秒值时间戳，例如：1579249499000。
                     * @example `1579249499000`
                     */
                    Time: number;
                }[];
            };
        }[];
    };
}
