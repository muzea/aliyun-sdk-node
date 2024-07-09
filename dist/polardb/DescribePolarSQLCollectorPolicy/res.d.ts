export interface DescribePolarSQLCollectorPolicyResponse {
    /**
     * 请求ID。
     * @example `3655211B-4D74-4E13-91E6-FF2AFE******`
     */
    RequestId: string;
    /**
     * SQL洞察功能是否开启，取值范围如下：
     * * **Enable**：已开启
     * * **Disabled**：未开启
     * @example `Enable`
     */
    SQLCollectorStatus: string;
    /**
     * 集群ID。
     * @example `pc-bp1s826a1up******`
     */
    DBClusterId: string;
}
