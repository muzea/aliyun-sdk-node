export interface ListTagResourcesRequest {
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~2679950~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，目前仅支持伸缩组。取值：scalinggroup。
     * @example `scalinggroup`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 资源ID。
     */
    "ResourceIds"?: string[];
    /**
     * 标签信息的集合。
     */
    "Tags"?: {
        /**
         * 精确查找弹性伸缩资源时使用的标签键。标签键长度的取值范围：1~128。
         * `Tags`用于精确查找绑定了指定标签的弹性伸缩资源，由一个键值对组成。
         * - 仅指定`Tags.Key`时，则返回关联该标签键的所有资源。
         * - 仅指定`Tags.Value`时，则出现`MissingParameter.TagKey`的报错提示。
         * - 同时指定多个标签键值对时，仅同时满足所有标签键值对的弹性伸缩资源会被查找到。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 精确查找弹性伸缩资源时使用的标签值。标签值可以为空字符串，最多支持128个字符。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
