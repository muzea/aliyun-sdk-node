export interface UntagResourcesRequest {
    /**
     * 标签所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 配置审计的资源类型。取值：
     * - `ACS::Config::Rule`：单账号下的规则。
     * - `ACS::Config::AggregateConfigRule`：多账号下的规则。
     * - `ACS::Config::Aggregator`：账号组。
     * - `ACS::Config::CompliancePack`：单账号下的合规包。
     * - `ACS::Config::AggregateCompliancePack`：多账号下的合规包。
     * @example `ACS::Config::Rule`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * 单次最多支持为50个资源解绑标签。
     */
    "ResourceId": string[];
    /**
     * 资源的标签。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑资源上全部的标签。取值：
     * - true：解绑资源上全部的标签。
     * - false（默认值）：解绑资源上指定的标签。
     * @example `false`
     */
    "All"?: boolean;
}
