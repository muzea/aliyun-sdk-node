export interface QueryClusterSpecificationResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `EE5C32A1-BC0E-4B79-817C-103E4EDF****`
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
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 可使用的引擎规格。
         * @example `MSE_SC_1_2_200_c`
         */
        ClusterSpecificationName: string;
        /**
         * 此规格下的内存大小，单位：G。
         * @example `2`
         */
        MemoryCapacity: string;
        /**
         * 此规格下的CPU核数。
         * @example `1`
         */
        CpuCapacity: string;
    }[];
}
