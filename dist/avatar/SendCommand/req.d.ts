export interface SendCommandRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId。
     * @example `76898bd3b90b4a65b1c078d8824a2e9c
    `
     */
    "TenantId": number;
    /**
     * 会话 SessionID。通过“启动一个数字人”API的返回值获取。
     * @example `5615`
     */
    "SessionId": string;
    /**
     * 指令code：
     * - INTERRUPT ：打断当前数字人播报，让数字人停止说话，Content无需传内容
     * - CHANGE_BACKGROUND ：切换背景，Content需传背景图片URL，具体参数见Content字段定义
     * @example `INTERRUPT`
     */
    "Code": string;
    /**
     * 指令内容，map类型，不同的指令需要不同的参数内容，部分指令不需要指令内容的可以不传改参数。
     * <details>
     * <summary>CHANGE_BACKGROUND</summary>
     * {
     *     "backGroundImageUrl":"http://xxxxx.png"
     * }
     * </details>
     * @example `{}`
     */
    "Content"?: any;
    /**
     * 消息请求唯一code，最大支持64位，需要保持唯一，可使用UUID。
     * @example `0000001000586737
    `
     */
    "UniqueCode": string;
    /**
     * 是否需要在数字人进行执行该条消息的时候进行回调通知，默认值false，具体可参考：[数字人回调事件通知](https://help.aliyun.com/document_detail/2261152.html?spm=openapi-amp.newDocPublishment.0.0.37e9281fRBn9wz)。
     * ><notice>当前INTERRUPT指令暂不支持事件回调></notice>
     * @example `false`
     */
    "Feedback"?: boolean;
}
