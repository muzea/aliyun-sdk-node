export interface ReleaseBackupPlanResponse {
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
     * @example `dbstooi01xxxx`
     */
    BackupPlanId: string;
}
