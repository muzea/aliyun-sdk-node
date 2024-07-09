export interface GetKubernetesSourceResponse {
    /**
     * 请求ID。
     * @example `1085A66C-DEF1-58EE-A0A4-31E00C9FC0D5`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * ACK集群名称。
         * @example `k8s-demo`
         */
        Name: string;
        /**
         * ACK集群ID。
         * @example `cbc1efca895a64af097ff00b26f3f****`
         */
        Cluster: string;
    }[];
}
