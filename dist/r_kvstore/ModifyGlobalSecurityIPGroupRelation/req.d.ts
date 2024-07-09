export interface ModifyGlobalSecurityIPGroupRelationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `r-t4n885e834f6****`
     */
    "DBClusterId": string;
    /**
     * IP白名单模板ID。
     * > 若您需要取消关联模板，您可以删除对应IP白名单模板ID，本参数会覆盖原值。若您需要取消所有关联模板，您可以传入空字符串。
     * @example `g-zsldxfiwjmti0kcm****`
     */
    "GlobalSecurityGroupId": string;
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
}
