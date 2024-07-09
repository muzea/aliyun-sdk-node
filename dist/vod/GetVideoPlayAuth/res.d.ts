export interface GetVideoPlayAuthResponse {
    /**
     * 音/视频播放凭证。
     * @example `sstyYuew6789000000xtt7TYUh****`
     */
    PlayAuth: string;
    /**
     * 请求ID。
     * @example `E4EBD2BF-5EB0-4476-8829-9D94E1B1****`
     */
    RequestId: string;
    /**
     * 音/视频Meta信息。
     */
    VideoMeta: {
        /**
         * 音/视频状态。各取值及描述，请参见[Status：音视频状态](~~52839#title-vqg-8cz-7p8~~)。
         * @example `Normal`
         */
        Status: string;
        /**
         * 音/视频时长。单位：秒。
         * @example `120.0`
         */
        Duration: number;
        /**
         * 音/视频标题。
         * @example `阿里云VOD`
         */
        Title: string;
        /**
         * 音/视频ID。
         * @example `dfde02284a5c46622a097adaf44a****`
         */
        VideoId: string;
        /**
         * 音/视频封面地址。
         * @example `https://example.aliyundoc.com/****.jpg`
         */
        CoverURL: string;
    };
}
