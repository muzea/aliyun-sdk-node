export interface UpdateStateConfigurationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 描述内容。
     * @example `ACS-ECS-InventoryDataCollection`
     */
    "Description"?: string;
    /**
     * 参数。
     * @example `{ "policy": { "ACS:Application": { "Collection": "Enabled" }, "ACS:Network": { "Collection": "Enabled" } } }`
     */
    "Parameters"?: any;
    /**
     * 配置模式。 ApplyOnce：配置只应用一次（更新配置后重新应用）。 ApplyAndMonitor： 配置只应用一次，成功应用后，后续只检查配置是否漂移。 ApplyAndAutoCorrect：总是应用配置。
     * @example `ApplyOnce`
     */
    "ConfigureMode"?: string;
    /**
     * 调度类型。
     * @example `rate`
     */
    "ScheduleType"?: string;
    /**
     * 调度表达式。
     * @example `1 hour`
     */
    "ScheduleExpression"?: string;
    /**
     * 目标资源。
     * @example `{ "ResourceType": "ALIYUN::ECS::Instance", "Filters": [ { "Type": "All", "RegionId": "cn-hangzhou", "Parameters": { "RegionId": "cn-hangzhou", "Status": "Running" } } ] }`
     */
    "Targets"?: string;
    /**
     * 幂等token。
     * @example `DASKJJLKADS-AHKLJHJSAKL-AJK`
     */
    "ClientToken"?: string;
    /**
     * 终态配置ID。
     * @example `sc-asfgdhj12345`
     */
    "StateConfigurationId": string;
    /**
     * 标签。
     * @example `{"Key": "oos", "Value": "sc"}`
     */
    "Tags"?: any;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
}
