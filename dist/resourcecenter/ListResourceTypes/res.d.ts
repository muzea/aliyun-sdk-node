export interface ListResourceTypesResponse {
    /**
     * 资源类型列表。
     */
    ResourceTypes: {
        /**
         * 资源类型。
         * @example `ACS::ACK::Cluster`
         */
        ResourceType: string;
        /**
         * 云服务名称。
         * @example `容器服务Kubernetes版`
         */
        ProductName: string;
        /**
         * 资源类型名称。
         * @example `集群`
         */
        ResourceTypeName: string;
        /**
         * 支持的过滤条件。
         */
        FilterKeys: string[];
    }[];
    /**
     * 请求ID。
     * @example `E5556E4C-479A-5BBB-B325-F07563E7E917`
     */
    RequestId: string;
}
