export interface DescribeLiveStreamsOnlineListResponse {
    /**
     * 总页数。
     * @example `2`
     */
    TotalPage: number;
    /**
     * 分页的页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 每页显示的条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `5c6a2a0df228-4a64- af62-20e91b9676b3`
     */
    RequestId: string;
    /**
     * 符合条件的总个数。
     * @example `11`
     */
    TotalNum: number;
    OnlineInfo: {
        /**
         * 正在推送流的信息。
         */
        LiveStreamOnlineInfo: {
            /**
             * 直播流的音频码率。单位：Kbps。
             * @example `600`
             */
            AudioDataRate: number;
            /**
             * 帧率。单位：FPS。
             * @example `15`
             */
            FrameRate: number;
            /**
             * 推流完整URL地址。
             * @example `rtmp://demo.aliyundoc.com/live/test****`
             */
            PublishUrl: string;
            /**
             * 播流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 音频Codec ID。
             * @example `10`
             */
            AudioCodecId: number;
            /**
             * 视频分辨率高度。单位：pixel。
             * @example `720`
             */
            Height: number;
            /**
             * 直播流的视频码率。单位：Kbps。
             * @example `600`
             */
            VideoDataRate: number;
            /**
             * 主播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 推流域名，使用中心推流的可直接填写播流域名。
             * @example `demo.aliyundoc.com`
             */
            PublishDomain: string;
            /**
             * 开始推流时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2021-08-09T02:37:59Z`
             */
            PublishTime: string;
            /**
             * 播流所属应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 推流类型，取值：
             * - **edge**：边缘推流。
             * - **center**：中心推流。
             * @example `edge`
             */
            PublishType: string;
            /**
             * 视频Codec ID。
             * @example `7`
             */
            VideoCodecId: number;
            /**
             * 是否是转码流。取值：
             * - **yes**：是。
             * - **no**：否。
             * @example `no`
             */
            Transcoded: string;
            /**
             * 视频分辨率宽度。单位：pixel。
             * @example `1280`
             */
            Width: number;
            /**
             * 推流客户端IP。
             * @example `106.11.XX.XX`
             */
            ClientIp: string;
            /**
             * 推流节点IP。
             * @example `120.221.XX.XX`
             */
            ServerIp: string;
        }[];
    };
}
