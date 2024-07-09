export interface ListCustomCallTaggingResponse {
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 呼入号码标记列表。
         */
        List: {
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 呼入号码标记的号码。
             * @example `1312121****`
             */
            Number: string;
            /**
             * 呼入号码标记的描述。
             * @example `王先生`
             */
            Description: string;
            /**
             * 创建者。
             * @example `agent`
             */
            Creator: string;
            /**
             * 最后一次更新时间。
             * @example `2020-07-05 00:00:00.0`
             */
            UpdateTime: string;
            /**
             * 号码标签列表。
             */
            CallTagList: {
                /**
                 * 实例ID。
                 * @example `ccc-test`
                 */
                InstanceId: string;
                /**
                 * 号码标签名称。
                 * @example `TagA`
                 */
                TagName: string;
            }[];
        }[];
    };
}
