export interface DescribeAssistWSServerAddressResponse {
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * WebSocket服务地址
     * @example `ws://ra-service-qa.aicc.aliyun.com:7001`
     */
    WsServer: string;
    /**
     * 一次性验证码
     * @example `ewga5dxHOB8Lm9VH`
     */
    OTP: string;
}
