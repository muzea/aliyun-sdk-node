export interface CopyCompliancePacksResponse {
    /**
     * 请求ID。
     * @example `9E1E69DE-BDED-581E-B559-0C15690901D0`
     */
    RequestId: string;
    /**
     * 合规包的复制结果。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    CopyRulesResult: boolean;
}
