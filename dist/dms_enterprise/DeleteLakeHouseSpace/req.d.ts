export interface DeleteLakeHouseSpaceRequest {
    /**
     * 项目空间ID，可通过调用接口[GetLhSpaceByName](~~424379~~)获取该参数的值。
     * @example `24`
     */
    "SpaceId": number;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
