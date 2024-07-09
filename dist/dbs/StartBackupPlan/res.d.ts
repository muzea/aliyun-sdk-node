export interface StartBackupPlanResponse {
    /**
     * HTTP·状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `D13761C3-9971-5C02-B789-3F3CD159****`
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
     * @example `The specified parameter %s value is not valid.  `
     */
    ErrMessage: string;
    /**
     * 全量备份集ID。
     * @example `1h7toien3****`
     */
    CreatedFullBackupsetId: string;
    /**
     * 备份计划ID。
     * @example `dbsqdss5tm****`
     */
    BackupPlanId: string;
}
