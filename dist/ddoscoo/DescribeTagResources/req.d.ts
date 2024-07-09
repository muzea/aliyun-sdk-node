export interface DescribeTagResourcesRequest {
    /**
     * DDoS高防实例所属地域ID。取值固定为**cn-hangzhou**，表示中国内地，即DDoS高防（中国内地）实例。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源类型。取值固定为**INSTANCE**，表示DDoS高防实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 查询凭证（Token）。取值为上一次调用本接口返回的**NextToken**参数值。
     * > 初次调用本接口时无需设置该参数。
     * @example `RGuYpqDdKhzXb8C3.D1BwQgc1tMBsoxdGiEKHHUUCf****`
     */
    "NextToken"?: string;
    /**
     * 要查询的DDoS高防（中国内地）实例的ID列表。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "ResourceIds"?: string[];
    /**
     * 要查询的标签列表。每个标签由标签键（**Key**）和标签值（**Value**）组成。
     */
    "Tags"?: {
        /**
         * 要查询的标签键。
         * >- **ResourceIds.N**与**Tags.N.Key**不能同时为空。
         * - 您可以调用[DescribeTagKeys](~~159785~~)查询所有标签键。
         * @example `testkey`
         */
        Key: string;
        /**
         * 要查询的标签值。
         * @example `testvalue`
         */
        Value: string;
    }[];
}
