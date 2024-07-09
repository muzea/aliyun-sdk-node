export interface CheckDcdnProjectExistResponse {
    /**
     * 请求ID。
     * @example `b021e538-9dde-46ed-a1f2-9469da8f3e77`
     */
    RequestId: string;
    /**
     * 返回结果内容。
     */
    Content: {
        /**
         * 是否存在，取值：
         * - **false**：不存在。
         * - **true**：存在。
         * @example `false`
         */
        Exist: string;
    };
}
