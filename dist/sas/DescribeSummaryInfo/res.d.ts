export interface DescribeSummaryInfoResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D40198E1-6EA8-482E-B3C7-D9573D75C0CA`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 未防护资产的数量。
     * @example `12`
     */
    AegisClientOfflineCount: number;
    /**
     * 已防护资产的数量。
     * @example `127`
     */
    AegisClientOnlineCount: number;
    /**
     * 资产的安全分值。以下是分值区间和资产安全状态的对应关系：
     * - 95~100：表示您的资产安全状态良好。
     * - 85~94：表示您的资产存在安全隐患，建议尽快加固安全防护体系。
     * - 70~84：表示您的资产存在较多安全隐患，建议及时加固安全防护体系。
     * - 69分以下：表示您的资产防御黑客入侵的能力很弱，需要尽快加固安全防护体系。
     * @example `44`
     */
    SecurityScore: number;
}
