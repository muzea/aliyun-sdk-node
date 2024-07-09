export interface CancelQueryResponse {
    /**
     * 查询ID
     * @example `Q-BCA5E96CB84BB8B8`
     */
    Data: string;
    /**
     * 请求ID
     * @example `DB07AAE9-4B88-5DEA-8F1D-4D1A9A864A85`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
