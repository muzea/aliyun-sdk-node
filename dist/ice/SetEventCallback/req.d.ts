export interface SetEventCallbackRequest {
    /**
     * 回调方式，取值：
     * - **HTTP**
     * - **MNS**
     * @example `HTTP`
     */
    "CallbackType"?: string;
    /**
     * 所在区域的MNS队列名称，必须以 ice-callback- 开头
     * @example `ice-callback-queue`
     */
    "CallbackQueueName"?: string;
    /**
     * 回调地址。回调方式为**HTTP**时，需设置此参数。
     * 回调地址URL的长度不能超过256个字节，不支持设置多个回调地址。
     * @example `http://xxx.yyy/callback`
     */
    "CallbackURL"?: string;
    /**
     * 回调事件类型, 支持多值，以逗号分隔。
     * ProduceMediaComplete：剪辑合成作业完成
     * @example `ProduceMediaComplete`
     */
    "EventTypeList"?: string;
    /**
     * HTTP回调的鉴权开关，回调方式设置为**HTTP**时，此参数有效。取值：
     * - **on**（启用）
     * - **off**（不启用）
     * @example `on`
     */
    "AuthSwitch"?: string;
    /**
     * 鉴权Key，最长32位，必须同时包含大小写字母和数字。回调方式为**HTTP**时，可设置此参数。
     * @example `TestKey001`
     */
    "AuthKey"?: string;
}
