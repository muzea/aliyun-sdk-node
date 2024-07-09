export interface UpsertChunksResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `Successful`
     */
    Message: string;
    /**
     * API执行状态，取值说明：
     * - **success**：执行成功。
     * - **fail**：执行失败。
     * @example `success`
     */
    Status: string;
    /**
     * 向量化时使用的token数。
     * > token是指将输入的文本分割成的最小单位。token可以是一个单词、一个词组、一个标点符号、一个字符等。
     * @example `100`
     */
    EmbeddingTokens: string;
}
