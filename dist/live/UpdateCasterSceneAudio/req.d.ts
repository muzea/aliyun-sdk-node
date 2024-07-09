export interface UpdateCasterSceneAudioRequest {
    /**
     * 音频配置。
     */
    "AudioLayer"?: {
        /**
         * 3A美音算法开关。该参数由以下字段组成：
         * - **enableAgc**：（可选）3A算法的智能增益算法开关。**0**：不开启（默认值）； **1**：开启。
         * - **enableAns**：（可选）3A算法的智能降噪算法开关。**0**：不开启（默认值）；**1**：开启。
         * - **ansMode**：（可选）智能降噪算法的模式，该字段只有在**enableAns**取值为**1**时有效。**0**：语音降噪（默认值）；**1**：音乐降噪。
         * - **enableBeautify**：（可选）美声处理开关。 **0**：不开启（默认值）；**1**：开启。
         * - **voiceBeautifyMode**：（可选）美声模式，该字段只有在**enableBeautify**取值为**1**时有效。**0**：磁性男声（默认值）；**1**：清新女声。
         * @example `{   "enableAgc":0,   "enableAns":1 }`
         */
        Filter: string;
        /**
         * 该字段对视频进行固定延迟设置，可用于字幕同步。
         *
         * 单位：毫秒。取值范围为**0~5000**。默认值为**0**。
         * @example `0`
         */
        FixedDelayDuration: number;
        /**
         * 确定哪些声道可以作为音量输入。取值：
         * - **leftChannel**：左声道。
         * - **rightChannel**：右声道。
         * - **all**（默认值）：双声道。
         * @example `all`
         */
        ValidChannel: string;
        /**
         * 调节音频流的音量大小倍数。取值范围为**0~10.0**，默认值为**1.0** 。
         *
         * - **1.0**：保持原有音量。
         * - 小于**1**：降低音量的倍数。
         * - 大于**1**：放大音量的倍数。
         *
         * @example `1`
         */
        VolumeRate: number;
    }[];
    /**
     *
     * @example `RV01`
     */
    "MixList"?: string[];
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster](~~69338~~)接口创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 场景ID。如果您通过[DescribeCasterScenes](~~60262~~)接口查询导播台场景列表，请查看DescribeCasterScenes接口调用返回的参数ComponentId值。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1****`
     */
    "SceneId": string;
    /**
     * 是否启用音频跟随。 默认启用音频跟随，为空则保持最近一次配置不变。取值：
     * - **0**：混音模式。
     * - **1**：音频跟随视频模式。
     * @example `1`
     */
    "FollowEnable"?: number;
}
