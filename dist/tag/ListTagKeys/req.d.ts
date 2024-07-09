export interface ListTagKeysRequest {
    /**
     * 地域ID。
     * 关于地域ID的详情，请参见[服务接入点](~~2330902~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页时每页显示的标签键个数。
     * 最大值：1000。默认值：50。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 资源标签类型，用于查询的过滤条件。取值：
     * - all（默认值）：全部标签。
     * - custom：自定义标签。
     * - system：系统标签。
     * > 取值不区分大小写。
     * @example `all`
     */
    "Category"?: string;
    /**
     * 资源类型，用于查询的过滤条件。
     * 格式：`ALIYUN::${ProductCode}::${ResourceType}`，全部大写。
     * - `ProductCode`：云服务code。从[ListSupportResourceTypes](~~2330915~~)返回参数中获取。
     * - `ResourceType`：资源类型。从[ListSupportResourceTypes](~~2330915~~)返回参数中获取。
     * @example `ALIYUN::ECS::INSTANCE`
     */
    "ResourceType"?: string;
    /**
     * 标签类型，用于查询的过滤条件。取值：
     * - ResourceTag（默认值）：资源标签。包括自定义标签和系统标签。
     * - MetaTag：预置标签。
     * > 取值不区分大小写。
     * @example `ResourceTag`
     */
    "QueryType"?: string;
    /**
     * 模糊查询类型。取值：
     * - EQUAL（默认值）：精确查询。
     * - PREFIX：根据前缀进行模糊查询。
     * > 该参数仅支持华南1（深圳）和中国（香港）地域。
     * @example `EQUAL`
     */
    "FuzzyType"?: string;
    /**
     * 模糊查询的标签键。
     * 该参数与`FuzzyType`配合使用。
     * > 该参数仅支持华南1（深圳）和中国（香港）地域。
     * @example `team`
     */
    "TagFilter.Key"?: string;
}
