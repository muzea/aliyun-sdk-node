export interface ListStateConfigurationsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称。内容限制为字母、数字、中划线、下划线，长度200字符。
     * @example `ACS-ECS-InventoryDataCollection`
     */
    "TemplateName"?: string;
    /**
     * 版本号，如不填默认为最新的版本号。
     * @example `v1`
     */
    "TemplateVersion"?: string;
    /**
     * 终态配置ID。
     * @example `["sc-asfgdhj12345"]`
     */
    "StateConfigurationIds"?: string;
    /**
     * 标签。
     * @example `{"Key": "oos", "Value": "inventory"}`
     */
    "Tags"?: any;
    /**
     * 每页返回的最大结果数。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 下一页Token。
     * @example `AHJKH-AHKJHDJK-AKHDIOWJL`
     */
    "NextToken"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxsn4m4******`
     */
    "ResourceGroupId"?: string;
}
