export interface DescribeResolverRulesRequest {
    /**
     * 关键字，照”%Keyword%”模式搜索规则名称
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 当前页码, 默认值1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小，默认值20；最大支持100
     * @example `20`
     */
    "PageSize"?: number;
    /**
     *
     * 是否需要额外信息，默认为false；
     * - true-需要额外信息，含转发规则关联的VPC列表等
     * - false-不需要额外信息
     * @example `true`
     */
    "NeedDetailAttributes"?: boolean;
    /**
     * 出站终端节点ID
     * @example `hra2**`
     */
    "EndpointId"?: string;
}
