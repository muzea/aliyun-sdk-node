export interface UpdateApplicationRequest {
    /**
     * 地域ID，目前仅支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用名称。
     * @example `My-Application`
     */
    "Name": string;
    /**
     * 要给应用更新的描述信息。
     * @example `test application`
     */
    "Description"?: string;
    /**
     * 标签。
     * @example `{"k1":"v1","k2":"v2"}`
     */
    "Tags"?: any;
    /**
     * 应用报警配置。
     */
    "AlarmConfig"?: {
        /**
         * 报警联系组。
         */
        ContactGroups: string[];
        /**
         * 报警模板组。
         */
        TemplateIds: string[];
        /**
         * 应用的健康检查URL
         * @example `/healthcheck/tcp50122`
         */
        HealthCheckUrl: string;
    };
    /**
     * 应用报警模板前是否删除已有的报警规则，默认值false。
     * @example `false`
     */
    "DeleteAlarmRulesBeforeUpdate"?: boolean;
}
