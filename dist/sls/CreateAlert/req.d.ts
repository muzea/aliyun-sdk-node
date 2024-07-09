export interface CreateAlertRequest {
    /**
     * Project名称
     * @example `ali-test-project
    `
     */
    "project": string;
    /**
     * 告警规则配置
     */
    "body"?: {
        /**
         * 告警名称，project下唯一
         * @example `alert-123456`
         */
        name: string;
        /**
         * 告警显示名称
         * @example `test-alert`
         */
        displayName: string;
        /**
         * 告警描述
         * @example `一条告警规则`
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
