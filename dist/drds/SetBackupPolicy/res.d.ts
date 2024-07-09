export interface SetBackupPolicyResponse {
    /**
     * 请求ID。
     * @example `A3140FC7-B78B-4D8E-B0C8-926D28******`
     */
    RequestId: string;
    /**
     * 备份策略是否设置成功。
     * @example `success`
     */
    Result: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
}
