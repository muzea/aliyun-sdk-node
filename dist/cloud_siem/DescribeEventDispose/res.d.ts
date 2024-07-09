export interface DescribeEventDisposeResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 事件状态。  取值：
         * - 0：未处理
         * - 1：处理中
         * - 5：处理失败
         * - 10：已处理
         * @example `0`
         */
        Status: number;
        /**
         * 事件备注。
         * @example `dealed`
         */
        Remark: string;
        /**
         * 事件处置配置 json对象。
         * @example `{ playbookName: "使用安全组封禁入方向IP", sophonTaskId: "400442a5-4f98-45ed-97db-5ab117eb0b8f", … }`
         */
        EventDispose: any[];
        /**
         * 告警接收人配置 json对象
         */
        ReceiverInfo: {
            /**
             * 事件处置结果接收人记录ID。
             * @example `123`
             */
            Id: number;
            /**
             * 创建时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * 事件全局唯一UUID。
             * @example `85ea4241-798f-4684-a876-65d4f0c3****`
             */
            IncidentUuid: string;
            /**
             * 消息title。
             * @example `siem event dealed message`
             */
            MessageTitle: string;
            /**
             * 接收人联系方式。
             * @example `138xxxxxx`
             */
            Receiver: string;
            /**
             * 联系方式渠道。 取值：
             * - message：短信
             * - mail：邮件
             * @example `message`
             */
            Channel: string;
            /**
             * 发送状态。取值：
             * - 0：未发送
             * - 1：已发送
             * @example `1`
             */
            Status: number;
        };
    };
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
