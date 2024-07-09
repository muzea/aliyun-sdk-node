export interface ListChatRecordDetailResponse {
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回数据。
     */
    ResultData: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 总记录数。
         * @example `100`
         */
        TotalResults: number;
        /**
         * 总页数。
         * @example `10`
         */
        TotalPage: number;
        /**
         * 每页大小
         * @example `10`
         */
        OnePageSize: number;
        /**
         * 查询数据结果。
         */
        Data: {
            /**
             * 客服账号
             * @example `123@123.com`
             */
            ServicerName: string;
            /**
             * 在线开始时间。
             * @example `1614578400000`
             */
            StartTime: number;
            /**
             * 在线结束时间。
             * @example `1614578410000`
             */
            EndTime: number;
            /**
             * 在线会话详细信息列表。
             */
            MessageList: {
                /**
                 * 发送信息的账号。
                 * @example `account1`
                 */
                SenderName: string;
                /**
                 * 发送的对话内容
                 * @example `你好`
                 */
                Content: string;
                /**
                 * 发送信息类型。取值：
                 * - **1**：会员
                 * - **2**：客服
                 * @example `2`
                 */
                SenderType: number;
                /**
                 * 信息发送时间。
                 * @example `1614578400000`
                 */
                CreateTime: number;
                /**
                 * 信息类型。
                 * @example `MSG`
                 */
                MsgType: string;
            }[];
        }[];
    };
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
