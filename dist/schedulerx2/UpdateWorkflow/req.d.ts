export interface UpdateWorkflowRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间ID，在控制台的命名空间页面中获取
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用分组ID，在控制台的应用管理页面中获取
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 工作流ID
     * @example `123`
     */
    "WorkflowId": string;
    /**
     * 工作流名称
     * @example `helloworld`
     */
    "Name"?: string;
    /**
     * 工作流描述
     * @example `Test`
     */
    "Description"?: string;
    /**
     * 时间类型，目前支持以下几种时间类型：
     * - cron：1
     * - api：100
     * @example `1`
     */
    "TimeType"?: number;
    /**
     * 时间表达式，根据选择的时间类型设置时间表达式。
     * - cron：填写标准的cron表达式，支持在线验证。
     * - api：无时间表达式。
     * @example `0 0/10 * * * ?`
     */
    "TimeExpression"?: string;
}
