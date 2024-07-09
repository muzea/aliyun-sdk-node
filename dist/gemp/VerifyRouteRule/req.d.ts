export interface VerifyRouteRuleRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 规则id
         * @example `1111`
         */
        routeRuleId: number;
        /**
         * 测试告警内容
         */
        testSourceEvents: {
            /**
             * 监控源源ID
             * @example `1`
             */
            monitorSourceId: number;
            /**
             * 监控源名称
             * @example `zabbix`
             */
            monitorSourceName: string;
            /**
             * 告警时间
             * @example `2021-09-08 13:00:00`
             */
            eventTime: string;
            /**
             * 告警JSON
             * @example `{}`
             */
            eventJson: string;
        }[];
    };
}
