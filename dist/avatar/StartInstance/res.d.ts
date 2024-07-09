export interface StartInstanceResponse {
    /**
     * 返回结果码
     * @example `0`
     */
    Code: string;
    /**
     * 返回信息
     * @example `错误信息示例`
     */
    Message: string;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 请求ID
         * @example `4C467B38-3910-447D-87BC-AC049166F216`
         */
        RequestId: string;
        /**
         * 会话ID。标识这一路数字人实例的唯一id，后续发送播报文本、停止数字人实例都需要传入该ID，如果丢失可以通过“查询运行中的数字人实例”API进行查询。
         * @example `4f63f9e9788449f9adc88d9438c8dec3`
         */
        SessionId: string;
        /**
         * 频道信息，目前返回互动和播报数字人平台默认视频流AliRTC渠道的频道信息，用于进行客户端拉流使用；
         * 针对互动和推流数字人使用了三方推流通道的不会返回对应信息， 如RTMP推流。
         */
        Channel: {
            /**
             * 频道ID
             * @example `108293819`
             */
            ChannelId: string;
            /**
             * AliRTC令牌码。
             * @example `e59f61b2482b4d0562ab542da3f824f7`
             */
            Token: string;
            /**
             * 通道类型
             * @example `6`
             */
            Type: string;
            /**
             * AliRTC通道到期时间
             * @example `1677112265876`
             */
            ExpiredTime: string;
            /**
             * AliRTC服务器生成的随机字符串。
             * @example `CK-9b5c335b9ae75879441ee7b363886418`
             */
            Nonce: string;
            /**
             * AliRTC生成的UserId
             * @example `userId`
             */
            UserId: string;
            /**
             * AliRTC应用id
             * @example `ONEX7E28C7C221854`
             */
            AppId: string;
            /**
             * 公有云音视频RTC需要的信息
             * @example `公有云音视频RTC需要的信息`
             */
            UserInfoInChannel: string;
            /**
             * AliRTC通道地址
             */
            Gslb: string[];
        };
        /**
         * 互动数字人对接需要的鉴权token ,具体可参考互动数字人接入文档
         * @example `879441ee7b363886418`
         */
        Token: string;
    };
    /**
     * 调用是否成功。
     * @example `True`
     */
    Success: boolean;
}
