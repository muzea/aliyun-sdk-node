export interface DescribeAssistRTMPServerAddressResponse {
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * RTMP服务器地址
     * @example `ra-service-qa.aicc.aliyun.com`
     */
    RTMPServer: string;
    /**
     * 一次性验证码
     * @example `ewga5dxHOB8Lm9VH`
     */
    OTP: string;
}
