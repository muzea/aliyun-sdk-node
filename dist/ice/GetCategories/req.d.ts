export interface GetCategoriesRequest {
    /**
     * 分类ID。可通过以下方式获取：
     * - 登录[IMS控制台](https://ims.console.aliyun.com)，选择 **媒资管理** > **分类管理**查看分类ID。
     * - 通过创建分类接口创建分类时，分类ID为返回参数CateId的值。
     * - 通过获取分类接口查询分类时，为请求后返回参数CateId的值。
     * @example `33`
     */
    "CateId"?: number;
    /**
     * 分页的页码。默认值：1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，最小值为10，最大值为100
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 结果排序方式。取值范围：
     * \-CreationTime:Desc（默认值）：按创建时间倒序。
     * \-CreationTime:Asc：按创建时间升序。
     * @example `CreationTime:Desc`
     */
    "SortBy"?: string;
    /**
     * 分类类型。取值：default（默认值）：音视频/图片分类。                                 material：短视频素材分类。
     * @example `default`
     */
    "Type"?: string;
}
