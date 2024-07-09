export interface UpdateTaskFlowNotificationRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，任务流的唯一标识。可通过调用[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)接口获取该参数的值。
     * @example `15***`
     */
    "DagId": number;
    /**
     * 任务流运行失败通知开关。默认关闭，请手动开启。
     * @example `true`
     */
    "DagNotificationFail": boolean;
    /**
     * 任务流运行成功通知开关。默认关闭，请手动开启。
     * @example `true`
     */
    "DagNotificationSuccess": boolean;
    /**
     * 任务流SLA通知全局开关。默认关闭，请手动开启。
     * @example `true`
     */
    "DagNotificationSla": boolean;
}
