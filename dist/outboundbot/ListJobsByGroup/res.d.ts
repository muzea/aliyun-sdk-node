export interface ListJobsByGroupResponse {
    /**
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 作业数据
     */
    Jobs: {
        /**
         * 页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 个数
         * @example `10`
         */
        PageSize: number;
        /**
         * 总计个数
         * @example `1`
         */
        TotalCount: number;
        /**
         * 作业数组
         */
        List: {
            /**
             * 作业状态
             * @example `Succeeded`
             */
            Status: string;
            /**
             * 场景id
             * @example `ade80092-03d9-4f4d-ad4f-ab8a247d3150`
             */
            ScenarioId: string;
            /**
             * 作业组id
             * @example `fce6c599-8ede-40e3-9f78-0928eda7b4e8`
             */
            JobGroupId: string;
            /**
             * 策略id
             * @example `c8a2b7f2-ad1a-4865-b872-d0080d9802d9`
             */
            StrategyId: string;
            /**
             * 作业id
             * @example `b72425bd-7871-4050-838e-033d80d754b7`
             */
            JobId: string;
            /**
             * 优先级
             * @example `5`
             */
            Priority: number;
            /**
             * 系统优先级
             * @example `1`
             */
            SystemPriority: number;
            /**
             * 失败原因
             * @example `NoAnswer`
             */
            FailureReason: string;
            /**
             * 第三方系统id
             * @example `d5971d98-7312-4f0e-a918-a17d67133e28`
             */
            ReferenceId: string;
            /**
             * 联系人列表
             */
            Contacts: {
                /**
                 * 号码
                 * @example `135****8888`
                 */
                PhoneNumber: string;
                /**
                 * 状态
                 * @example `Available`
                 */
                State: string;
                /**
                 * 联系人id
                 * @example `db3db762-e421-44c9-9a01-cb423470757c`
                 */
                ContactId: string;
                /**
                 * 联系人尊称
                 * @example `张先生`
                 */
                Honorific: string;
                /**
                 * 作业id
                 * @example `72dcd26b-f12d-4c27-b3af-18f6aed5b160`
                 */
                JobId: string;
                /**
                 * 联系人名字
                 * @example `张三`
                 */
                ContactName: string;
                /**
                 * 角色
                 * @example `*`
                 */
                Role: string;
                /**
                 * 联系人第三方系统id
                 * @example `2fa6bac3-06da-4315-82ab-72d6fd3a6f34`
                 */
                ReferenceId: string;
            }[];
            /**
             * 业务数据
             */
            Extras: {
                /**
                 * 业务参数名字
                 * @example `djrq`
                 */
                Key: string;
                /**
                 * 业务参数值
                 * @example `2019-08-21 09:49:59.0`
                 */
                Value: string;
            }[];
            /**
             * 对话摘要
             */
            Summary: {
                /**
                 * 对话摘要名字
                 * @example `score`
                 */
                SummaryName: string;
                /**
                 * 作业组id
                 * @example `88e56cfb-33f8-477a-907c-0fe83292d924`
                 */
                JobGroupId: string;
                /**
                 * 作业id
                 * @example `f102a853-5f5a-47fb-8869-b31ea74a9620`
                 */
                JobId: string;
                /**
                 * 对话摘要类别
                 * @example `{}`
                 */
                Category: string;
                /**
                 * 任务id
                 * @example `b0f35dd1-0337-402e-9c4f-3a6c2426950a`
                 */
                TaskId: string;
                /**
                 * 对话摘要内容
                 * @example `5`
                 */
                Content: string;
                /**
                 * 对话文本id
                 * @example `62a860f5-a8b3-4b75-9512-c7e04bb7c8bc`
                 */
                ConversationDetailId: string;
                /**
                 * 摘要id
                 * @example `680f1905-81ae-4aab-99dd-2964dfb767fa`
                 */
                SummaryId: string;
            }[];
            CallingNumbers: string[];
        }[];
    };
}
