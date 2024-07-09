export interface ListTagResourcesRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~86912~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。取值范围：
     * - `instance`：预留模式实例。
     * - `ALIYUN::GPDB::INSTANCE`：弹性模式实例。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 实例ID。
     * > 参数ResourceId与Tag需要至少填写一项。
     * @example `gp-xxxxxxxxxx`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     * > 参数ResourceId与Tag需要至少填写一项。
     */
    "Tag"?: {
        /**
         * 标签键。标签键长度的取值范围：1~64。
         * `Tag.N`用于精确查找绑定了指定标签的AnalyticDB PostgreSQL实例，由一个键值对组成。
         * N的取值范围：1~20
         * - 仅指定`Tag.N.Key`时，则返回关联该标签键的所有实例。
         * - 仅指定`Tag.N.Value`，则报错`InvalidParameter.TagValue`。
         * - 同时指定多个标签键值对时，仅同时满足所有标签键值对的AnalyticDB PostgreSQL实例会被查找到。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。标签值长度的取值范围：1~128。
         * N的取值范围：1~20
         * @example `TestValue`
         */
        Value: string;
    }[];
}
