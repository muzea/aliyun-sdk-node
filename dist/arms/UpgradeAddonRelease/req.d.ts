export interface UpgradeAddonReleaseRequest {
    /**
     * Addon的版本信息。
     * @example `0.0.2`
     */
    "AddonVersion": string;
    /**
     * 元数据信息。
     * @example `{"host":"mysql-service.default","port":3306,"username":"root","password":"roots"}`
     */
    "Values": string;
    /**
     * Release的名称。
     * @example `mysql-1695372983039`
     */
    "ReleaseName": string;
    /**
     * 是否预检本次请求。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 环境ID。
     * @example `env-xxx`
     */
    "EnvironmentId": string;
}
