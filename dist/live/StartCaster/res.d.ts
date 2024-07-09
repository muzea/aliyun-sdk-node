export interface StartCasterResponse {
    PgmSceneInfos: {
        /**
         * PGM场景信息列表。
         */
        SceneInfo: {
            /**
             * 场景ID。
             * @example `b5f8c837-ceeb-424f-b30b-68e94e86****`
             */
            SceneId: string;
            StreamInfos: {
                /**
                 * 旁路输出播放地址列表。
                 */
                StreamInfo: {
                    /**
                     * 播放地址。
                     * @example `rtmp://abclive/caster/example.net`
                     */
                    OutputStreamUrl: string;
                    /**
                     * 转码配置。 取值：
                     *
                     * - **lsd**：标清。
                     * - **lld**：流畅。
                     * - **lud**：超清。
                     * - **lhd**：高清。
                     * @example `lld`
                     */
                    TranscodeConfig: string;
                    /**
                     * 格式。取值：
                     * - **flv**。
                     * - **rtmp**。
                     * - **m3u8**。
                     * @example `flv`
                     */
                    VideoFormat: string;
                }[];
            };
            /**
             * 导播台PGM场景对应播放流地址，非旁路输出流地址。
             * @example `rtmp://abclive/caster/example.edu`
             */
            StreamUrl: string;
        }[];
    };
    PvwSceneInfos: {
        /**
         * PVW场景信息列表。
         */
        SceneInfo: {
            /**
             * 场景ID。
             * @example `b5f8c837-ceeb-424f-b30b-68e94e86****`
             */
            SceneId: string;
            /**
             * 导播台PVW场景对应播放流地址，非旁路输出流地址。
             * @example `rtmp://abclive/caster/example.net`
             */
            StreamUrl: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `6EBD1AC4-C34D-4AE1-963E-B688A228BE31`
     */
    RequestId: string;
}
