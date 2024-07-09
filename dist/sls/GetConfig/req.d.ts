export interface GetConfigRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logtail配置名称。
     * @example `logtail-config-sample`
     */
    "configName": string;
}
