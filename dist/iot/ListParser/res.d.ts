export interface ListParserResponse {
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
     * 返回结果记录总数。
     * @example `100`
     */
    Total: number;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 返回的解析器列表数据。
         */
        ParserList: {
            /**
             * 解析器状态。可取值有：
             * - **RUNNING**：运行中。
             * - **STOP**：已停止。
             * - **ABNORMAL**：存在异常。
             * @example `STOP`
             */
            Status: string;
            /**
             * 解析器描述。
             * @example `转发数据。`
             */
            Description: string;
            /**
             * 更新解析器的UTC时间。格式为`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`。
             * @example `2022-03-25T12:45:43.000Z`
             */
            UtcModified: string;
            /**
             * 解析器名称。
             * @example `DataParser`
             */
            Name: string;
            /**
             * 创建解析器的UTC时间。格式为`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`。
             * @example `2022-03-21T12:45:43.000Z`
             */
            UtcCreated: string;
            /**
             * 解析器ID。
             * @example `1001`
             */
            ParserId: number;
        }[];
    };
}
