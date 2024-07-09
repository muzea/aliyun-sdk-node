export interface DescribeCasterSceneAudioResponse {
    AudioLayers: {
        /**
         * Audiolayer配置列表。
         */
        AudioLayer: {
            /**
             * 固定延时时间，单位毫秒（ms）。
             * @example `2000`
             */
            FixedDelayDuration: number;
            /**
             * 声道类型。取值：
             *
             * - **left**：左声道。
             * - **right**：右声道。
             * - **all**（默认值）：双声道。
             * @example `all`
             */
            ValidChannel: string;
            /**
             * 音频音量。
             * @example `1`
             */
            VolumeRate: number;
        }[];
    };
    /**
     * 导播台ID。可作为启动导播台场景的请求参数。
     * @example `97df6b7f-3490-47d2-ac50-88338765****`
     */
    CasterId: string;
    /**
     * 是否启用音频跟随。 默认启用音频跟随。
     *
     * - **0**：混音模式。
     * - **1**：音频跟随视频模式。
     * @example `1`
     */
    FollowEnable: number;
    MixList: {
        LocationId: string[];
    };
    /**
     * 请求ID。
     * @example `98745637-3490-47d2-ac50-883387567098`
     */
    RequestId: string;
}
