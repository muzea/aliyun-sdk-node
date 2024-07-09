export interface DescribeDnsGtmInstancesRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en，zh，ja。
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
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 查询关键字，支持实例ID、实例名称模糊搜索。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 资源组ID。
     * @example `rg-testgroupid`
     */
    "ResourceGroupId"?: string;
}
