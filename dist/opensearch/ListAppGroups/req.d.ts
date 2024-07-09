export interface ListAppGroupsRequest {
    /**
     * 页码，默认 pageNumber=1
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目，默认 pageSize=10
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 实例ID（精确匹配）
     * @example `ops-cn-xxxx`
     */
    "instanceId"?: string;
    /**
     * 应用名称
     * @example `my_name`
     */
    "name"?: string;
    /**
     * 应用类型
     * - standard 标准版
     * - enhanced 新高级版
     * @example `standard`
     */
    "type"?: string;
    /**
     * 排列顺序
     * - 0：按创建时间降序排列
     * - 1：按修改时间降序排列
     * 默认 sortBy=0
     * @example `0`
     */
    "sortBy"?: number;
    /**
     * 资源id
     * @example `"110123123"`
     */
    "resourceGroupId"?: string;
    /**
     * 标签列表
     */
    "tags"?: {
        /**
         * 标签键
         * @example `foo`
         */
        key: string;
        /**
         * 标签值
         * @example `bar`
         */
        value: string;
    }[];
}
