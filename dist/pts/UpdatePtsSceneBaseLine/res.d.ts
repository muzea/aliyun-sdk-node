export interface UpdatePtsSceneBaseLineResponse {
    /**
     * 错误提示信息，如成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4F7D2CE0-AE4C-4143-955A-8E4595AF86A6`
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
