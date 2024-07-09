export interface DeleteLhMembersRequest {
    /**
     * 对象类型，取值如下：
     * - **0**：项目空间
     * - **1**：任务流
     * @example `1`
     */
    "ObjectType": number;
    /**
     * 对象ID：
     * - 项目空间ID（Id），可通过调用接口[GetLhSpaceByName](~~424379~~)获取该参数的值。
     * - 任务流ID（Id），可通过调用接口[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `9***`
     */
    "ObjectId": number;
    /**
     * 目标用户信息列表。
     */
    "MemberIds": number[];
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
