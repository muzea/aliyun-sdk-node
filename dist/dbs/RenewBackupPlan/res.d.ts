export interface RenewBackupPlanResponse {
    /**
     * Http状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22ECB1F`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid. `
     */
    ErrMessage: string;
    /**
     * 备份计划ID。
     * @example `dbstooi01exxx`
     */
    BackupPlanId: string;
    /**
     * 订单ID。
     * @example `202020202020`
     */
    OrderId: string;
}
