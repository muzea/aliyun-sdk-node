export interface ChangeResourceGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要修改资源组的云资源的资源ID。
     * - 当ResourceType为template时，ResourceId为TemplateName;
     * - 当ResourceType为parameter时，ResourceId为Name；
     * - 当ResourceType为secretparameter时，ResourceId为Name；
     * - 当ResourceType为stateconfiguration时，ResourceId为StateConfigurationId。
     * - 当ResourceType为application时，ResourceId为Name。
     * @example `TemplateName`
     */
    "ResourceId": string;
    /**
     * 需要移入云资源实例的资源组ID。资源组是在阿里云账号下进行资源分组管理的一种机制，资源组能够帮助您解决单个云账号内的资源分组和授权管理等复杂性问题。详细信息，请参见什么是[资源管理](~~94475~~)。
     * @example `rg-acfm3peow3k****`
     */
    "NewResourceGroupId": string;
    /**
     * 需要修改资源组的云资源类型，取值：
     * - template：模板。
     * - parameter：参数。
     * - secretparameter：加密参数。
     * - stateconfiguration：终态配置。
     * - application：应用。
     * @example `template`
     */
    "ResourceType": string;
}
