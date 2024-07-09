export interface ModifyStorageStrategyResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `E995F91F-6F89-503B-9F7D-502F58FD****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
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
     * @example `dbsqdss5tmh****`
     */
    BackupPlanId: string;
    /**
     * 本次修改是否会触发预检查，返回值如下：
     * - **true**：已触发预检查，且需要您手动调用[StartBackupPlan](~~437206~~)接口，启动备份计划。
     * - **false**：不会触发预检查。
     * @example `false`
     */
    NeedPrecheck: boolean;
}
