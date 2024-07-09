export interface FlashbackRecycleBinTableResponse {
    /**
     * 是否成功恢复已删除的逻辑表。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `463A5F0F-12AD-4544-A902-B2B983******`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
}
