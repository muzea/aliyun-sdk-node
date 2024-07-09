export interface ListMembersRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 分页参数，页码索引，表示所请求页码，默认值为1。
     * @example `1`
     */
    "pageIndex"?: number;
    /**
     * 分页参数，所请求页码的元素数量，默认值为10，最大值100。
     * @example `10`
     */
    "pageSize"?: number;
}
