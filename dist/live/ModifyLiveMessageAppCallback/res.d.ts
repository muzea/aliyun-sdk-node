export interface ModifyLiveMessageAppCallbackResponse {
    /**
     * 请求ID。
     * @example `1F0FFEAD-B7D5-1D4A-A6B9-8C63ADF6****`
     */
    RequestId: string;
    /**
     * 修改回调的互动消息应用ID。
     * @example `demo`
     */
    AppId: string;
    /**
     * 互动消息应用签名，互动消息服务SDK需要该信息。
     * @example `**************************************************************************`
     */
    AppSign: string;
    /**
     * 用户登录、登出、加入、离开群组等事件回调地址。若为空则不返回。
     * @example `http://example.aliyundoc.com/examplecallback`
     */
    EventCallbackUrl: string;
    /**
     * 事件回调是否需要鉴权。默认为true。
     * @example `true`
     */
    EventCallbackNeedAuthentication: boolean;
}
