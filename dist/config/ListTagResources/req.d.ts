export interface ListTagResourcesRequest {
    /**
     * 标签所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 下一个查询开始的Token。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJ****`
     */
    "NextToken"?: string;
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
     * 最多支持为50个资源绑定标签。
     */
    "ResourceId"?: string[];
    /**
     * 资源的标签。
     * 最多支持绑定20个标签。
     */
    "Tag"?: {
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
