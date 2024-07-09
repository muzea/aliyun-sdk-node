export interface GetEmonGrafanaAlertsRequest {
    /**
     * 监控报警项目ID，格式为**es-<yourUID>**。
     * @example `es-133071096032****`
     */
    "ProjectId": string;
    /**
     * 请求体，无需填写。
     * @example `空`
     */
    "body"?: string;
}
