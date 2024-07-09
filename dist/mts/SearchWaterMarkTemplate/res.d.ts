export interface SearchWaterMarkTemplateResponse {
    /**
     * 总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `FC029D04-8F47-57FF-A759-23383C15617D`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    WaterMarkTemplateList: {
        /**
         * 模板列表。
         */
        WaterMarkTemplate: {
            /**
             * 水印类型。取值：
             * - Image：图片。
             * - Text：文本。
             * > 目前仅支持**Image**。
             * @example `Image`
             */
            Type: string;
            /**
             * 取值为百分比是参考的边。当Height、Width、Dx、Dy的取值处于（0，1）时，这个百分比是参考哪个边得到的（按顺序）：
             * - **Width**：宽。
             * - **Height**：高。
             * - **Long**：长边。
             * - **Short**：短边。
             */
            RatioRefer: {
                /**
                 * 水印图片相对输出视频的水平偏移量。默认值：**0**（无偏移）。
                 * 值有两种形式：
                 * - **整数型**：代表偏移像素，绝对位置，单位：px。
                 * - **小数型**：代表水平偏移量与输出分辨率宽的比率，相对比例，按照视频尺寸变化，支持4位小数，如0.9999，超出部分系统自动丢弃。
                 * @example `0.51`
                 */
                Dx: string;
                /**
                 * 输出视频上水印图片宽。值有两种形式：
                 * - **整数型**：代表水印图片宽的像素值，绝对位置，单位：px。
                 * - **小数型**：代表相对输出视频分辨率宽的比率，相对比例，按照视频尺寸变动，支持4位小数，如0.9999，超出部分系统自动丢弃。
                 * @example `0.36`
                 */
                Width: string;
                /**
                 * 输出视频上水印图片高。值有两种形式：
                 * - **整数型**：代表水印图片高的像素值，绝对位置，单位：px。
                 * - **小数型**：代表相对输出视频分辨率高的比率，相对比例，按照视频尺寸变动，支持4位小数，如0.9999，超出部分系统自动丢弃。
                 * @example `0.33`
                 */
                Height: string;
                /**
                 * 水印图片相对输出视频的垂直偏移量。默认值：**0**（无偏移）。值有两种形式：
                 * - **整数型**：代表偏移像素，绝对位置，单位：px。
                 * - **小数型**：代表垂直偏移量与输出分辨率高的比率，相对比例，按照视频尺寸变动，支持4位小数，如0.9999，超出部分系统自动丢弃。
                 * @example `0.2`
                 */
                Dy: string;
            };
            /**
             * 水印的位置。取值：
             * - TopRight：右上。
             * - TopLeft：左上。
             * - BottomRight：右下。
             * - BottomLeft：左下。
             * @example `TopRight`
             */
            ReferPos: string;
            /**
             * 水印模板的状态。取值：
             * - **Normal**：正常。
             * - **Deleted**：已删除。
             * @example `Normal`
             */
            State: string;
            /**
             * 水平偏移量。单位：px。
             * @example `100`
             */
            Dx: string;
            /**
             * 宽。单位：px。
             * @example `8`
             */
            Width: string;
            /**
             * 高。单位：px。
             * @example `8`
             */
            Height: string;
            /**
             * 动态水印。
             */
            Timeline: {
                /**
                 * 水印开始出现时间。
                 * - 单位：秒。
                 * - 默认值：**0**。
                 * @example `0`
                 */
                Start: string;
                /**
                 * 水印持续时间。默认值：**ToEND**（直至视频结束）。
                 * @example `ToEND`
                 */
                Duration: string;
            };
            /**
             * 水印模板名称。
             * @example `example-watermark`
             */
            Name: string;
            /**
             * 垂直偏移量。单位：px。
             * @example `100`
             */
            Dy: string;
            /**
             * 水印模板ID。
             * @example `88c6ca184c0e4578645b665e2a12****`
             */
            Id: string;
        }[];
    };
}
