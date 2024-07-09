export interface DescribeDBInstancePlansResponse {
    /**
     * API执行状态。
     * 执行成功则返回**success**；执行失败则不返回该参数。
     * @example `success`
     */
    Status: string;
    /**
     * 错误信息。
     * 只会在API执行失败时返回该参数。
     * @example `****`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `34b32a0a-08ef-4a87-b6be-cdd988888888`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 当前页记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 计划列表。
         */
        PlanList: {
            /**
             * 计划名称。
             * @example `test-plan`
             */
            PlanName: string;
            /**
             * 计划描述。
             * @example `this is a test plan`
             */
            PlanDesc: string;
            /**
             * 计划ID。
             * @example `1234`
             */
            PlanId: string;
            /**
             * 计划状态，取值如下：
             * - **active**：运行中。
             * - **cancel**：取消。
             * - **deleted**：删除。
             * - **finished**：执行完成。
             * @example `active`
             */
            PlanStatus: string;
            /**
             * 计划类型，取值如下：
             * - **PauseResume**：自动启停。
             * - **Resize**：节点扩容，即增加或减少计算节点。
             * -  **ModifySpec**：规格变更，即变更计算节点规格。
             * @example `PauseResume`
             */
            PlanType: string;
            /**
             * 计划执行方式，取值如下：
             * - **Postpone**：稍后执行。
             * - **Regular**：周期执行。
             * @example `Regular`
             */
            PlanScheduleType: string;
            /**
             * 计划的开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > - 仅周期执行的计划返回该参数。
             * > - 不传默为当前时间。
             * @example `2022-04-17T23:00Z`
             */
            PlanStartDate: string;
            /**
             * 计划的结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > - 仅周期执行的计划返回该参数。
             * > - 创建计划时该参数不传，则不返回。
             * @example `2023-04-17T23:00Z`
             */
            PlanEndDate: string;
            /**
             * 计划的具体信息。
             * @example `{"pause":{"planCronTime":"0 22 * * 5"},"resume":{"planCronTime":"0 23 * * 5"}}`
             */
            PlanConfig: string;
            /**
             * 实例ID。
             * @example `gp-bp12ga6v69h86****`
             */
            DBInstanceId: string;
        }[];
    };
}
