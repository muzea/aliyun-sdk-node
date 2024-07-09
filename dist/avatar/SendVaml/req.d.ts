export interface SendVamlRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `5615`
     */
    "TenantId": number;
    /**
     * 会话 SessionID。通过“启动一个数字人”API的返回值获取。
     * @example `76898bd3b90b4a65b1c078d8824a2e9c
    `
     */
    "SessionId": string;
    /**
     * VAML协议请求，具体参考[官方文档](https://help.aliyun.com/document_detail/444010.html?spm=openapi-amp.newDocPublishment.0.0.37e9281fRBn9wz)。
     * @example `参考文档
    `
     */
    "Vaml": string;
}
