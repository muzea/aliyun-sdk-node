export interface DescribeTrFirewallPolicyBackUpAssociationListRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-8b268ce1b26e4c68****`
     */
    "FirewallId"?: string;
    /**
     * 防火墙路由策略ID。
     * @example `policy-5dcafb12ff794a56****`
     */
    "TrFirewallRoutePolicyId"?: string;
    /**
     * 引流实例列表
     */
    "CandidateList"?: {
        /**
         * 引流实例的ID。
         * @example `vpc-wz9grb8ng3y7h7lf2****
        `
         */
        CandidateId: string;
        /**
         * 引流实例类型。
         * @example `VPC`
         */
        CandidateType: string;
    }[];
}
