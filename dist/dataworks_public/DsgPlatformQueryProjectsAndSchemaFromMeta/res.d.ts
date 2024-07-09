export interface DsgPlatformQueryProjectsAndSchemaFromMetaResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1029030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `param error`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 引擎名称。
         * @example `emr_test_project`
         */
        Project: string;
        /**
         * EMR集群ID。仅当请求参数EngineName（引擎类型）取值为EMR时，返回数据才会生成该参数。
         * @example `c-12345`
         */
        ClusterId: string;
    }[];
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
