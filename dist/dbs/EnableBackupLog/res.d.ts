export interface EnableBackupLogResponse {
    /**
     * HTTP状态码。
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
     * 是否执行成功。返回值：
     * - true：执行成功
     * - false：执行失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `findValidDBSJob error`
     */
    ErrMessage: string;
    /**
     * 备份计划ID。
     * @example `dbstooi******`
     */
    BackupPlanId: string;
    /**
     * 本次修改是否会触发预检查。返回值：
     * - true：已触发预检查，且需要您手动调用[StartBackupPlan](~~437206~~)接口，启动备份计划。
     * - false：不会触发预检查。
     * @example `true`
     */
    NeedPrecheck: boolean;
}
