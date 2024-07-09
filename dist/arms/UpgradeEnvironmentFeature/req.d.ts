export interface UpgradeEnvironmentFeatureRequest {
    /**
     * 环境ID。
     * @example `env-xxx`
     */
    "EnvironmentId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * Feature的名称 app-agent-pilot | metric-agent | ebpf-agent | service-check。
     * @example `metric-agent`
     */
    "FeatureName": string;
    /**
     * Feature的版本。
     * @example `1.1.17`
     */
    "FeatureVersion"?: string;
    /**
     * 开关服务发现用, PodAnnotation | PodMonitor | ServiceMonitor, PodAnnotation开关是run和mini, pm和sm则传 true和false, 例如 {"PodAnnotation":"run"}。
     * @example `{"PodAnnotation":"run"}`
     */
    "Values"?: string;
    /**
     * 语言环境, 默认为中文 zh | en。
     * @example `zh`
     */
    "AliyunLang"?: string;
}
