export interface QueryRunningInstanceResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7
    `
     */
    RequestId: string;
    /**
     * 返回结果码
     * @example `0`
     */
    Code: string;
    /**
     * 返回信息
     * @example `operation success.`
     */
    Message: string;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 会话ID
         * @example `4f63f9e9788449f9adc88d9438c8dec3`
         */
        SessionId: string;
        /**
         * 频道信息（同“启动一个数字人(StartInstance)”API返回的Channel信息）
         */
        Channel: {
            /**
             * 频道ID
             * @example `108293819`
             */
            ChannelId: string;
            /**
             * 令牌码。
             * @example `e59f61b2482b4d0562ab542da3f824f7`
             */
            Token: string;
            /**
             * 通道类型
             * @example `6`
             */
            Type: string;
            /**
             * 通道到期时间
             * @example `2022-01-04T16:00Z`
             */
            ExpiredTime: string;
            /**
             * 服务器生成的随机字符串。
             * @example `CK-9b5c335b9ae75879441ee7b363886418`
             */
            Nonce: string;
            /**
             * 音视频RTC生成的UserId
             * @example `userId`
             */
            UserId: string;
            /**
             * 用于RTC的应用id
             * @example `ONEX7E28C7C221854`
             */
            AppId: string;
            /**
             * 公有云音视频RTC需要的信息
             * @example `公有云音视频RTC需要的信息`
             */
            UserInfoInChannel: string;
            /**
             * 通道设置。
             */
            Gslb: string[];
        };
        /**
         * “启动一个数字人(StartInstance)”API传入的User信息，此处会将对应User返回
         */
        User: {
            /**
             * 用户身份ID（启动一个数字人API传入的User.UserId）
             * @example `23423`
             */
            UserId: string;
            /**
             * 用户名（启动一个数字人API传入的User.UserName）
             * @example `测试用户`
             */
            UserName: string;
        };
        /**
         * 互动数字人对接需要的鉴权token ,具体可参考互动数字人接入文档
         * @example `879441ee7b363886418`
         */
        Token: string;
    }[];
    /**
     * 调用是否成功。
     * @example `True`
     */
    Success: boolean;
}
