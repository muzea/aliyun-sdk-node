export interface DeleteDBClusterEndpointRequest {
    /**
     * 集群ID。
     * @example `pc-******************`
     */
    "DBClusterId": string;
    /**
     * 自定义集群地址ID。
     * @example `pe-******************`
     */
    "DBEndpointId": string;
}
