export interface GetCategoriesRequest {
    /**
     * 分类ID，传入此参数，则可查询指定ID的分类。仅支持传入单个分类ID。可通过以下方式获取：
     * - 登录[视频点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理**查看分类ID。
     * - 通过[AddCategory](~~AddCategory~~)接口创建分类时会返回。
     * @example `49339****`
     */
    "CateId"?: number;
    /**
     * 子分类列表页号。默认值为**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 子分类列表页大小。默认值为**10**，最大值为**100**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询结果排序。取值：
     * - **CreationTime:Desc**（默认值）：按创建时间倒序。
     * - **CreationTime:Asc**：按创建时间升序。
     * @example `CreationTime:Desc`
     */
    "SortBy"?: string;
    /**
     * 分类类型，传入此参数，则可筛选查询指定类型的分类。取值：
     * - **default**：音视频/图片分类。
     * - **material**：短视频素材分类。
     * @example `default`
     */
    "Type"?: string;
}
