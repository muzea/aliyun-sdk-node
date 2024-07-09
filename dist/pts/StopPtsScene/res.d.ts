export interface StopPtsSceneResponse {
    /**
     * 错误提示信息，成功该字段为空。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DD6F2ED8-E31B-497F-85AB-C4E358A5F6F9`
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
