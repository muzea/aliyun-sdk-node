export interface ListDeploymentsRequest {
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
     * 分页参数，表示所请求页码元素数量，最大值为100，最小值为1，默认值为10。
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 分页参数，页码索引，表示所请求页码，最小值为1，默认值为1。
     * @example `1`
     */
    "pageIndex"?: number;
    /**
     * deployment名称。
     * @example `vvp_ds_0522`
     */
    "name"?: string;
    /**
     * deployment执行模式。
     * @example `STREAMING`
     */
    "executionMode"?: string;
    /**
     * deployment最新作业状态。
     * @example `RUNNING`
     */
    "status"?: string;
    /**
     * 创建者UID。
     * @example `183899668*******`
     */
    "creator"?: string;
    /**
     * 修改者UID。
     * @example `183899668*******`
     */
    "modifier"?: string;
    /**
     * 标签名。
     * @example `key`
     */
    "labelKey"?: string;
    /**
     * 标签值，多个值使用分号隔开。
     * @example `value1,value2`
     */
    "labelValueArray"?: string;
}
