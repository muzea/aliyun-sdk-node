export interface BatchDisableJobsRequest {
    /**
     * 任务所属命名空间ID，在控制台**命名空间**页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用ID，在控制台的**应用管理**页面中获取。
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId"?: string;
    /**
     * 任务所属地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 任务ID列表，多个任务ID以半角逗号（,）分隔。
     * @example `99341`
     */
    "JobIdList": number[];
}
