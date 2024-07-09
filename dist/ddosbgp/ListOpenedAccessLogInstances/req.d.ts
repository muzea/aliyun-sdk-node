export interface ListOpenedAccessLogInstancesRequest {
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。默认为空，即属于默认资源组。
     * 关于资源组的更多信息，请参见[创建资源组](~~94485~~)。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 分页查询时，返回第几页数据。默认值为**1**，表示返回第1页数据。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，每页包含结果的数量。默认值为**10**，表示每页包含10个结果。
     * @example `10`
     */
    "PageSize"?: number;
}
