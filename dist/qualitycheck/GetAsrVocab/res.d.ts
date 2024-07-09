export interface GetAsrVocabResponse {
    /**
     * 结果代码，**200**表示成功。若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3CEA0495-341B-4482-9AD9-8191EF4***	`
     */
    RequestId: string;
    /**
     * 请求是否成功。调用方可根据此字段来判断请求是否成功：
     * - **true**表示成功
     * - **false/null**表示失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 热词组名称
         * @example `test`
         */
        Name: string;
        Words: {
            /**
             * 热词表
             */
            Word: {
                /**
                 * 权重
                 * @example `0`
                 */
                Weight: number;
                /**
                 * 热词
                 * @example `你好`
                 */
                Word: string;
            }[];
        };
    };
}
