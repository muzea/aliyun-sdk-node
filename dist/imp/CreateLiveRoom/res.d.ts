export interface CreateLiveRoomResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 创建直播返回的结果。
     */
    Result: {
        /**
         * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
         * @example `7m***q`
         */
        AppId: string;
        /**
         * 房间的唯一标识ID。用于进出房间等相关接口的使用。
         * @example `AE35-****-T95F`
         */
        RoomId: string;
        /**
         * 直播的唯一标识ID。
         * @example `b7f2****ebb3`
         */
        LiveId: string;
        /**
         * 弹幕的唯一标识。用户发送消息等相关接口的使用。
         * @example `09***f8`
         */
        ChatId: string;
        /**
         * 直播标题。
         * @example `Title001`
         */
        Title: string;
        /**
         * 直播公告。
         * @example `Notice001`
         */
        Notice: string;
        /**
         * 直播封面。
         * @example `http://***.png`
         */
        CoverUrl: string;
        /**
         * 主播ID。
         * @example `as****hs`
         */
        AnchorId: string;
        /**
         * 直播回放地址。直播开始时生成，直播结束后可以观看。
         * @example `http://demo-app-playback.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3.m3u8?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
         */
        PlaybackUrl: string;
        /**
         * 直播推流地址。
         * @example `rtmp://demo-app-push.com/live/e620****a8e3?auth_key=e620****a8e3`
         */
        PushUrl: string;
        /**
         * 直播播流地址。
         * @example `http://demo-app-live.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3.flv?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
         */
        LiveUrl: string;
        /**
         * 活跃插件列表。
         */
        PluginInstanceInfoList: {
            /**
             * 插件唯一标识，取值：
             * - **live**：直播。
             * - **wb**：白板。
             * - **chat**：聊天。
             * - **rtc**：音视频通信。
             * @example `live`
             */
            PluginType: string;
            /**
             * 插件实例唯一标识。
             * @example `HASU-****-ASHD`
             */
            PluginId: string;
            /**
             * 插件实例创建时间戳，单位：毫秒。
             * @example `1624589848000`
             */
            CreateTime: number;
            /**
             * 插件拓展字段。
             */
            Extension: any;
        }[];
        /**
         * 直播拓展字段。
         */
        Extension: any;
        /**
         * 主播昵称。
         * @example `User001`
         */
        AnchorNick: string;
        /**
         * 原画HLS播放地址。
         * @example `http://demo-app-live.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3.m3u8?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
         */
        HlsUrl: string;
        /**
         * RTS低延迟播流信息。
         */
        ArtcInfo: {
            /**
             * RTS原码流地址，推荐移动端使用。
             * @example `artc://demo-app-live.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
             */
            ArtcUrl: string;
            /**
             * RTS转码流地址，推荐Web端使用。
             * @example `artc://demo-app-live.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3_origin-RTS?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
             */
            ArtcH5Url: string;
        };
    };
}
