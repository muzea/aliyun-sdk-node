export interface SetDirQuotaResponse {
    /**
     * 请求ID。
     * @example `5BC5CB97-9F28-42FE-84A4-0CD0DF42****`
     */
    RequestId: string;
    /**
     * 请求状态。
     * 包括：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
