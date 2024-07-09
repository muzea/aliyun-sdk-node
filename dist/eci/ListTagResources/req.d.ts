export interface ListTagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID列表。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `testkey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `testvalue`
         */
        Value: string;
    }[];
    /**
     * 资源类型。取值范围：
     * - ContainerGroup：ECI实例
     * - ImageCache：镜像缓存
     * - DataCache：数据缓存
     * - VirtualNode：虚拟节点
     * @example `ContainerGroup`
     */
    "ResourceType": string;
    /**
     * 查询结果条数上限。
     * @example `20`
     */
    "Limit"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2****
    `
     */
    "NextToken"?: string;
}
