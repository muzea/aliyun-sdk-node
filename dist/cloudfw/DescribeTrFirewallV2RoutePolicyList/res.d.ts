export interface DescribeTrFirewallV2RoutePolicyListResponse {
    /**
     * 防火墙路由策略列表。
     */
    TrFirewallRoutePolicies: {
        /**
         * VPC边界防火墙云企业网企业版引流场景类型。取值：
         * - **fullmesh**：多点间互联
         * - **one_to_one**：点到点
         * - **end_to_end**：点到多点
         * @example `fullmesh`
         */
        PolicyType: string;
        /**
         * 策略名称。
         * @example `新加坡点到多点`
         */
        PolicyName: string;
        /**
         * 策略描述。
         * @example `点到多点`
         */
        PolicyDescription: string;
        /**
         * 主引流实例列表。
         */
        SrcCandidateList: {
            /**
             * 引流实例的ID。
             * @example `vpc-2ze9epancaw8t4sha****`
             */
            CandidateId: string;
            /**
             * 引流实例类型。
             * @example `VPC`
             */
            CandidateType: string;
        }[];
        /**
         * 子引流实例列表。
         */
        DestCandidateList: {
            /**
             * 引流实例的ID。
             * @example `vpc-2ze9epancaw8t4sha****`
             */
            CandidateId: string;
            /**
             * 引流实例类型。
             * @example `VPC`
             */
            CandidateType: string;
        }[];
        /**
         * 防火墙路由策略ID。
         * @example `policy-7b66257c14e141fb****`
         */
        TrFirewallRoutePolicyId: string;
        /**
         * 策略状态。取值：
         * - creating：创建中
         * - deleting：删除中
         * - opening：开启中
         * - opened：已开启
         * - closing：关闭中
         * - closed：已关闭
         * @example `opened`
         */
        PolicyStatus: string;
    }[];
    /**
     * 返回结果的请求ID。
     * @example `95EB5F3A-67FE-5780-92BD-5ECBA772AB7E`
     */
    RequestId: string;
    /**
     * 返回结果的总条数。
     * @example `1`
     */
    TotalCount: string;
}
