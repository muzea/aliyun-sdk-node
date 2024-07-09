export interface ListTagResourcesRequest {
    /**
     * 资源关系列表的分页数，废弃字段。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页查询时设置的每页条数，废弃字段。
     * @example `10`
     */
    "Size"?: number;
    /**
     * 资源类型定义。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始的Token。
     * @example `1d2db86sca4384811e0b5e8707e******`
     */
    "NextToken"?: string;
    /**
     * 要查询的实例ID列表。采用JSON数组格式，最多支持20个子项。
     * @example `["es-cn-aaa","es-cn-bbb"]`
     */
    "ResourceIds"?: string;
    /**
     * 要查询的Tags列表，采用JSON字符串的形式，最多包含20个子项。
     * @example `[{"key":"env","value","dev"},{"key":"dev",  "value":"IT"}]`
     */
    "Tags"?: string;
}
