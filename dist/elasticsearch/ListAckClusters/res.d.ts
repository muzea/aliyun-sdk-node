export interface ListAckClustersResponse {
    /**
     * 请求id。
     * @example `F93EAA49-284F-4FCE-9E67-FA23FB4BB512`
     */
    RequestId: string;
    /**
     * 当前请求返回的ACK集群列表。
     */
    Result: {
        /**
         * 集群类型，仅支持ManagedKubernetes，即Kubernetes集群。
         * @example `ManagedKubernetes`
         */
        clusterType: string;
        /**
         * 集群所在的专有网络id。
         * @example `vpc-bp12nu14urf0upaf4****`
         */
        vpcId: string;
        /**
         * 集群名称。
         * @example `test`
         */
        name: string;
        /**
         * 集群id。
         * @example `c5ea2c2d9a3cf499481292f60425d****`
         */
        clusterId: string;
    }[];
}
