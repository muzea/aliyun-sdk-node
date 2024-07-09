export interface ListContainerDefenseRuleClustersResponse {
    /**
     * 集群列表
     */
    ClusterList: {
        /**
         * 集群的ID。
         * @example `cfeb7a9f99ce740e98c5595d0fe37****`
         */
        ClusterId: string;
        /**
         * 规则ID。
         * > 您可以调用[ListInterceptionRulePage](~~2590599~~)接口获取该参数。
         * @example `403178`
         */
        RuleId: number;
        /**
         * 是否包含所有命名空间，取值：
         * - **0**：否。
         * - **1**：是。
         * @example `1`
         */
        AllNamespace: number;
        /**
         * 命名空间列表
         */
        Namespaces: string[];
    }[];
    /**
     * 返回条数
     * @example `1`
     */
    Count: number;
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 返回结果的提示信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1F995515-CAF3-5F84-8D82-C9F706AD5070`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
