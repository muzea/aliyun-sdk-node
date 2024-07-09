export interface RestartEnvironmentFeatureRequest {
    /**
     * 环境id
     * @example `env-xxx`
     */
    "EnvironmentId": string;
    /**
     * 地域ID。默认为cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * feature的名称 app-agent-pilot | metric-agent | ebpf-agent | service-check
     * @example `metric-agent`
     */
    "FeatureName": string;
}
