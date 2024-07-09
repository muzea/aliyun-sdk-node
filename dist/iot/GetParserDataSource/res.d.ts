export interface GetParserDataSourceResponse {
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
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
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
     * 返回的数据源详细信息。
     */
    DataSource: {
        /**
         * 创建数据源的UTC时间。格式为`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`。
         * @example `2022-03-27T12:45:43.000Z`
         */
        UtcCreated: string;
        /**
         * 数据源描述信息。
         * @example `设备数据。`
         */
        Description: string;
        /**
         * 数据源名称。
         * @example `DataSource`
         */
        Name: string;
        /**
         * 创建数据源的用户ID。
         * @example `11111111000000111`
         */
        CreateUserId: number;
        /**
         * 数据源ID。
         * @example `1001`
         */
        DataSourceId: number;
    };
}
