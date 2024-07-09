export interface ModifyBackupSourceEndpointResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22E****`
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
     * @example `The specified parameter %s value is not valid. `
     */
    ErrMessage: string;
    /**
     * 备份计划ID。
     * @example `dbs1h****usfa`
     */
    BackupPlanId: string;
    /**
     * 本次修改是否会触发预检查，如果为true则需要再调用StartBackupPlan接口启动备份计划。
     * @example `false`
     */
    NeedPrecheck: boolean;
}
