export interface ListResourcesByTagRequest {
    /**
     * 地域ID。
     * 关于地域ID的详情，请参见[服务接入点](~~2330902~~)。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页时每页显示的数据条数。
     * 默认值：50。最大值：1000。
     * @example `50`
     */
    "MaxResult"?: number;
    /**
     * 资源类型，用于查询的过滤条件。取值：
     * * FuzzyType=EQUAL时，支持的资源类型请调用[ListSupportResourceTypes](~~2330915~~)获取。
     * * FuzzyType=NOT时，支持的资源类型请参见下文**支持逻辑非查询的资源类型**。
     * @example `ALIYUN::VPC::VPC`
     */
    "ResourceType": string;
    /**
     * 查询操作。取值：
     * - EQUAL（默认值）：精确查询绑定了指定标签的资源。
     * - NOT：精确查询未绑定指定标签的资源。
     * @example `EQUAL`
     */
    "FuzzyType"?: string;
    /**
     * 标签值，用于查询的过滤条件。
     * 最多支持128个字符，不能包含`http://`或者`https://`。
     * @example `v1`
     */
    "TagFilter.Value"?: string;
    /**
     * 标签键，用于查询的过滤条件。
     * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     * @example `k1`
     */
    "TagFilter.Key": string;
    /**
     * 是否返回资源上的标签信息。取值：
     * - False（默认值）：不返回资源上的标签信息。
     * - True ：返回资源上所有标签信息。
     * @example `False`
     */
    "IncludeAllTags"?: boolean;
}
