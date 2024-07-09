export interface TagResourcesRequest {
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * DDoS原生防护实例所在地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要绑定标签的资源的类型，取值固定为**INSTANCE**，表示实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 要绑定标签的DDoS原生防护实例的ID列表。最多支持51个ID。
     * @example `ddosbgp-cn-v0h1fmwb****`
     */
    "ResourceId": string[];
    /**
     * 要绑定的标签（键值对）列表。最多支持21个标签对。
     */
    "Tag"?: {
        /**
         * 要绑定的标签键。
         * > 如果您设置的标签键不存在，则表示新建该标签键。
         * @example `test-key`
         */
        Key: string;
        /**
         * 要绑定的标签值。
         * > 如果您设置的标签值不存在，则表示新建该标签值。
         * @example `test-value`
         */
        Value: string;
    }[];
}
