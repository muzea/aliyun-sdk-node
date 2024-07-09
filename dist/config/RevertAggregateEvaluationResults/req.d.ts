export interface RevertAggregateEvaluationResultsRequest {
    /**
     * 账号组规则ID。
     * @example `cr-7e72626622af0051****`
     */
    "ConfigRuleId": string;
    /**
     * 待恢复的资源列表。
     */
    "Resources": {
        /**
         * 资源归属的阿里云账号ID。
         * > 该账号只能是当前管理账号或当前管理账号中的成员账号。
         * @example `120886317861****`
         */
        ResourceAccountId: number;
        /**
         * 资源类型。
         * 关于如何获取资源类型，请参见[ListAggregateDiscoveredResources](~~265983~~)。
         * @example `ACS::SLB::LoadBalancer`
         */
        ResourceType: string;
        /**
         * 资源归属的地域ID。
         * 关于如何获取资源归属的地域ID，请参见[ListAggregateDiscoveredResources](~~265983~~)。
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 资源ID。
         * 关于如何获取资源ID，请参见[ListAggregateDiscoveredResources](~~265983~~)。
         * @example `lb-hp3a3b4ztyfm2plgm****`
         */
        ResourceId: string;
    }[];
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-5b6c626622af008f****`
     */
    "AggregatorId": string;
}
