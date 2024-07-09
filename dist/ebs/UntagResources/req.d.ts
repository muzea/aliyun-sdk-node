export interface UntagResourcesRequest {
    /**
     * 资源ID，最多包含50个子项。
     * @example `disk-123`
     */
    "ResourceId": string[];
    /**
     * 标签键。最多包含20个子项。
     * @example `disk-123`
     */
    "TagKey"?: string[];
    /**
     * 是否解绑资源上全部的标签。当请求中未设置TagKey.N时，该参数才有效。取值范围：
     * - true。
     * - false。
     * 默认值：false。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。取值范围：
     * - dedicatedblockstoragecluster：专属块存储集群。
     * - diskreplicapair：异步复制关系。
     * - diskreplicagroup：一致性复制组。
     * @example `diskreplicapair`
     */
    "ResourceType": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
}
