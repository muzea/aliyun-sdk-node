export interface ListClusterVersionsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `7717BE5B-C958-5F87-BF49-464AA276EDD1`
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
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 与本次请求相关的动态错误信息。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 集群类型编码。
         * @example `NACOS_2_0_0`
         */
        Code: string;
        /**
         * 集群版本。
         * @example `2.1.0`
         */
        ShowName: string;
        /**
         * 集群类型。
         * @example `Nacos-Ans`
         */
        ClusterType: string;
    }[];
}
