export interface CreateHanaRestoreResponse {
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
     * @example `EEC65C22-2152-5E31-8AD6-D6CBF1BFF49F`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 恢复任务ID。
     * @example `hr-000fb9bz190p1rse6jwv`
     */
    RestoreId: string;
}
