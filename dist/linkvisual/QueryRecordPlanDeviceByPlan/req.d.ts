export interface QueryRecordPlanDeviceByPlanRequest {
    /**
     * 录像计划ID。可调用[QueryRecordPlans](~~107896~~)查询。
     * @example `5b60bf0dd55944c19d7817442bc9****`
     */
    "PlanId": string;
    /**
     * 指定从返回结果中的第几页开始显示。页数从1开始排序。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示的条数。最小值为1，最大值为50，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
}
