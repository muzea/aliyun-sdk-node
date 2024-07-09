export interface ListLogtailPipelineConfigRequest {
    /**
     * Project名称
     * @example `test-project`
     */
    "project": string;
    /**
     * 起始行
     * @example `0`
     */
    "offset"?: number;
    /**
     * 每页的流水线配置数量
     * @example `20`
     */
    "size"?: number;
    /**
     * logstore名称
     * @example `test-logstore`
     */
    "logstoreName"?: string;
    /**
     * 流水线配置名称
     * @example `logtail-config-sample`
     */
    "configName"?: string;
}
