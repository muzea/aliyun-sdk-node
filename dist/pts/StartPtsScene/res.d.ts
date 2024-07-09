export interface StartPtsSceneResponse {
    /**
     * 请求ID。
     * @example `BD12DCC9-5E48-4E77-9657-8D34D8C0F97B`
     */
    RequestId: string;
    /**
     * 错误提示信息，如果是成功，该字段为空。
     * @example `空`
     */
    Message: string;
    /**
     * 执行场景成功，返回的压测计划ID。
     * @example `SFVAFE`
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
