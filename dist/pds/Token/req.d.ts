export interface TokenRequest {
    "domain_id": string;
    /**
     * 授权类型，有以下取值：
     * authorization\_code （通过认证完成后获取的code来换取token）
     * refresh\_token（通过上次授权获取的refresh_token来获取token）
     * urn:ietf:params:oauth:grant-type:jwt-bearer（通过JWT方式获取token）
     * @example `refresh_token`
     */
    "grant_type": string;
    /**
     * 认证完成后回调地址中携带的code，当grant\_type为authorization\_code时，此参数必传
     * @example `0045157fa8e24f4f9a0d9e3ff158c1e0`
     */
    "code"?: string;
    /**
     * 填写发起authorize时传入的redirect\_uri，当grant\_type为authorization\_code时必填
     * @example `https://aliyun.com/pds
    `
     */
    "redirect_uri"?: string;
    /**
     * 在阿里云PDS控制台申请的App对应的ID
     * @example `1Zu***flH`
     */
    "client_id": string;
    /**
     * 在阿里云PDS控制台申请的App对应的Secret，WebServer类型的App必填此参数
     * @example `80D***3i5
    `
     */
    "client_secret"?: string;
    /**
     * 用于刷新Token的令牌，当grant\_type为refresh\_token时此参数必传
     * @example `399623e13353490391266c7d48a13ed1`
     */
    "refresh_token"?: string;
    /**
     * 通过JWT私钥签名的字符串，里面包含待授权的用户信息和授权参数，结构参考JWTPayload。当grant_type为urn:ietf:params:oauth:grant-type:jwt-bearer时此参数必填。
     * @example `ey***asd
    `
     */
    "assertion"?: string;
}
