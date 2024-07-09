export interface QueryDeviceOriginalServiceDataResponse {
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
     * 调用成功时，返回的设备服务调用记录。
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
             * 服务调用记录集合。每个元素代表一个服务调用记录。服务信息请参见**ServiceInfo**下参数。
             */
            ServiceInfo: {
                /**
                 * 服务标识符。
                 * @example `Set`
                 */
                Identifier: string;
                /**
                 * 服务的输出参数，MAP格式的字符串，结构为`key:value`。
                 * @example `{\"code\":200,\"data\":{},\"id\":\"100686\",\"message\":\"success\",\"version\":\"1.0\"}`
                 */
                OutputData: string;
                /**
                 * 调用服务的时间。
                 * @example `1579249499000`
                 */
                Time: string;
                /**
                 * 服务的输入参数，MAP格式的字符串，结构为`key:value`。
                 * @example `{\"LightAdjustLevel\":123}`
                 */
                InputData: string;
                /**
                 * 服务名称。
                 * @example `设置温度`
                 */
                Name: string;
            }[];
        };
    };
}
