export interface GetLiveResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 查询直播详情的返回结果。
     */
    Result: {
        /**
         * 主播ID。
         * @example `as****hs`
         */
        AnchorId: string;
        /**
         * 直播资源的唯一标识ID。
         * @example `b7f2****ebb3`
         */
        LiveId: string;
        /**
         * 直播标题。
         * @example `This is a title.`
         */
        Title: string;
        /**
         * 直播回放地址。直播开始时生成，直播结束后可以观看。
         * @example `http://demo-app-playback.com/live/b7f2****ebb3.m3u8?auth_key=e620****a8e3`
         */
        PlaybackUrl: string;
        /**
         * 直播创建时间，单位：毫秒。直播开始后生成。
         * @example `1624259500000`
         */
        CreateTime: number;
        /**
         * 直播结束时间，单位：毫秒。直播结束后生成。
         * @example `1624259500000`
         */
        EndTime: number;
        /**
         * 直播持续时间，单位：毫秒。直播结束后生成。
         * @example `10000`
         */
        Duration: number;
        /**
         * 直播推流地址。
         * @example `rtmp://demo-app-push.com/live/e620****a8e3?auth_key=e620****a8e3`
         */
        PushUrl: string;
        /**
         * 直播拉流地址。
         * @example `http://demo-app-live.com/live/e620****a8e3.flv?auth_key=e620****a8e3`
         */
        LiveUrl: string;
        /**
         * 直播状态。取值：
         * * **Created**：已创建，未开始直播。
         * * **Living**：直播中。
         * * **End**：直播结束。
         * @example `Created`
         */
        Status: string;
        /**
         * 直播简介。
         * @example `This is an introduction.`
         */
        Introduction: string;
        /**
         * 房间ID。
         * @example `AE35-****-T95F`
         */
        RoomId: string;
        /**
         * 租户名。
         * @example `7m***q`
         */
        AppId: string;
        /**
         * 创建直播用户。
         * @example `as****hs`
         */
        UserId: string;
        /**
         * 直播推流码率。取值：
         * * **-1**：流畅，分辨率：宽度自适应，高度：360；编码格式：H.264。
         * * **1**：标清，分辨率：宽度自适应，高度：432；编码格式：H.264。
         * * **2**：高清，分辨率：宽度自适应，高度：648；编码格式：H.264。
         * * **3**：超清，分辨率：宽度自适应，高度：1080；编码格式：H.264。
         * @example `1`
         */
        CodeLevel: number;
        /**
         * 多分辨率多协议播放信息。
         */
        PlayUrlInfoList: {
            /**
             * 直播推流码率。取值：
             * * **-1**：流畅，分辨率：宽度自适应，高度：360；编码格式：H.264。
             * * **1**：标清，分辨率：宽度自适应，高度：432；编码格式：H.264。
             * * **2**：高清，分辨率：宽度自适应，高度：648；编码格式：H.264。
             * * **3**：超清，分辨率：宽度自适应，高度：1080；编码格式：H.264。
             * @example `1`
             */
            CodeLevel: number;
            /**
             * FLV拉流地址。
             * @example `http://demo-app-live.com/live/b7f2****ebb3.flv?auth_key=e620****a8e3`
             */
            FlvUrl: string;
            /**
             * HLS拉流地址。
             * @example `http://demo-app-live.com/live/b7f2****ebb3.m3u8?auth_key=e620****a8e3`
             */
            HlsUrl: string;
            /**
             * RTMP拉流地址。
             * @example `rtmp://demo-app-live.com/live/b7f2****ebb3?auth_key=e620****a8e3`
             */
            RtmpUrl: string;
        }[];
        /**
         * 封面图片。
         * @example `http://demo-app-live.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3.png`
         */
        CoverUrl: string;
        /**
         * 用户自定义数据存储。
         * @example `{"selfData":"example"}`
         */
        UserDefineField: string;
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
             * RTS转码流地址，推荐web端使用。
             * @example `artc://demo-app-live.com/live/b7f29c02-****-40fd-****-e8d06a8aebb3_origin-RTS?auth_key=1627522726-0-0-******e620b363d4cf8a8e3`
             */
            ArtcH5Url: string;
        };
    };
}
