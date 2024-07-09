export interface ExecuteStructSyncRequest {
    /**
     * 工单号。
     * @example `112345`
     */
    "OrderId": number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `1`
     */
    "Tid"?: number;
}
