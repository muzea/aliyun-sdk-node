export interface CreateStateConfigurationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 终态配置的描述信息。
     * @example `collect inventory data`
     */
    "Description"?: string;
    /**
     * 模板名称。内容限制为字母、数字、中划线、下划线，长度200字符。
     * @example `ACS-ECS-InventoryDataCollection`
     */
    "TemplateName": string;
    /**
     * 版本号，如不填默认为最新的版本号。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 参数。
     * @example `{     "policy": {       "ACS:Application": {         "Collection": "Enabled"       },       "ACS:Network": {         "Collection": "Enabled"       }     }   }`
     */
    "Parameters"?: string;
    /**
     * 配置模式。
     * ApplyOnly：配置只应用一次（更新配置后重新应用）。
     * ApplyAndMonitor： 配置只应用一次，成功应用后，后续只检查配置是否漂移。
     * ApplyAndAutoCorrect：总是应用配置。
     * @example `ApplyOnce`
     */
    "ConfigureMode"?: string;
    /**
     * 调度类型。可选值：rate。
     * @example `rate`
     */
    "ScheduleType": string;
    /**
     * 调度表达式。调度间隔不得小于30分钟。
     * @example `1 hour`
     */
    "ScheduleExpression": string;
    /**
     * 目标资源。
     * @example `{     "ResourceType": "ALIYUN::ECS::Instance",     "Filters": [       {         "Type": "All",         "RegionId": "cn-hangzhou",         "Parameters": {           "RegionId": "cn-hangzhou",           "Status": "Running"         }       }     ]   }`
     */
    "Targets": string;
    /**
     * 幂等token。
     * @example `DASKJJLKADS-AHKLJHJSAKL-AJK`
     */
    "ClientToken"?: string;
    /**
     * 标签。
     * @example `{"Key": "oos", "Value": "inventory"}`
     */
    "Tags"?: any;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
}
