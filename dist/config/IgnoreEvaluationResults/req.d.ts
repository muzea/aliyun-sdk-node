export interface IgnoreEvaluationResultsRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~169607~~)。
     * @example `cr-7e72626622af0051****`
     */
    "ConfigRuleId": string;
    /**
     * 待忽略的资源列表。
     */
    "Resources": {
        /**
         * 资源归属的阿里云账号ID。
         * @example `100931896542****`
         */
        ResourceAccountId: number;
        /**
         * 资源类型。
         * 关于如何获取资源类型，请参见[ListDiscoveredResources](~~169620~~)。
         * @example `ACS::SLB::LoadBalancer`
         */
        ResourceType: string;
        /**
         * 资源归属的地域ID。
         * 关于如何获取资源归属的地域ID，请参见[ListDiscoveredResources](~~169620~~)。
         * @example `cn-beijing`
         */
        Region: string;
        /**
         * 资源ID。
         * 关于如何获取资源ID，请参见[ListDiscoveredResources](~~169620~~)。
         * @example `lb-hp3a3b4ztyfm2plgm****`
         */
        ResourceId: string;
    }[];
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
