export interface DescribeGtmInstancesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 查询关键字，支持实例Id，实例名称精确搜索。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 资源组ID。
     * @example `rg-xxxxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否需要额外信息，默认为**false**。
     * @example `false`
     */
    "NeedDetailAttributes"?: boolean;
}
