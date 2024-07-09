export interface GetJobInfoRequest {
    /**
     * 任务ID，在控制台的任务管理页面中获取。
     * @example `92583`
     */
    "JobId": number;
    /**
     * 应用ID，在控制台的应用管理页面中获取。
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 命名空间ID，在控制台的命名空间页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
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
     * @example `simpleJob`
     */
    "JobName"?: string;
}
