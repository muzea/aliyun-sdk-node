export interface GetLhSpaceByNameRequest {
    /**
     * 项目空间名称。
     * @example `test_space`
     */
    "SpaceName": string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3000`
     */
    "Tid"?: number;
}
