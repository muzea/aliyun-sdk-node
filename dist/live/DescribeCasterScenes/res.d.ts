export interface DescribeCasterScenesResponse {
    /**
     * 请求ID。
     * @example `CF60DB6A-7FD6-426E-9288-122CC1A52FA7`
     */
    RequestId: string;
    SceneList: {
        /**
         * 场景信息列表。
         */
        Scene: {
            ComponentIds: {
                /**
                 * 组件id列表。
                 */
                componentId: string[];
            };
            /**
             * 布局ID。
             * @example `37cb2f8b-f152-4338-b928-6704f71d****`
             */
            LayoutId: string;
            /**
             * 是否正式输出。 取值：
             *
             * - **0**：输出预览场景。
             * - **1**：输出正式场景。
             * @example `0`
             */
            OutputType: string;
            /**
             * 场景ID。可作为更新场景音频配置、查询导播台场景音频配置、启动导播台场景和停止导播台场景的请求参数。
             * @example `b5f8c837-ceeb-424f-b30b-68e94e86****`
             */
            SceneId: string;
            /**
             * 场景名称。
             * @example `scene1`
             */
            SceneName: string;
            /**
             * 场景状态。 取值：
             *
             * - **0**：关闭。
             * - **1**：开启。
             * @example `0`
             */
            Status: number;
            StreamInfos: {
                /**
                 * 播放地址列表。
                 */
                StreamInfo: {
                    /**
                     * 播放地址。
                     * @example `http://live/caster/example.net`
                     */
                    OutputStreamUrl: string;
                    /**
                     * 转码配置。取值：
                     *
                     * - **sd**：标清。
                     * - **lld**：流畅。
                     * - **lud**：超清。
                     * - **lhd**：高清。
                     * @example `lld`
                     */
                    TranscodeConfig: string;
                    /**
                     * 格式。取值：
                     * - **flv**。
                     * - **mp4**。
                     * - **m3u8**。
                     * @example `flv`
                     */
                    VideoFormat: string;
                }[];
            };
            /**
             * 输出流地址。
             * @example `rtmp://developer.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****`
             */
            StreamUrl: string;
        }[];
    };
    /**
     * 总记录数。
     * @example `2`
     */
    Total: number;
}
