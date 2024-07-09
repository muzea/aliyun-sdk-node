export interface UpdateDBInstancePlanRequest {
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的详情，包括实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    "DBInstanceId": string;
    /**
     * 计划名称。
     * @example `test-plan`
     */
    "PlanName"?: string;
    /**
     * 计划描述。
     * @example `this is a test plan`
     */
    "PlanDesc"?: string;
    /**
     * 计划的开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > - 仅**周期执行**的计划需要设置该参数。
     * >- 不传默认为当前时间。
     * @example `2022-04-17T23:00Z`
     */
    "PlanStartDate"?: string;
    /**
     * 计划的结束时间，需要大于查询开始时间，格式为<i>yyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > - 仅**周期执行**的计划需要设置该参数。
     * >- 该参数非必填，没有结束时间，计划删除周期停止。
     * @example `2023-04-17T23:00Z`
     */
    "PlanEndDate"?: string;
    /**
     * 执行计划具体信息，JSON格式，内容需根据**PlanType**参数和**PlanScheduleType**参数的值进行调整，具体说明请参见以下补充说明。
     * @example `{"pause":{"executeTime":"2022-08-30T16:00:00Z"}}`
     */
    "PlanConfig"?: string;
    /**
     * 计划ID。
     * > 您可以调用[DescribeDBInstancePlans](~~449398~~)接口查看计划的详细信息，包括计划ID。
     * @example `1234`
     */
    "PlanId": string;
}
