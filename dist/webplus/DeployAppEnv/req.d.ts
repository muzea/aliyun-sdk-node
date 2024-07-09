export interface DeployAppEnvRequest {
    "EnvId"?: string;
    "BatchSize"?: number;
    "BatchPercent"?: number;
    "BatchInterval"?: number;
    "PauseBetweenBatches"?: boolean;
    "PkgVersionId"?: string;
    "RegionId"?: string;
}
