export interface DeleteLogtailPipelineConfigRequest {
    /**
     * Project名称
     * @example `test-project`
     */
    "project": string;
    /**
     * Logtail流水线配置名称
     * @example `test-config`
     */
    "configName": string;
}
