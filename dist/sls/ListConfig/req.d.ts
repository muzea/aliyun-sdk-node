export interface ListConfigRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logstore名称。
     * @example `ali-test-logstore`
     */
    "logstoreName": string;
    /**
     * 查询开始行。默认值为0。
     * @example `0`
     */
    "offset": number;
    /**
     * 分页查询时，设置的每页行数。最大值为500。
     * @example `10`
     */
    "size": number;
    /**
     * Logtail配置名称，用于模糊搜索。
     * @example `logtail-config-sample`
     */
    "configName"?: string;
}
