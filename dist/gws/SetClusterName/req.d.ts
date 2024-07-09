export interface SetClusterNameRequest {
    /**
     * 集群 id
     * @example `gws-xxx`
     */
    "ClusterId": string;
    /**
     * 要设置的集群名称。
     * @example `cluster-xxx`
     */
    "Name": string;
}
