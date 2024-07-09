export interface DeleteJobRequest {
    /**
     * 任务ID，在控制台的**任务管理**页面中获取。
     * @example `92583`
     */
    "JobId": number;
    /**
     * 命名空间ID，在控制台的**命名空间**页面中获取。
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
    "GroupId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
