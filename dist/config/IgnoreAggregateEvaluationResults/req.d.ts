export interface IgnoreAggregateEvaluationResultsRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListAggregateConfigRules](~~264148~~)。
     * @example `cr-7e72626622af0051****`
     */
    "ConfigRuleId": string;
    /**
     * 待忽略的资源列表。
     */
    "Resources": {
        /**
         * 资源归属的阿里云账号ID。
         * > 该账号只能是当前企业管理账号或当前企业管理账号中的成员账号。
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
    /**
     * 忽略原因。
     * @example `无需检测。`
     */
    "Reason"?: string;
    /**
     * 已忽略评估结果的自动恢复日期。
     * > 为空表示不会自动恢复，需要您手动恢复。
     * @example `2022-06-01`
     */
    "IgnoreDate"?: string;
}
