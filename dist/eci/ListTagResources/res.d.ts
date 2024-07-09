export interface ListTagResourcesResponse {
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1340C38D-6189-54D1-86F6-7D5ECF3E0088`
     */
    RequestId: string;
    /**
     * 资源列表。
     */
    TagResources: {
        /**
         * 资源类型。可能值：
         * - ContainerGroup：ECI实例
         * - ImageCache：镜像缓存
         * - DataCache：数据缓存
         * - VirtualNode：虚拟节点
         * @example `ContainerGroup`
         */
        ResourceType: string;
        /**
         * 资源绑定标签的标签值。
         * @example `testvalue`
         */
        TagValue: string;
        /**
         * 资源ID。
         * @example `eci-2zelg8vwnlzdhf8hv****
        `
         */
        ResourceId: string;
        /**
         * 资源绑定标签的标签键。
         * @example `testkey`
         */
        TagKey: string;
    }[];
}
