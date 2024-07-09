export interface ListTagResourcesRequest {
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
     * 要查询的资源的类型。取值固定为**INSTANCE**，表示实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 查询凭证（Token）。取值为上一次调用本接口返回的**NextToken**参数值，初次调用接口时无需设置该参数。
     * @example `RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****`
     */
    "NextToken"?: string;
    /**
     * 要查询的原生防护实例的ID列表。
     * > **ResourceId**和**Tag Key-Value对**不能同时为空。
     * @example `ddosbgp-cn-v0h1fmwbc024`
     */
    "ResourceId"?: string[];
    /**
     * 要查询的标签键值对。
     */
    "Tag"?: {
        /**
         * 要查询的标签键。
         * > **ResourceId**和**Tag Key-Value对**不能同时为空。
         * @example `testKey1`
         */
        Key: string;
        /**
         * 要查询的标签值。
         * > **ResourceId**和**Tag Key-Value对**不能同时为空。
         * @example `testValue1`
         */
        Value: string;
    }[];
}
