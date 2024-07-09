export interface QueryDataTrackResultDownloadStatusRequest {
    /**
     * 工单ID，可通过调用接口[ListOrders](~~144643~~)获取该参数的值。
     * @example `11****`
     */
    "OrderId": number;
    /**
     * 下载key，定位数据追踪日志解析结果进度。可通过
     * [DownloadDataTrackResult](~~2261365~~)接口获取该参数的值。
     * @example `e23dd7ec-a19f-4a69-8eb3-8ffd26e6****`
     */
    "DownloadKeyId": string;
    /**
     * 租户ID。可调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `1***`
     */
    "Tid"?: number;
}
