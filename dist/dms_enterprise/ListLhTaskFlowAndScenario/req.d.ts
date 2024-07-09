export interface ListLhTaskFlowAndScenarioRequest {
    /**
     * 项目空间ID（Id），可通过调用接口[GetLhSpaceByName](~~424379~~)获取该参数的值。
     * @example `24`
     */
    "SpaceId": number;
    /**
     * 用户ID，可通过调用接口[ListUsers](~~141938~~)或[GetUser](~~147098~~)获取该参数的值。
     * @example `51****`
     */
    "UserId"?: number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
