export interface InvokeDataAPIServiceResponse {
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
     * @example `E68FE5DC-4D7B-4987-B785-DF8C6F191F5D`
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
     * 调用成功时，返回注册的设备信息。
     */
    Data: {
        /**
         * 显示的查询结果的页码。分页码从0开始，默认为0。
         * 如果您要自定义显示结果页，建议您在请求参数中增加自定义参数，如**pageNo**。
         * @example `0`
         */
        PageNo: number;
        /**
         * 每页显示的查询结果记录数。
         * 如果您要自定义每页显示的记录数，建议您在请求参数中增加自定义参数，如**pageSize**。
         * @example `1`
         */
        PageSize: number;
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
         * 总数。
         * @example `2`
         */
        TotalSize: number;
        FieldNameList: {
            /**
             * 结果字段列表。
             */
            FieldNameList: string[];
        };
        ResultList: {
            /**
             * 结果列表。
             */
            ResultList: any[];
        };
    };
}
