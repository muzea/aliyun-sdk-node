export interface DescribeDirectoriesRequest {
    /**
     * 目录所属空间ID。
     * @example `348*****174-cn-qingdao`
     */
    "GroupId": string;
    /**
     * 按上级目录ID查询。
     * @example `399*****774-cn-qingdao`
     */
    "ParentId"?: string;
    /**
     * 按给定字段排序，默认按ID排序。
     * @example `ID`
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
     * 分页大小，默认为20
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 第几个分页，默认为1
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 是否禁用分页，默认false
     * @example `false`
     */
    "NoPagination"?: boolean;
}
