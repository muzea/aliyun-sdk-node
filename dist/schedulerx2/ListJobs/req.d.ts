export interface ListJobsRequest {
    /**
     * 应用ID，在控制台的**应用管理**页面中获取。
     * @example `DocTest.Group`
     */
    "GroupId": string;
    /**
     * 命名空间，在控制台的**命名空间**页面中获取。
     * @example `1a72ecb1-b4cc-400a-a71b-20cdec9b****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务名称。
     * @example `helloword`
     */
    "JobName"?: string;
    /**
     * 任务状态。
     * - **0**：表示禁用
     * - **1**：表示启用
     * @example `1`
     */
    "Status"?: string;
}
