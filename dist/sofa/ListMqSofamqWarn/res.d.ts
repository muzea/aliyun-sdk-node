export interface ListMqSofamqWarnResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 查询到的告警规则集合
     */
    Data: {
        /**
         * 页码
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示条数
         * @example `20`
         */
        PageSize: number;
        /**
         * 总条数
         * @example `100`
         */
        Total: number;
        /**
         * 报警规则信息
         */
        Content: {
            /**
             * 报警级别
             * @example `5`
             */
            WarnLevel: number;
            /**
             * 报警频率，单位分钟
             * @example `10`
             */
            Frequency: number;
            /**
             * 联系人列表
             * @example `[["DingTalk", "机器人令牌", "组名"], ["DingTalk", "机器人令牌2", "组名2"]]`
             */
            Contacts: string;
            /**
             * 属性字符串
             * @example `""`
             */
            Attribute: string;
            /**
             * 报警类型
             * @example `1`
             */
            WarnType: number;
            /**
             * 实例 ID
             * @example `SOFAMQ_INSTANCE_000001`
             */
            InstanceId: string;
            /**
             * 修改时间
             * @example `1570701259403`
             */
            GmtModified: number;
            /**
             * 消费组 ID
             * @example `GID_TEST`
             */
            GroupId: string;
            /**
             * 报警时间段
             * @example `00:00-23:59`
             */
            AlertTime: string;
            /**
             * 延迟时间，单位分钟
             * @example `5`
             */
            DelayTime: number;
            /**
             * 报警的 Topic
             * @example `TP_TEST`
             */
            Topic: string;
            /**
             * 创建时间
             * @example `1570701259403`
             */
            GmtCreate: number;
            /**
             * 报警状态
             * @example `1`
             */
            WarnStatus: number;
            /**
             * 消息阻塞时间
             * @example `10`
             */
            BlockTime: number;
            /**
             * 操作者
             * @example `alipay`
             */
            Operator: string;
            /**
             * 阈值
             * @example `3000`
             */
            Threshold: number;
            /**
             * 报警 ID
             * @example `1`
             */
            Id: number;
        }[];
    };
}
