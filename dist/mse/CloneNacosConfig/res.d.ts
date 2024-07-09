export interface CloneNacosConfigResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `6678DBA9-5600-5948-ACF8-ED3105B288A3`
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
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 响应信息。
     * @example `Clone Completed Successfully`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 成功数。
         * @example `100`
         */
        SuccCount: number;
        /**
         * 跳过数。
         * @example `1`
         */
        SkipCount: number;
        /**
         * 跳过配置信息。
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
         * 配置失败信息。
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
        }[];
    };
}
