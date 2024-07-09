export interface UpdateWorkbenchEventResultRequest {
    /**
     * 订阅OpenEvent后接收到扩展事件的messageId
     * @example `03400b03-b721-4c34-8727-2d6884077091`
     */
    "MessageId": string;
    /**
     * 扩展程序的编码
     * @example `58e95e2acd6f408e8707f1bf2591f9e9`
     */
    "ExtensionCode": string;
    /**
     * 回调结果，OK代表检查成功，FAIL代表检查失败
     * @example `FAIL`
     */
    "CheckResult": string;
    /**
     * 检查失败的原因
     * @example `SQL过长`
     */
    "CheckResultTip"?: string;
}
