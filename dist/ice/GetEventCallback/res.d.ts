export interface GetEventCallbackResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 回调方式，取值：
     * - **HTTP**
     * - **MNS**
     * @example `HTTP`
     */
    CallbackType: string;
    /**
     * 回调MNS队列名称。
     * @example `ice-callback-queue`
     */
    CallbackQueueName: string;
    /**
     * 事件通知回调地址。
     * @example `http://xxx.yyy/callback`
     */
    CallbackURL: string;
    /**
     * 回调事件类型，多值以逗号分隔。事件类型参考 [事件通知内容](https://help.aliyun.com/document_detail/441362.html) 。
     * @example `ProduceMediaComplete,TranscodeComplete`
     */
    EventTypeList: string;
    /**
     * HTTP回调的鉴权开关，回调方式设置为**HTTP**时，此参数有效。取值：
     * - **on**（启用）
     * - **off**（不启用）
     * @example `on`
     */
    AuthSwitch: string;
    /**
     * 回调方式选择HTTP时，鉴权Key。
     * @example `TestKey001`
     */
    AuthKey: string;
}
