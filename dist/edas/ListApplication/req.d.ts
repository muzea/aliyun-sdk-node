export interface ListApplicationRequest {
    /**
     * 以集群维度筛选应用列表。
     * @example `c37aec2a-bcca-4ec1-****-************`
     */
    "ClusterId"?: string;
    /**
     * 以微服务空间维度匹配筛选应用列表。
     * @example `cn-beijing:test`
     */
    "LogicalRegionId"?: string;
    /**
     * 以appName维度筛选应用列表。
     * @example `testapp`
     */
    "AppName"?: string;
    /**
     * 以资源组维度筛选应用列表。
     * @example `rg-aek24j4s4b*****`
     */
    "ResourceGroupId"?: string;
    /**
     * 按精确匹配微服务空间的方式筛选应用。
     * @example `cn-beijing:test`
     */
    "LogicalRegionIdFilter"?: string;
    /**
     * 应用ID列表。
     * @example `[
          "5657d271-****-4f03-9bb2-431f942886bb",
          "5657d271-****-4f03-9bb2-431f942bbddd"
    ]`
     */
    "AppIds"?: string;
    /**
     * 分页查询，当前第几页，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询，每页显示的条数。
     * @example `20`
     */
    "PageSize"?: number;
}
