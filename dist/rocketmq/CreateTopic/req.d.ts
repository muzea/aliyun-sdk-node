export interface CreateTopicRequest {
    /**
     * 待创建主题所属的实例的ID。
     * @example `rmq-cn-7e22ody****`
     */
    "instanceId": string;
    /**
     * 待创建主题的名称，用于标识主题，全局唯一。
     * 取值规范如下：
     * - 字符限制：支持字母a\~z或A\~Z、数字0~9以及下划线（_）、短划线（-）。
     * - 长度限制：1~60个字符。
     * 保留字符限制，请参见[参数限制](~~440347~~)。
     * @example `topic_test`
     */
    "topicName": string;
    /**
     * 主题信息。
     */
    "body"?: {
        /**
         * 待创建主题的消息类型。
         * 参数取值如下：
         * - TRANSACTION：事务消息
         * - FIFO：顺序消息
         * - DELAY：定时/延时消息
         * - NORMAL：普通消息
         * ><notice>主题的类型和发送消息的类型必须一致。例如，您创建的主题的类型为顺序消息，则该主题只能用于收发顺序消息，不能收发其他类型的消息。></notice>
         * @example `NORMAL`
         */
        messageType: string;
        /**
         * 待创建主题的备注信息。
         * @example `This is the remark for test.`
         */
        remark: string;
    };
}
