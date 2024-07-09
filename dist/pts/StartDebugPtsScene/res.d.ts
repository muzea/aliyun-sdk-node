export interface StartDebugPtsSceneResponse {
    /**
     * 请求ID。
     * @example `C1905194-EE28-4F78-AD81-85A40D52D1BC`
     */
    RequestId: string;
    /**
     * 错误提示消息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 任务ID。
     * @example ` NJJBH8B`
     */
    PlanId: string;
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
