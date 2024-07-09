export interface ModifyTrFirewallV2RoutePolicyScopeRequest {
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 防火墙路由策略ID。
     * @example `policy-4d724d0139df48f1****`
     */
    "TrFirewallRoutePolicyId": string;
    /**
     * VPC边界防火墙实例ID。
     * @example `vfw-tr-6520de0253bc4669****`
     */
    "FirewallId": string;
    /**
     * 主引流实例列表。
     */
    "SrcCandidateList"?: {
        /**
         * 引流实例的ID。
         * @example `vpc-2ze9epancaw8t4sha****
        `
         */
        CandidateId: string;
        /**
         * 引流实例类型。
         * @example `VPC
        `
         */
        CandidateType: string;
    }[];
    /**
     * 子引流实例列表。
     */
    "DestCandidateList"?: {
        /**
         * 引流实例的ID。
         * @example `vpc-2ze9epancaw8t4uzi****
        `
         */
        CandidateId: string;
        /**
         * 引流实例类型。
         * @example `VPC`
         */
        CandidateType: string;
    }[];
    /**
     * 是否恢复引流配置。取值：
     * - true：路由回滚
     * - false：路由撤销
     * @example `false`
     */
    "ShouldRecover"?: string;
}
