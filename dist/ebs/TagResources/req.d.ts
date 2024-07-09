export interface TagResourcesRequest {
    /**
     * 资源ID列表。
     * @example `disk-123`
     */
    "ResourceId": string[];
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag": {
        /**
         * 资源的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `tag-value`
         */
        Value: string;
    }[];
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
