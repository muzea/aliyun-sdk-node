export interface DescribeStacksRequest {
    /**
     * 仅查询推荐的技术栈
     * @example `true`
     */
    "RecommendedOnly"?: boolean;
    /**
     * 技术栈类型名称
     * @example `Java`
     */
    "CategoryName"?: string;
    /**
     * 查询页面大小
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询页面数
     * @example `1`
     */
    "PageNumber"?: number;
    "RegionId"?: string;
}
