export interface ListAckNamespacesRequest {
    /**
     * 分页数。（已废弃）
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页包含的记录数。（已废弃）
     * @example `10`
     */
    "size"?: number;
    /**
     * 目标集群id。
     * @example `c79acd3fbf462423fb6450e513bb6****`
     */
    "ClusterId": string;
}
