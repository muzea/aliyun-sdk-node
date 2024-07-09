export interface MoveTaskFlowToScenarioRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID。可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `11****`
     */
    "DagId": number;
    /**
     * 目标业务场景ID。参数缺省或小于等于0时移动至默认业务场景。
     * @example `1****`
     */
    "ScenarioId"?: number;
}
