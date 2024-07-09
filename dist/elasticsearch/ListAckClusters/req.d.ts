export interface ListAckClustersRequest {
    /**
     * 分页数。（已废弃）
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页记录数。（已废弃）
     * @example `15`
     */
    "size"?: number;
    /**
     * ACK集群所在的专有网络ID。
     * @example `vpc-bp12nu14urf0upaf4****`
     */
    "vpcId"?: string;
}
