export interface AddCasterLayoutRequest {
    /**
     * 视频布局。
     */
    "VideoLayer": {
        /**
         * 元素填充方式。 取值：
         *
         * - **none**（默认）：不填充。以画面作为配置目标进行设置。
         * - **fit**：自适应，以填充区（框）作为配置目标进行设置，此时画面会按照原始的宽高比缩放，长边对齐的自适应方式在填充区（框）内居中填充。若填充区宽高比和画面不一致，则短边两侧无填充（显示为下层元素画面，若下层未配置，默认为底图黑色）。
         *
         * @example `fit`
         */
        FillMode: string;
        /**
         * 该字段对视频进行固定延迟设置，可用于字幕同步。 单位：毫秒。 默认值：**0** 。取值范围：**0~5000**。
         *
         * @example `5000`
         */
        FixedDelayDuration: number;
        /**
         * 元素的高度归一化比例值。
         *
         * - 若采用不填充方式，元素的宽度会按照该高度来进行等比缩放。默认值为**0**，表示按照画面的原始尺寸进行显示。
         * - 若采用自适应方式，该字段必传且大于**0**，表示填充区（框）高度归一化比例值。
         *
         * @example `1`
         */
        HeightNormalized: number;
        /**
         * 视频元素配置列表，元素为视频画面的配置信息：位置。
         * 设置该视频元素的位置归一化值`[x,y]`, 默认为`[0,0]`。注意x,y需要进行归一化计算。
         * @example `0.3`
         */
        PositionNormalized: number[];
        /**
         * 元素的位置参考坐标值。 取值：
         *
         * - **topLeft**（默认值）：左上。
         * - **topRight**：右上。
         * - **bottomLeft**：左下。
         * - **bottomRight**：右下。
         * - **center**：中间。
         * - **topCenter**：中上。
         * - **bottomCenter**：中下。
         * - **leftCenter**：左中。
         * - **rightCenter**：右中。
         *
         * @example `topLeft`
         */
        PositionRefer: string;
        /**
         * 元素的宽度归一化比例值。
         *
         * - 若采用不填充方式，元素的高度会按照该宽度来进行等比缩放，默认值为**0**，表示按照画面的原始尺寸进行显示。
         * - 若采用自适应方式，该字段必传且大于**0**，表示填充区（框）宽度归一化比例值。
         *
         * @example `1`
         */
        WidthNormalized: number;
    }[];
    /**
     * 音频布局。
     */
    "AudioLayer": {
        /**
         * 对音频进行固定延迟设置，可用于字幕同步。 单位：毫秒。 默认值：**0** 。取值范围：**0~5000**。
         *
         * @example `5000`
         */
        FixedDelayDuration: number;
        /**
         * 确定哪些声道可以作为音量输入。 取值：
         *
         * - **leftChannel**：左声道。
         * - **rightChannel**：右声道。
         * - **all**（默认值）：双声道。
         *
         * @example `all`
         */
        ValidChannel: string;
        /**
         * 调节音频流的音量大小倍数。 取值范围为**0~10.0**。其中：
         *
         * - **1.0**（默认值）：表示保持原有音量。
         * - 小于**1**：表示降低音量的倍数。
         * - 大于**1**：表示放大的倍数。
         * @example `1.0`
         */
        VolumeRate: number;
    }[];
    /**
     * 元素为视频资源的位置ID，即LocationId。
     * LocationId参见[添加视频源](~~60250~~)，与VideoLayers元素顺序对应。
     * @example `RV01`
     */
    "BlendList": string[];
    /**
     * 元素为音频资源的位置ID，即LocationId。
     * LocationId参见[添加视频源](~~60250~~)，与AudioLayers元素顺序对应。
     * @example `RV01`
     */
    "MixList": string[];
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
}
