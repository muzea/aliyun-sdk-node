export interface QueryEventRecordPlanDeviceByPlanRequest {
    /**
     * 智能告警事件录像计划ID。可调用[QueryEventRecordPlans](~~107907~~)查询。
     * @example `5b60bf0dd55944c19d7817442bc9****`
     */
    "PlanId": string;
    /**
     * 指定从返回结果中的第几页开始显示，默认值1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示的条数。最小值为1，最大值为50，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
