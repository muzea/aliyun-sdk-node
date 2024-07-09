export interface GetAlertRequest {
    /**
     * Project名称
     * @example `ali-test-project
    `
     */
    "project": string;
    /**
     * 告警规则ID
     * @example `alert-0123456789-123456`
     */
    "alertName": string;
}
