export interface CreateAndAnalyzeNetworkPathResponse {
    /**
     * 请求ID。
     * @example `D5E98683-355B-5867-8D3D-A24755F6895B`
     */
    RequestId: string;
    /**
     * 发起的网络可达性分析任务ID。
     * @example `nra-dfe9e53d2b524568****`
     */
    NetworkReachableAnalysisId: string;
    /**
     * 源资源ID。
     * @example `i-uf62y8khhbkbdrp6****
    `
     */
    SourceId: string;
    /**
     * 目的资源ID。
     * @example `i-m5eactvw7wtpktv5****
    `
     */
    TargetId: string;
    /**
     * 源资源类型。
     * @example `ecs`
     */
    SourceType: string;
    /**
     * 目的资源类型。
     * @example `ecs`
     */
    TargetType: string;
    /**
     * 源端口。
     * @example `0`
     */
    SourcePort: string;
    /**
     * 目的端口。
     * @example `80`
     */
    TargetPort: string;
    /**
     * 协议类型。
     * @example `tcp`
     */
    Protocol: string;
    /**
     * 源IP地址。
     * @example `192.168.XX.XX
    `
     */
    SourceIpAddress: string;
    /**
     * 目的IP地址。
     * @example `172.50.XX.XX
    `
     */
    TargetIpAddress: string;
}
