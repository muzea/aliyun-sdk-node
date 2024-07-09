export interface CheckServiceStatusResponse {
    /**
     * 操作是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Data: string;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `5710C923-AD09-4293-9E11-DCBE3D15F8D4`
     */
    RequestId: string;
}
