export interface UpdateMetricDropResponse {
    /**
     * Id of the request
     * @example `CCCA4B88-BD7B-5A38-89AF-C09293BD4187`
     */
    RequestId: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Data: string;
    /**
     * 接口状态，取值说明如下：2XX：成功。3XX：重定向。4XX：请求错误。5XX：服务器错误。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 操作是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
