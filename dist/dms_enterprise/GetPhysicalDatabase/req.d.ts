export interface GetPhysicalDatabaseRequest {
    /**
     * 物理库ID，您可以调用[SearchDatabase](~~141876~~)接口获取该值。
     * @example `43153`
     */
    "DbId": number;
    /**
     * 租户ID，您可以调用[GetUserActiveTenant](~~198073~~)接口获取该参数。
     * @example `1`
     */
    "Tid"?: number;
}
