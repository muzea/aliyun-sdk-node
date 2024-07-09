export interface DescribeTemplatesRequest {
    /**
     * 模板ID
     * @example `323434****83423432`
     */
    "Id"?: string;
    /**
     * 按模板类型查询。
     * @example `record`
     */
    "Type"?: string;
    /**
     * 按绑定的实例ID查询。
     * @example `323*****998-cn-qingdao`
     */
    "InstanceId"?: string;
    /**
     * 按给定字段排序，默认按ID排序。
     * @example `id`
     */
    "SortBy"?: string;
    /**
     * 排序方式，默认升序。取值：
     * - asc（升序）
     * - desc（降序）
     * @example `asc`
     */
    "SortDirection"?: string;
    /**
     * 分页大小，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 第几个分页，默认为1。
     * @example `1`
     */
    "PageNum"?: number;
}
