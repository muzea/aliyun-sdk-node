export interface FindVersionMessagesResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 查询到的消息结果
     */
    MessageList: {
        /**
         * 结果列表
         */
        Items: {
            /**
             * 修改时间戳
             * @example `18974500000`
             */
            GmtModifyTimestamp: number;
            /**
             * 创建时间戳
             * @example `18974500000`
             */
            GmtCreateTimestamp: number;
            /**
             * 发送状态
             * @example `SUCCESS`
             */
            Status: string;
            /**
             * 修改时间
             * @example `2018-01-01 00:01:00`
             */
            GmtModify: string;
            /**
             * 发送的消息ID
             * @example `1`
             */
            MessageId: string;
            /**
             * 云设备ID
             * @example `b8fe2e24ff2b48e0a3aa4e49809fc1b3`
             */
            DeviceId: string;
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
             * 发送状态描述
             * @example `发送成功`
             */
            StatusDesc: string;
            /**
             * 测试ID
             * @example `1`
             */
            TestId: string;
            /**
             * ID
             * @example `1`
             */
            Id: number;
        }[];
        /**
         * 符合条件的记录总数
         * @example `5`
         */
        TotalCount: number;
    };
}
