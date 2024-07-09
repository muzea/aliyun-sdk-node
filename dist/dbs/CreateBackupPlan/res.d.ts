export interface CreateBackupPlanResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `7BCF6D62-885F-5A4A-91A1-679760E7****`
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
     * @example `The specified parameter %s value is not valid.`
     */
    ErrMessage: string;
    /**
     * 备份计划ID。
     * @example `dbsrhahrsu2****`
     */
    BackupPlanId: string;
    /**
     * 订单ID。
     * @example `21437345592****`
     */
    OrderId: string;
}
