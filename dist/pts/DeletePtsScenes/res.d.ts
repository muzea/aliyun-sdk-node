export interface DeletePtsScenesResponse {
    /**
     * 错误提示信息，若成功则不显示此参数。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `35290A5B-AB50-46BD-81E0-E316F86128C4`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
}
