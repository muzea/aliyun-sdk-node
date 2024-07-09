export interface InitEnvironmentRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 语言环境：
     * - zh（默认）：中文
     * - en：英文
     * @example `zh`
     */
    "AliyunLang"?: string;
    /**
     * 环境实例ID。
     * @example `env-xxx`
     */
    "EnvironmentId": string;
    /**
     * 托管类型：
     * - none： 非托管。ACK集群的默认值。
     * - agent：托管agent（含ksm）。ASK、ACS、AckOne集群的默认值。
     * - agent-exproter： 托管agent和exporter。云服务类型的默认值。
     * @example `agent`
     */
    "ManagedType"?: string;
    /**
     * 是否创建Token，以提升数据读取安全性。
     * @example `false`
     */
    "CreateAuthToken"?: boolean;
}
