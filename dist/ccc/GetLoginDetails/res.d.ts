export interface GetLoginDetailsResponse {
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
     * @example `F1A4774A-F28B-5C40-AEF6-D88D2DD6C7E4`
     */
    RequestId: string;
    /**
     * 响应参数
     */
    Params: string[];
    /**
     * 登录信息数据。
     */
    Data: {
        /**
         * 坐席展示名。
         * @example `坐席小王`
         */
        DisplayName: string;
        /**
         * 坐席分机号。
         * @example `8001****`
         */
        Extension: string;
        /**
         * 签名信息，使用非对称加密算法生成，注册SIP服务器时需要使用该信息进行鉴权。
         * @example `zi31STIMtIfa/UN2l+6lww****`
         */
        Signature: string;
        /**
         * SIP注册服务器地址，坐席需要以SIP用户的身份注册到服务器上才能进行话务操作。
         * @example `sh-sip-ccc.aliyuncs.com:443`
         */
        SipServerUrl: string;
        /**
         * 如果座席注册了SIP话机，则此参数是SIP话机设备的设备ID，否则为空。
         * @example `Yealink SIP-T23G 44.84.XX.XX`
         */
        DeviceId: string;
        /**
         * 坐席数据推送服务器地址，连接成功后，服务器会推送坐席状态数据到坐席工作台。
         * @example `sh-wss-ccc.aliyuncs.com`
         */
        AgentServerUrl: string;
        /**
         * 坐席ID。
         * @example `agent@ccc-test`
         */
        UserId: string;
        /**
         * 签名数据，用于生成签名信息，由于该签名机制不支持中文，所以目前都使用UserKey2进行签名。
         * @example `坐席@aliyun:802001:1656406628862`
         */
        UserKey: string;
        /**
         * 工作模式。
         * @example `ON_SITE`
         */
        WorkMode: string;
        /**
         * 签名数据，用于生成签名信息，由于UserKey不支持中文签名，因此新增了UserKey2。
         * @example `802001:1656406628862"`
         */
        UserKey2: string;
        /**
         * 签名信息，使用非对称加密算法生成，注册SIP服务器时需要使用该信息进行鉴权。
         * @example `zi31STIMtIfa/UN2l+6lww****`
         */
        Signature2: string;
        /**
         * SIP设备分机号，使用SIP话机时需要用到该字段。
         * @example `8033****`
         */
        DeviceExt: string;
        /**
         * SIP设备状态。
         * @example `OFFLINE`
         */
        DeviceState: string;
        /**
         * Chat会话设备ID。
         * @example `A-8000100x`
         */
        ChatUserId: string;
        /**
         * Chat设备ID。
         * @example `4c51c9116c36537cb850dc1081d745df`
         */
        ChatDeviceId: string;
        /**
         * Chat会话登录令牌。
         * @example `{"accessToken":"oauth_cloud_key:4xxx0=","accessTokenExpiredTime":864xxxx,"refreshToken":"oauth_cloud_key:Paxxxx=="}`
         */
        ChatLoginToken: string;
        /**
         * Chat会话应用ID。
         * @example `7pjxxx`
         */
        ChatAppId: string;
        /**
         * Chat会话应用密钥。
         * @example `955e4bd7xxxxxxxxxxxxxd7898ba9fa0d0`
         */
        ChatAppKey: string;
        /**
         * Chat会话服务器地址。
         * @example `wss://wss.im.dingtalk.cn`
         */
        ChatServerUrl: string;
        /**
         * 坐席昵称
         * @example `老王`
         */
        Nickname: string;
        /**
         * 坐席头像地址。
         * @example `http://abc.com/sam.jpb`
         */
        AvatarUrl: string;
    };
}
