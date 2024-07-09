export interface ListOpsItemsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 用来翻页的Token字符串。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB`
     */
    "NextToken"?: string;
    /**
     * 组件过滤规则。
     */
    "Filter"?: {
        /**
         * 过滤器值列表。
         */
        Value: string[];
        /**
         * 组件属性查询值比较符。
         * @example `Equal`
         */
        Operator: string;
        /**
         * 过滤参数名称
         * @example `Status`
         */
        Name: string;
    }[];
    /**
     * 标签。
     * @example `{"k1": "v1", "k2": "v2"}`
     */
    "Tags"?: any;
    /**
     * 资源标签信息
     * @example `{
          "k1": "v1",
          "k2": "v2"
    }`
     */
    "ResourceTags"?: any;
}
