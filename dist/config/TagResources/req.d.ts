export interface TagResourcesRequest {
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
     */
    "ResourceId": string[];
    /**
     * 资源的标签。
     * 最多支持绑定20个标签。
     */
    "Tag": {
        /**
         * 资源的标签键。
         * 最多支持绑定20个标签键。
         * @example `Env`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 最多支持绑定20个标签值。
         * @example `prod`
         */
        Value: string;
    }[];
}
