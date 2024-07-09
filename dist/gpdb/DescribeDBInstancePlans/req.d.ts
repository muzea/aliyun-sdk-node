export interface DescribeDBInstancePlansRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 计划描述。
     * @example `this is a test plan`
     */
    "PlanDesc"?: string;
    /**
     * 计划类型，取值如下：
     * - **PauseResume**：自动启停。
     * - **Resize**：节点扩容。
     * - **ModifySpec**：规格变更，即变更计算节点规格。
     * @example `PauseResume`
     */
    "PlanType"?: string;
    /**
     * 计划执行方式，取值如下：
     * - **Postpone**：稍后执行。
     * - **Regular**：周期执行。
     * @example `Regular`
     */
    "PlanScheduleType"?: string;
    /**
     * 计划ID。
     * > 您可以调用[DescribeDBInstancePlans](~~449398~~)接口查看计划的详细信息，包括计划ID。
     * @example `1234`
     */
    "PlanId"?: string;
    /**
     * 过滤该日期之前创建的计划，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间），不传入该参数表示返回所有时间的计划。
     * @example `2022-04-17T23:00Z`
     */
    "PlanCreateDate"?: string;
}
