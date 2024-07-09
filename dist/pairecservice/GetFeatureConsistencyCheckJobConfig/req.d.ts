export interface GetFeatureConsistencyCheckJobConfigRequest {
    /**
     * 特征一致性检查配置ID。如何获取配置ID，请参见[ListFeatureConsistencyCheckJobConfigs](~~2557567~~)。
     * @example `3`
     */
    "FeatureConsistencyCheckJobConfigId": string;
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
     * @example `pairec-cn-********`
     */
    "InstanceId": string;
}
