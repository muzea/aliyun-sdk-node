export interface GetDataAPIServiceDetailResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~135176~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `请求参数错误`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `57b144cf-09fc-4916-a272-a62902d5b207`
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
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * API名称。
         * @example `根据状态获取设备数`
         */
        DisplayName: string;
        /**
         * API的状态。
         * - 0：可编辑。
         * - 1：已测试。
         * - 2：已发布。
         * @example `1`
         */
        Status: number;
        /**
         * API资源标识符，API的全局唯一标识。
         * 示例：`acs:iot:*:127103983461****:serveapi/device/getDeviceCountByStatus2`
         * 以上示例中的信息说明如下：
         * - `127103983461****`是阿里云主账号ID。
         * - `/device/getDeviceCountByStatus`是API调用地址的自定义部分。
         * @example `acs:iot:*:127103983461****:serveapi/device/getDeviceCountByStatus2`
         */
        ApiSrn: string;
        /**
         * API的描述信息。
         * @example `描述`
         */
        Description: string;
        /**
         * API的创建时间，单位为毫秒（ms）。
         * @example `1557839468865`
         */
        CreateTime: number;
        /**
         * API的最后更新时间，单位为毫秒（ms）。
         * @example `1557839468865`
         */
        LastUpdateTime: number;
        /**
         * 请求方式。
         * @example `GET/POST`
         */
        RequestMethod: string;
        /**
         * 返回类型行。
         * @example `JSON`
         */
        DateFormat: string;
        /**
         * 协议类型。
         * @example `HTTPS`
         */
        RequestProtocol: string;
        /**
         * API调用地址的自定义部分。
         * @example `/device/getDeviceCountByStatus`
         */
        ApiPath: string;
        /**
         * SQL模板信息。
         * 调用成功时，返回的SQL模板数据。详情参见下表SqlTemplateDTO。
         */
        SqlTemplateDTO: {
            /**
             * API对应的原始SQL。
             * @example `SELECT COUNT(*) FROM ${system.device} WHERE status = 1`
             */
            OriginSql: string;
            /**
             * 原始SQL的模板化SQL。
             * @example `SELECT COUNT(*) as deviceCount FROM ${system.device} WHERE status = ${status}`
             */
            TemplateSql: string;
            RequestParams: {
                /**
                 * 调用API的请求参数列表。
                 */
                RequestParams: {
                    /**
                     * 参数类型，请参见[JDBCType](https://docs.oracle.com/javase/8/docs/api/java/sql/JDBCType.html)。目前仅支持：ARRAY、VARCHAR、INTEGER、BIGINT、BOOLEAN、DECIMAL、TIMESTAMP。
                     * @example `INTEGER`
                     */
                    Type: string;
                    /**
                     * 该参数是否必填。
                     * - true：必填。
                     * - false：非必填。
                     * 默认值为true。
                     * @example `true`
                     */
                    Required: boolean;
                    /**
                     * 参数值示例。
                     * @example `0`
                     */
                    Example: string;
                    /**
                     * 请求参数名称。
                     * @example `status`
                     */
                    Name: string;
                    /**
                     * 参数描述。
                     * @example `设备状态`
                     */
                    Desc: string;
                }[];
            };
            ResponseParams: {
                /**
                 * API的响应参数列表。
                 */
                ResponseParams: {
                    /**
                     * 参数类型，请参见[JDBCType](https://docs.oracle.com/javase/8/docs/api/java/sql/JDBCType.html)。目前仅支持：ARRAY、VARCHAR、INTEGER、BIGINT、BOOLEAN、DECIMAL、TIMESTAMP。
                     * @example `INTEGER`
                     */
                    Type: string;
                    /**
                     * 该参数是否必填。
                     * - true：必填。
                     * - false：非必填。
                     * 返回参数中，无需配置该参数。
                     * @example `true`
                     */
                    Required: boolean;
                    /**
                     * 参数值示例。
                     * @example `100`
                     */
                    Example: string;
                    /**
                     * 返回参数名称。
                     * @example `deviceCount`
                     */
                    Name: string;
                    /**
                     * 参数描述。
                     * @example `设备数`
                     */
                    Desc: string;
                }[];
            };
        };
    };
}
