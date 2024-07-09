export interface RestartAppEnvRequest {
    /**
     * 环境ID，将重启此环境
     * @example `we-5d39b8ba6786bd4b149*****`
     */
    "EnvId"?: string;
    "BatchSize"?: number;
    "BatchPercent"?: number;
    "BatchInterval"?: number;
    "PauseBetweenBatches"?: boolean;
    "RegionId"?: string;
}
