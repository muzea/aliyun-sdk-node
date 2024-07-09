export interface GetRumDataForPageResponse {
    /**
     * Id of the request
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 查询是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: string;
    /**
     * 调用失败时返回的信息。
     * @example `内部错误，请联系管理员。
    `
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 数据总条数。
         * @example `7`
         */
        Total: string;
        /**
         * 当前页。
         * @example `1`
         */
        Page: string;
        /**
         * 每页数量。
         * @example `20`
         */
        PageSize: string;
        /**
         * 保留字段，请忽略。
         * @example `保留字段，请忽略。`
         */
        Authentication: string;
        /**
         * 是否结束，true：已结束，false：未结束。
         * @example `true`
         */
        Completion: string;
        /**
         * 保留字段，请忽略。
         * @example `保留字段，请忽略。
        
        `
         */
        Preference: string;
        /**
         * 数据列表。
         */
        Items: any[];
    };
}
