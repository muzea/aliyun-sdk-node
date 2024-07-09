export interface CreateHanaBackupPlanResponse {
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `33AA3AAE-89E1-5D3A-A51D-0C0A80850F68`
     */
    RequestId: string;
    /**
     * 备份计划ID。
     * @example `pl-000756jdlk2zmqig2nea`
     */
    PlanId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
