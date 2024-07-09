export interface DescribeRtcChannelMetricResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 详细信息。
     */
    ChannelMetricInfo: {
        /**
         * 频道用户信息。
         */
        ChannelMetric: {
            /**
             * 用户离开频道时间，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2019-06-06T18:57:00Z`
             */
            EndTime: string;
            /**
             * 用户加入频道时间，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2019-06-06T17:57:00Z`
             */
            StartTime: string;
            /**
             * 曾经进入频道并且成功订阅的用户数量。
             * @example `25`
             */
            SubUserCount: number;
            /**
             * 频道ID。
             * @example `example_channel`
             */
            ChannelId: string;
            /**
             * 曾经进入频道的用户数量。
             * @example `30`
             */
            UserCount: number;
            /**
             * 曾经进入频道并且成功发布的用户数量。
             * @example `10`
             */
            PubUserCount: number;
        };
        /**
         * 时长信息。
         */
        Duration: {
            /**
             * 发布时长信息。
             */
            PubDuration: {
                /**
                 * 高清视频时长，单位：分钟。
                 * @example `100`
                 */
                Video720: number;
                /**
                 * 标清视频时长，单位：分钟。
                 * @example `100`
                 */
                Video360: number;
                /**
                 * 屏幕分享时长，单位：分钟。
                 * @example `100`
                 */
                Content: number;
                /**
                 * 音频时长，单位：分钟。
                 * @example `100`
                 */
                Audio: number;
                /**
                 * 全高清视频时长，单位：分钟。
                 * @example `100`
                 */
                Video1080: number;
            };
            /**
             * 订阅时长信息。
             */
            SubDuration: {
                /**
                 * 高清视频时长，单位：分钟。
                 * @example `100`
                 */
                Video720: number;
                /**
                 * 标清视频时长，单位：分钟。
                 * @example `100`
                 */
                Video360: number;
                /**
                 * 屏幕分享时长，单位：分钟。
                 * @example `100`
                 */
                Content: number;
                /**
                 * 音频时长，单位：分钟。
                 * @example `100`
                 */
                Audio: number;
                /**
                 * 全高清视频时长，单位：分钟。
                 * @example `100`
                 */
                Video1080: number;
            };
        };
    };
}
