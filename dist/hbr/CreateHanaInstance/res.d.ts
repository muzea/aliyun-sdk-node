export interface CreateHanaInstanceResponse {
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
     * @example `EB526A5D-1FE2-51C1-B790-1732C1DBA969`
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
     * SAP HANA实例ID。
     * @example `cl-000dp1sz******6hn`
     */
    ClusterId: string;
}
