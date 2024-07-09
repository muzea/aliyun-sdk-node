export interface CreateChainResponse {
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 交付链ID
     * @example `chi-02ymhtwl3cq8****`
     */
    ChainId: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `4BC03B36-E515-5806-99AC-268AE3C0****`
     */
    RequestId: string;
}
