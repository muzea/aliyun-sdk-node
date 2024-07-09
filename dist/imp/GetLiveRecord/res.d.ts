export interface GetLiveRecordResponse {
    /**
     * Id of the request
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08F`
     */
    RequestId: string;
    /**
     * API请求的返回结果结构体。
     */
    Result: {
        /**
         * 回放地址集合。key值代表回放视频类型，取值m3u8, mp4, flv，当前仅提供m3u8类型。
         */
        PlaybackUrlMap: any;
    };
}
