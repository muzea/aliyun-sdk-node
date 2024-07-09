export interface ModifyPtsSceneResponse {
    /**
     * 错误提示消息。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `449ADAFB-8DA4-4317-A284-4922D04DE828`
     */
    RequestId: string;
    /**
     * 请求状态码。
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
