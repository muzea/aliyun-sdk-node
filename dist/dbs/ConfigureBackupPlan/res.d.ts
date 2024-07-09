export interface ConfigureBackupPlanResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `F1FB49D4-B504-47F1-9F43-D7EAB33F****`
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
     * @example `The specified parameter %s value is not valid.     `
     */
    ErrMessage: string;
    /**
     * 备份计划ID。
     * @example `dbstooi01ex****`
     */
    BackupPlanId: string;
}
