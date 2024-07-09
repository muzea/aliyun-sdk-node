export interface SendTextRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId。
     * @example `76898bd3b90b4a65b1c078d8824a2e9c`
     */
    "TenantId": number;
    /**
     * 会话 SessionID。通过“启动一个数字人”API的返回值获取。
     * @example `5615`
     */
    "SessionId": string;
    /**
     * 播报文本的内容，目前支持纯文本和阿里云智能语音合成的SSML标记语言（SSML使用方案请参考[官方文档](https://help.aliyun.com/document_detail/462017.html?spm=openapi-amp.newDocPublishment.0.0.37e9281fRBn9wz)），最大文本长度1000字（不包含标签）。
     * @example `纯文本：这是一段示例播报纯文本
    SSML：SSML使用请参考官方文档
    `
     */
    "Text": string;
    /**
     * 本次播报请求是否打断当前正在播报的内容，默认值为true。
     * @example `true`
     */
    "Interrupt"?: boolean;
    /**
     * 播报请求唯一code，最大支持64位，需要保持唯一，可使用UUID。
     * @example `0000001000586737`
     */
    "UniqueCode": string;
    /**
     * 是否需要在数字人进行播报该条消息的时候进行回调通知，默认值false，具体可参考：[数字人回调事件通知](https://help.aliyun.com/document_detail/2261152.html?spm=openapi-amp.newDocPublishment.0.0.37e9281fRBn9wz)。
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
         * 1. start - 第一个开始片段
         * 2. mid - 中间的片段
         * 3. end - 最后一个结束片段
         * @example `start`
         */
        Position: string;
    };
}
