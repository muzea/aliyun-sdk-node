export interface CreateTrFirewallV2RoutePolicyRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * VPC边界防火墙云企业网企业版引流场景类型。取值：
     * - **fullmesh**：多点间互联
     * - **one_to_one**：点到点
     * - **end_to_end**：点到多点
     * @example `fullmesh`
     */
    "PolicyType"?: string;
    /**
     * 引流名称。
     * @example `新加坡点到多点`
     */
    "PolicyName"?: string;
    /**
     * 引流描述。
     * @example `新加坡点到多点`
     */
    "PolicyDescription"?: string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-f8ce36689b224f77****`
     */
    "FirewallId"?: string;
    /**
     * 主引流实例列表。
     */
    "SrcCandidateList"?: {
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
    "DestCandidateList"?: {
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
}
