export interface FindVersionMessageSendRecordsResponse {
    /**
     * 查询到的消息发送记录
     */
    MessageSendRecordList: {
        /**
         * 发送记录列表详情
         */
        Items: {
            /**
             * 创建时间戳
             * @example `1645460000`
             */
            GmtCreateTimestamp: number;
            /**
             *  消息类型，取值：
             *
             * - **SYSTEM_UPDATE**：系统版本发布消息推送
             * -  **APP_VERSION_UPDATE**：应用自升级发布消息推送
             * @example `SYSTEM_UPDATE`
             */
            MessageType: string;
            /**
             * 失败消息数
             * @example `0`
             */
            FailedCount: string;
            /**
             * 跳过消息数
             * @example `0`
             */
            SkippedCount: string;
            /**
             * 消息发送结果
             * @example `SUCCESS`
             */
            Result: string;
            /**
             * 成功消息数
             * @example `100`
             */
            SucceededCount: string;
            /**
             * 创建时间
             * @example `2018-01-01 00:00:00`
             */
            GmtCreate: string;
            /**
             * 版本ID
             * @example `1`
             */
            VersionId: string;
            /**
             * 消息发送结果描述
             * @example `发送成功`
             */
            ResultDesc: string;
            /**
             * 目标ID
             * @example `1`
             */
            TargetId: string;
            /**
             * ID
             * @example `1`
             */
            Id: number;
        }[];
        /**
         * 符合条件的记录总数
         * @example `30`
         */
        TotalCount: number;
    };
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
}
