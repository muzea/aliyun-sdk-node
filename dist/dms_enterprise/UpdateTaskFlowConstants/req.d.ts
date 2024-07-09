export interface UpdateTaskFlowConstantsRequest {
    /**
     * 租户ID，可通过调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可通过调用[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)接口获取该参数的值。
     * @example `3****`
     */
    "DagId": number;
    /**
     * 任务流常量列表。
     */
    "DagConstants": {
        /**
         * 任务流常量键名。
         * @example `poc_test`
         */
        Key: string;
        /**
         * 任务流常量键值。
         * @example `poc_test`
         */
        Value: string;
    }[];
}
