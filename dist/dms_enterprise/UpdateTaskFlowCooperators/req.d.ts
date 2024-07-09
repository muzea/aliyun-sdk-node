export interface UpdateTaskFlowCooperatorsRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `11****`
     */
    "DagId": number;
    /**
     * 待更新的相关人员用户Id列表。
     */
    "CooperatorIds"?: string[];
}
