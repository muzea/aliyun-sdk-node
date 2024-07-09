export interface CreateAndStartBackupPlanResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `4F1888AC-1138-4995-B9FE-D2734F61C058`
     */
    RequestId: string;
    /**
     * 是否开启备份集，返回值如下：
     * - **true**：开启
     * - **false**：关闭
     * @example `true`
     */
    CreateBackupSet: boolean;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否请求成功。
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
     * @example `dbs1hvb0wwwe****`
     */
    BackupPlanId: string;
    /**
     * 订单ID。
     * @example `2056157***`
     */
    OrderId: string;
}
