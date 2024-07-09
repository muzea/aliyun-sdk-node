export interface ListTagResourcesRequest {
    /**
     * 资源ID，最多包含50个子项。
     * @example `disk-123`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多包含20个子项
     */
    "Tag"?: {
        /**
         * 精确查找EBS资源时使用的标签键。标签键长度的取值范围为1~128。N的取值范围为1~20。
         * `Tag.N`参数使用说明：用于精确查找绑定了指定标签的EBS资源，由一个键值对组成。
         * - 仅指定`Tag.N.Key`时，则返回关联该标签键的所有资源。
         * - 仅指定`Tag.N.Value`，则报错`InvalidParameter.TagValue`。
         * - 同时指定多个标签键值对时，仅同时满足所有标签键值对的EBS资源会被查找到。
         *
         * @example `tag-key`
         */
        Key: string;
        /**
         * 精确查找EBS资源时使用的标签值。标签值长度的取值范围为1~128。N的取值范围为1~20。
         * @example `tag-value`
         */
        Value: string;
    }[];
    /**
     * 下一个查询开始Token。
     * @example `token123`
     */
    "NextToken"?: string;
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
     * @example `diskreplicagroup`
     */
    "ResourceType": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
}
