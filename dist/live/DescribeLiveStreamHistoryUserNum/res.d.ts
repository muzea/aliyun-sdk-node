export interface DescribeLiveStreamHistoryUserNumResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F5FF8`
     */
    RequestId: string;
    LiveStreamUserNumInfos: {
        /**
         * 直播流历史在线人数信息。
         */
        LiveStreamUserNumInfo: {
            /**
             * 当前时间点人数。
             * @example `1`
             */
            UserNum: string;
            /**
             * 流时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-10-20T06:20:00Z`
             */
            StreamTime: string;
        }[];
    };
}
