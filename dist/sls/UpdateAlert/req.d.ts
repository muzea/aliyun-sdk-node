export interface UpdateAlertRequest {
    /**
     * Project名称
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 告警规则ID
     * @example `alert-0123456789-123456`
     */
    "alertName": string;
    /**
     * 更新告警规则的配置
     */
    "body"?: {
        /**
         * 告警显示名称
         * @example `this is alert`
         */
        displayName: string;
        /**
         * 告警描述
         * @example `this is description`
         */
        description: string;
        /**
         * 告警详细配置
         */
        configuration: any;
        /**
         * 告警调度配置
         */
        schedule: any;
    };
}
