export interface ListJobsRequest {
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
     * 分页参数，页码索引，表示所请求页码，最小值为1，默认值为1。
     * @example `1`
     */
    "pageIndex"?: number;
    /**
     * 分页参数，表示所请求页码元素数量，最大值为100，最小值为1，默认值为10。
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 已部署作业ID。
     * @example `58718c99-3b29-4c5e-93bb-c9fc4ec6****`
     */
    "deploymentId": string;
    /**
     * 排序规则。
     * @example `gmt_create`
     */
    "sortName"?: string;
}
