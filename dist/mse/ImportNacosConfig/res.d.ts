export interface ImportNacosConfigResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `AF21683A-29C7-4853-AC0F-B5ADEE4****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `mse-100-100`
     */
    ErrorCode: string;
    /**
     * 代码。
     * @example `1`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的 **%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 导入成功的实例数。
         * @example `100`
         */
        SuccCount: number;
        /**
         * 跳过消息数。
         * @example `10`
         */
        SkipCount: number;
        /**
         * 跳过的配置列表。
         */
        SkipData: {
            /**
             * 数据ID。
             * @example `test.yaml`
             */
            DataId: string;
            /**
             * 分组ID。
             * @example `public `
             */
            Group: string;
        }[];
        /**
         * 导入失败列表。
         */
        FailData: {
            /**
             * 数据ID。
             * @example `test2.yaml`
             */
            DataId: string;
            /**
             * 分组ID。
             * @example `test`
             */
            Group: string;
            Reason: string;
        }[];
    };
}
