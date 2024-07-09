export interface CreateDBInstancePlanRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 计划名称。
     * @example `test-plan`
     */
    "PlanName": string;
    /**
     * 计划描述。
     * @example `this is a test plan`
     */
    "PlanDesc"?: string;
    /**
     * 计划类型，取值如下：
     * - **PauseResume**：自动启停。
     * - **Resize**：实例变配，即增加或减少计算节点。
     * - **ModifySpec**：规格变更，即变更计算节点规格。
     * > - 实例变配仅支持Serverless模式实例。
     * >- 规格变更仅支持存储弹性模式实例。
     * @example `PauseResume`
     */
    "PlanType": string;
    /**
     * 计划执行方式，取值如下：
     * - **Postpone**：稍后执行。
     * - **Regular**：周期执行。
     * @example `Regular`
     */
    "PlanScheduleType": string;
    /**
     * 计划的开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > - 仅**PlanScheduleType**为**Regular**时需要设置该参数。
     * >- 不传默认为当前时间。
     * @example `2022-04-17T23:00Z`
     */
    "PlanStartDate"?: string;
    /**
     * 计划的结束时间，需要大于查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > - 仅**PlanScheduleType**为**Regular**时需要设置该参数。
     * >- 该参数非必填，没有结束时间，计划删除周期停止。
     * @example `2023-04-17T23:00Z`
     */
    "PlanEndDate"?: string;
    /**
     * 执行计划具体信息，JSON格式，内容需根据**PlanType**参数和**PlanScheduleType**参数的值进行调整，具体说明请参见以下补充说明。
     * @example `{"pause":{"planCronTime":"0 0 12 1/1 * ? "},"resume":{"planCronTime":"0 0 0 1/1 * ? "}}`
     */
    "PlanConfig": string;
}
