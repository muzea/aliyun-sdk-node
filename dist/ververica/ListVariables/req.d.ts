export interface ListVariablesRequest {
    /**
     * 工作空间ID。
     * @example `a14bda1c4a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 分页参数，表示所请求页码元素数量，最大值为100，最小值为1，默认值为10。
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 分页参数，页码索引，表示所请求页码，最小值为1，默认值为1。
     * @example `1`
     */
    "pageIndex"?: number;
}
