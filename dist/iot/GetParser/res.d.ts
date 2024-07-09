export interface GetParserResponse {
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
     * 返回的解析器详细信息。
     */
    Data: {
        /**
         * 解析器运行状态。可取值：
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
         * @example `2022-04-27T12:45:43.000Z`
         */
        UtcModified: string;
        /**
         * 解析器关联的数据源ID。
         * @example `1003`
         */
        DataSourceId: number;
        /**
         * 解析器脚本的草稿。
         * @example `var data = payload("json"); var h = data.items.Humidity.value; var t = data.items.Temperature.value; writeTsdb(1000,timestamp(),"temperature", t , {"deviceName":deviceName()}); writeTsdb(1000,timestamp(),"humidity", h , {"deviceName":deviceName()});`
         */
        ScriptDraft: string;
        /**
         * 创建解析器的UTC时间。格式为`yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`。
         * @example `2022-03-27T12:45:43.000Z`
         */
        UtcCreated: string;
        /**
         * 解析器名称。
         * @example `DataParser`
         */
        Name: string;
        /**
         * 解析器已发布脚本。
         * @example `var data = payload("json"); var h = data.items.Humidity.value; var t = data.items.Temperature.value; writeTsdb(1000,timestamp(),"temperature", t , {"deviceName":deviceName()}); writeTsdb(1000,timestamp(),"humidity", h , {"deviceName":deviceName()});`
         */
        Script: string;
        /**
         * 解析器ID。
         * @example `1001`
         */
        ParserId: number;
    };
}
