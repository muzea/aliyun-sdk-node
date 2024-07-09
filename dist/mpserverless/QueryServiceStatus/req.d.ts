export interface QueryServiceStatusRequest {
    /**
     * 服务空间ID。
     * @example `226e5213-697c-4a52-b4ff-xxxxx`
     */
    "SpaceId": string;
    /**
     * Serverless产品。产品种类为云函数、云存储、静态网站托管。可选值为CLOUD_FUNCTION、CLOUD_STORAGE、WEB_HOSTING
     * @example `CLOUD_FUNCTION`
     */
    "ServiceName": string;
}
