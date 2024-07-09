export interface StartPlaylistResponse {
    /**
     * 节目单ID。可作为停止节目单的请求参数。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    ProgramId: string;
    /**
     * 请求ID。
     * @example `5c6a2a0d-f228-4a64-af62-20e91b96****`
     */
    RequestId: string;
    /**
     * 返回的流信息。
     */
    StreamInfo: {
        /**
         * 应用名称。
         * @example `liveApp****`
         */
        AppName: string;
        /**
         * 主播流域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 播流名称。
         * @example `liveStream****`
         */
        StreamName: string;
        Streams: {
            /**
             * 流信息列表。
             */
            Stream: {
                /**
                 * FLV播流地址。
                 * @example `http://aliyundoc.com/caster/liveStream****.flv?auth_key=1612772224-0-0-3632be7cd9907169e8b09e91099c****`
                 */
                PullFlvUrl: string;
                /**
                 * RTMP播流地址。
                 * @example `rtmp:///aliyundoc.com/caster/liveStream****?auth_key=1612772224-0-0-4404ca59c0246226d49d01f734b1****`
                 */
                PullM3U8Url: string;
                /**
                 * m3u8播流地址。
                 * @example `http://aliyundoc.com/caster/liveStream****.m3u8?auth_key=1612772224-0-0-919a023a127156fe82e3562c3b3b****`
                 */
                PullRtmpUrl: string;
                /**
                 * 画质。取值：
                 * **original**：原画。
                 * @example `original`
                 */
                Quality: string;
            }[];
        };
    };
}
