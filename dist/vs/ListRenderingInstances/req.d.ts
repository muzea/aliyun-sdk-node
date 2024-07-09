export interface ListRenderingInstancesRequest {
    /**
     * 云应用服务实例规格
     * @example `crs.cp.l1`
     */
    "RenderingSpec"?: string;
    /**
     * 云应用服务实例ID
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId"?: string;
    /**
     * 分页查询时设置的页码。 起始值：1。默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。 取值范围：1~100。默认值：10
     * @example `10`
     */
    "PageSize"?: number;
}
