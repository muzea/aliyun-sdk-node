export interface DescribeLiveDomainOnlineUserNumResponse {
    /**
     * 请求ID。
     * @example `3A3A8C3D-F8B2-4FBF-9319-771A11B855FA`
     */
    RequestId: string;
    /**
     * 查询时间下域名的所有在线人数。
     * @example `1`
     */
    UserCount: number;
    /**
     * 流数。
     * @example `1`
     */
    StreamCount: number;
    OnlineUserInfo: {
        /**
         * 流的信息。
         */
        LiveStreamOnlineUserNumInfo: {
            /**
             * 流名称。
             * @example `rtmp://example.com/test/liveStream****_3_1`
             */
            StreamName: string;
            Infos: {
                /**
                 * 流统计信息。
                 */
                Info: {
                    /**
                     * 转码流或原始流的人数
                     * @example `1`
                     */
                    UserNumber: number;
                    /**
                     * 转码模板。origin为原始流。
                     * @example `origin`
                     */
                    TranscodeTemplate: string;
                }[];
            };
        }[];
    };
}
