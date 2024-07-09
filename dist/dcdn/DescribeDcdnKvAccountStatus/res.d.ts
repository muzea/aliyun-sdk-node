export interface DescribeDcdnKvAccountStatusResponse {
    /**
     * 账户状态。
     * - **online**：开启。
     * - **offline**：关闭。
     * @example `online`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `5C1E43DC-9E51-4771-82C0-7D5ECEB547A1`
     */
    RequestId: string;
}
