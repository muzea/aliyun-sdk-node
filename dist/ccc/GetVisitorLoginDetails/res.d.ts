export interface GetVisitorLoginDetailsResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `19D09CCC-F298-4124-849A-AFA217819011`
     */
    RequestId: string;
    /**
     * 参数信息。
     */
    Params: string[];
    /**
     * 返回数据。
     */
    Data: {
        /**
         * Chat会话登录令牌。
         * @example `{"accessToken":"oauth_cloud_key:+4oJXUAFSWxGD2YuRW4V/oUN0/8qJGNc0I*********n1E3DOr3Q3lX00ZnTpyqRi8Y6hYoLYA7n2ZkWuv485hVtXeSgnIQkKxXPbMgwoLxWaK//lI5Dn/mb4YuDifigv+ZyFzc+07vxm9ZFu/NjA==","accessTokenExpiredTime":86400000,"refreshToken":"oauth_cloud_key:/U+8UueDmpeUszhXC+SWow4pNLZp2C***********U/377BNXF+Mjo1lFgDk6GtEjNNoJpapX2mHH8GcRke2+yKQs/w4gAN9xSMn543Ciung+93pXV6IpQGbEVlu"}`
         */
        ChatLoginToken: string;
        /**
         * 访客的身份ID。
         * @example `dac9c001****a15684ea91a81317`
         */
        ChatUserId: string;
        /**
         * Chat设备ID。
         * @example `4c51c9116c36537cb850dc1081d745df`
         */
        ChatDeviceId: string;
        /**
         * Chat会话服务器地址。
         * @example `wss://wss.im.dingtalk.cn`
         */
        ChatServerUrl: string;
        /**
         * Chat会话应用密钥。
         * @example `955e4bd7xxxxxxxxxxxxxd7898ba9fa0d0`
         */
        ChatAppKey: string;
        /**
         * Chat会话应用ID。
         * @example `7pjxxx`
         */
        ChatAppId: string;
    };
}
