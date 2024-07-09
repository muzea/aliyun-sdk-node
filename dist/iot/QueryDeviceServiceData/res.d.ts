export interface QueryDeviceServiceDataResponse {
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
         * 是否有下一页服务调用记录。
         * - **true**：有。
         * - **false**：没有。
         * 返回**NextValid**为**true**时，可以将**NextTime**的值作为下次查询的**StartTime**，继续查询本次查询不显示的数据。
         * @example `true`
         */
        NextValid: boolean;
        /**
         * 下一页面中的服务调用记录的起始时间。
         * 调用本接口查询下一页服务调用记录时，该值可作为请求**StartTime**的值。
         * @example `1579335899000`
         */
        NextTime: number;
        List: {
            /**
             * 服务调用记录集合。每个元素代表一个服务执调用录。
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
