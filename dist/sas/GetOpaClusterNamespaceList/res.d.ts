export interface GetOpaClusterNamespaceListResponse {
    /**
     * 命名空间列表。
     */
    Data: {
        /**
         * 命名空间名称。
         * @example `testNameSpace`
         */
        NameSpaceName: string;
    }[];
    /**
     * 分页查询时，当前页显示的数据条数。
     * @example `0`
     */
    Count: number;
    /**
     * 接口调用的结果状态。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求返回的信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `384BFAF1-FC41-58DD-97DD-9D361ADF377D`
     */
    RequestId: string;
}
