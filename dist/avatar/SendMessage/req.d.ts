export interface SendMessageRequest {
    /**
     * 会话 SessionID。通过“启动一个数字人”API的返回值获取。
     * @example `76898bd3b90b4a65b1c078d8824a2e9c`
     */
    "SessionId"?: string;
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `5615`
     */
    "TenantId"?: number;
    /**
     * 播报文本
     */
    "TextRequest"?: {
        /**
         * 命令类型
         * - START 表示开始播报一段文本
         * - HOLDING 表示暂停当前播报
         * - RESUME 表示恢复当前播报
         * @example `枚举值如下：
        START 表示开始播报一段文本
        HOLDING 表示暂停当前播报
        RESUME 表示恢复当前播报`
         */
        CommandType: string;
        /**
         * 播报文本的内容，目前支持纯文本和阿里云智能语音合成的SSML标记语言（SSML使用方案请参考[官方文档](https://help.aliyun.com/document_detail/462017.html)），最大文本长度1000字（不包含标签）
         * @example `纯文本：这是一段示例播报纯文本
        SSML：SSML使用请参考官方文档`
         */
        SpeechText: string;
        /**
         * 对应SpeechText文本的Id，最大支持64位，需要保持唯一，可使用UUID
         * @example `0000001000586737`
         */
        Id: string;
        /**
         * 播报时是否打断上一次播报内容，默认不打断
         * @example `false`
         */
        interrupt: boolean;
    };
    /**
     * VAML协议请求对象
     */
    "VAMLRequest"?: {
        /**
         * VAML请求类型：默认可以不填
         * @example `VAML_REQUEST`
         */
        Code: string;
        /**
         * VAML协议请求，具体参考[官方文档](https://help.aliyun.com/document_detail/444010.html)
         * @example `参考文档`
         */
        Vaml: string;
    };
    /**
     * 是否需要在数字人进行播报该条消息的时候进行回调通知，默认值false，具体可参考：[数字人回调事件通知](https://help.aliyun.com/document_detail/2261152.html)。
     * @example `false`
     */
    "Feedback"?: boolean;
    /**
     * 流式播报扩展对象，不是流式播报，不传该对象。用户需要自己切分文本片段（比如说按照标点符号切分），数字人按照提交文本顺序连续的进行播报
     */
    "StreamExtension"?: {
        /**
         * 是否流式播报
         * @example `true`
         */
        IsStream: boolean;
        /**
         * 流式播报第几片段
         * @example `0`
         */
        Index: number;
        /**
         * 片段位置
         * - start - 第一个开始片段
         * - mid   - 中间的片段
         * - end   - 最后一个结束片段
         * @example `start`
         */
        Position: string;
    };
}
