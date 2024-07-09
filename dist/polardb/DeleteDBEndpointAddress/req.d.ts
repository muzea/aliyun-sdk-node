export interface DeleteDBEndpointAddressRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息，包括集群ID。
     * @example `pc-************`
     */
    "DBClusterId": string;
    /**
     * 连接地址ID。
     * > 您可以通过接口[DescribeDBClusterEndpoints](~~98205~~)查询DBEndpointId。
     * @example `pe-***************`
     */
    "DBEndpointId": string;
    /**
     * <props="intl">连接地址的网络类型，仅支持**Public**（公网）类型。</props>
     * <props="china">连接地址的网络类型，取值范围如下：</props>
     * <props="china">- **Public**：公网。</props>
     * <props="china">- **Inner**：经典网络。</props>
     * @example `Public`
     */
    "NetType": string;
}
