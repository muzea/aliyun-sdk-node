export interface ListTaskFlowInstanceRequest {
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `7***`
     */
    "DagId": number;
    /**
     * 触发类型，取值如下：
     * - **0**：周期调度
     * - **1**：手动运行
     * @example `1`
     */
    "TriggerType"?: number;
    /**
     * 筛选出指定时间之后开始的任务流运行记录。时间格式为yyyy-MM-DD。
     * @example `2022-01-07`
     */
    "StartTimeBegin"?: string;
    /**
     * 筛选出指定时间之前开始的任务流运行记录。时间格式为yyyy-MM-DD。
     * @example `2022-04-08`
     */
    "StartTimeEnd"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 每页数据量。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 租户ID。您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 调整筛选条件：
     * **true**: StartTimeBegin和StartTimeEnd为筛选业务时间区间范围。
     * **false**: StartTimeBegin和StartTimeEnd为任务运行时间区间范围。
     * @example `true`
     */
    "UseBizDate"?: boolean;
    /**
     * 任务节点运行状态，取值如下：
     * - **0**：等待调度
     * - **1**：正在运行
     * - **2**：挂起
     * - **3**：运行失败
     * - **4**：运行成功
     * - **5**：已完成
     * @example `3`
     */
    "Status"?: number;
}
