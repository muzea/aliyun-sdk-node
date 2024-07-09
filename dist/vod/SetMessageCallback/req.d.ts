export interface SetMessageCallbackRequest {
    /**
     * 回调方式，取值：
     * - **HTTP**
     * - **MNS**
     * @example `HTTP`
     */
    "CallbackType"?: string;
    /**
     * 回调地址。回调方式为**HTTP**时，需设置此参数。
     * 回调地址URL的长度不能超过256个字节，不支持设置多个回调地址。
     * @example `http://developer.aliyundoc.com`
     */
    "CallbackURL"?: string;
    /**
     * 回调事件类型，取值为空时关闭所有消息通知，取值为**ALL**时开启全部消息通知。也可指定开启某些消息通知，多个事件类型之间使用半角逗号（,）分隔。可设置的事件类型取值范围请参见：[事件类型](~~55627~~)。
     * <props="china">
     * > 所有AI相关事件即AIMediaAuditComplete、AIMediaDNAComplete等取值都为**AIComplete**。</props>
     * @example `FileUploadComplete`
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
     * @example `dsf346dvet`
     */
    "AuthKey"?: string;
    /**
     * 消息队列公网Endpoint，回调方式为**MNS**时，需设置此参数。可登录[消息服务控制台](https://account.aliyun.com/login/login.html)，单击右上角的**获取Endpoint**按钮获取。更多信息，请参见[Endpoint](~~27480~~)。
     * @example `http://****.mns.cn-shanghai.aliyuncs.com/`
     */
    "MnsEndpoint"?: string;
    /**
     * 消息队列名称，可登录[消息服务控制台](https://account.aliyun.com/login/login.html)，在**队列列表**中查看。回调方式为**MNS**时，需设置此参数。
     * @example `quene_name`
     */
    "MnsQueueName"?: string;
    /**
     * 应用ID。不传时为系统默认应用的ID，取固定值：**app-1000000**。
     * @example `app-1000000`
     */
    "AppId"?: string;
}
