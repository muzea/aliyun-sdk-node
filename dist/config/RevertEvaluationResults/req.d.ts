export interface RevertEvaluationResultsRequest {
    /**
     * 规则ID。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~169607~~)。
     * @example `cr-7e72626622af0051****`
     */
    "ConfigRuleId": string;
    /**
     * 待恢复的资源列表。
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
}
