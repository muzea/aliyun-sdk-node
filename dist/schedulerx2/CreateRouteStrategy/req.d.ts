export interface CreateRouteStrategyRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 路由策略名称
     * @example `test-strategy`
     */
    "Name": string;
    /**
     * 应用分组ID，在控制台的**应用管理**页面中获取
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 任务ID，在控制台的**任务管理**页面中获取。
     * @example `54978`
     */
    "JobId"?: number;
    /**
     * 路由策略类型。取值如下：
     * - **3**：按照比例进行路由。
     * @example `3`
     */
    "Type"?: number;
    /**
     * 路由策略状态，取值如下
     * - **0**：表示禁用
     * - **1**：表示启用
     * @example `1`
     */
    "Status"?: number;
    /**
     * 路由策略详情JSON字段。关于此字段的详细说明参见下文**关于请求参数的补充说明**。
     * @example `[{"percentage":20,"target":"[\"version1\"]","targetType":"label"}]`
     */
    "StrategyContent"?: string;
    /**
     * 命名空间ID，在控制台的**命名空间**页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
}
