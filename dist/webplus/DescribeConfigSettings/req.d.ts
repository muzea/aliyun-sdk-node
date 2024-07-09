export interface DescribeConfigSettingsRequest {
    /**
     * 环境ID
     * @example `we-5d3eaaea2977ca5251e*****`
     */
    "EnvId"?: string;
    /**
     * 配置模板ID
     * @example `wct-5d3e9d2a2977ca5251e*****`
     */
    "TemplateId"?: string;
    "PathName"?: string;
    "OptionName"?: string;
    "RegionId"?: string;
}
