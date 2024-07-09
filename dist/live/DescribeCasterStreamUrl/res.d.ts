export interface DescribeCasterStreamUrlResponse {
    /**
     * 导播台ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    CasterId: string;
    CasterStreams: {
        /**
         * 导播台流信息列表。
         */
        CasterStream: {
            /**
             * 是否正式输出。
             *
             * - **0**：输出预览。
             * - **1**：输出正式。
             * @example `1`
             */
            OutputType: number;
            /**
             * Rtmp地址。
             * @example `rtmp://live/caster/example.edu`
             */
            RtmpUrl: string;
            /**
             * 场景ID。
             * @example `23ca74e0-aca3-4e7a-8561-9d96f525****`
             */
            SceneId: string;
            StreamInfos: {
                /**
                 * 播放地址列表。
                 */
                StreamInfo: {
                    /**
                     * 播放地址。
                     * @example `http://out/caster/example.net`
                     */
                    OutputStreamUrl: string;
                    /**
                     * 转码配置。 取值：
                     *
                     * - **lsd**：标清 。
                     * - **lld**：流畅。
                     * - **lud**：超清 。
                     * - **lhd**：高清 。
                     *
                     * @example `lld`
                     */
                    TranscodeConfig: string;
                    /**
                     * 格式。取值：
                     * - **flv**。
                     * - **rtmp**。
                     * - **m3u8**。
                     * - **artc**
                     * > 此导播台的播流域名需开通超低延时功能才可返回artc协议的地址。具体开启方法详见[开通超低延时直播功能](~~427722~~)。
                     * @example `flv`
                     */
                    VideoFormat: string;
                }[];
            };
            /**
             * 输出流地址。
             * @example `http://live/caster/example.org`
             */
            StreamUrl: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 数量。
     * @example `1`
     */
    Total: number;
}
