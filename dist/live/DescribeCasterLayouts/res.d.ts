export interface DescribeCasterLayoutsResponse {
    Layouts: {
        /**
         * 布局列表。
         */
        Layout: {
            AudioLayers: {
                /**
                 * Audiolayer配置列表。
                 */
                AudioLayer: {
                    /**
                     * 该字段对视频进行固定延迟设置，可用于字幕同步。
                     *
                     * 单位为毫秒（ms）。默认值为**0**。取值范围为**0~5000**。
                     * @example `20`
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
                     * Layer元素的高度归一化比例值，其中元素的宽度会按照该高度来进行等比缩放。
                     * >默认值为**0**，表示按照元素的原始尺寸进行显示。
                     * @example `1`
                     */
                    VolumeRate: number;
                }[];
            };
            BlendList: {
                LocationId: string[];
            };
            /**
             * 布局ID。
             * @example `72d2ec7a-4cd7-4a01-974b-7cd53947****`
             */
            LayoutId: string;
            MixList: {
                LocationId: string[];
            };
            VideoLayers: {
                /**
                 * Videolayer配置列表，采用数组默认序列。
                 */
                VideoLayer: {
                    /**
                     * 元素填充方式。取值：
                     *
                     * - **none**（默认）：不填充。以画面作为配置目标进行Layer设置。
                     * - **fit**：自适应。以填充区（框）作为配置目标进行Layer设置，此时画面会按照原始的宽高比缩放，长边对齐的自适应方式在填充区（框）内居中填充，若填充区宽高比和画面不一致，则短边两侧无填充（显示为下层Layer画面，若下层未配置Layer，默认为底图黑色）。
                     * @example `fit`
                     */
                    FillMode: string;
                    /**
                     * 该字段对视频进行固定延迟设置，可用于字幕同步。
                     *
                     * 单位：毫秒（ms）  。 默认值为**0** 。取值范围为**0~5000**。
                     * @example `20`
                     */
                    FixedDelayDuration: number;
                    /**
                     * Layer元素的高度归一化比例值。
                     *
                     * - 若采用不填充模式，元素的宽度会按照该高度来进行等比缩放。默认值为**0**，表示按照画面的原始尺寸进行显示。
                     * - 若采用自适应方式，该字段必传且大于**0**，表示填充区（框）高度归一化比例值。
                     * @example `0.5`
                     */
                    HeightNormalized: number;
                    PositionNormalizeds: {
                        Position: number[];
                    };
                    /**
                     * 设置元素的位置参考坐标值。取值：
                     * - **topLeft**（默认值）：左上。
                     * - **topRight**：右上。
                     * - **bottomLeft**：左下。
                     * - **bottomRight**：右下。
                     * - **center**：中间。
                     * - **topCenter**：中上。
                     * - **bottomCenter**：中下。
                     * - **leftCenter**：左中。
                     * - **rightCenter**：右中。
                     * @example `topLeft`
                     */
                    PositionRefer: string;
                    /**
                     * Layer元素的宽度归一化比例值。
                     *
                     * - 若采用不填充模式，元素的高度会按照该宽度来进行等比缩放。默认值为**0**，表示按照画面的原始尺寸进行显示。
                     * - 若采用自适应方式，该字段必传且大于**0**，表示填充区（框）宽度归一化比例值。
                     * @example `0.5`
                     */
                    WidthNormalized: number;
                }[];
            };
        }[];
    };
    /**
     * 请求ID。
     * @example `3be7ade8-d907-483c-b24a-0dad4595beaf`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `3`
     */
    Total: number;
}
