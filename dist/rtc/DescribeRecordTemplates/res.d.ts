export interface DescribeRecordTemplatesResponse {
    /**
     * 返回分页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 请求ID。
     * @example `C292B80E-5175-4BA4-8CC292B80E-5175-4BA4-8C1E-2ABEC4D7C2FE1E-2ABEC4D7****`
     */
    RequestId: string;
    /**
     * 返回结果数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 录制配置模板。
     */
    Templates: {
        /**
         * 录制事件回调MNS队列名称。
         * @example `record-callback-queue`
         */
        MnsQueue: string;
        /**
         * 录制文件命名规则。
         * @example `record/pre/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}`
         */
        OssFilePrefix: string;
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-09-04T06:22:15Z`
         */
        CreateTime: string;
        /**
         * 录制文件存储OSS Bucket名称。
         * @example `rtc-record-oss`
         */
        OssBucket: string;
        /**
         * 延时停止录制的时间，单位：秒。
         * @example `180`
         */
        DelayStopTime: number;
        /**
         * 编码选项。
         * @example `50`
         */
        MediaEncode: number;
        /**
         * 文件切割时长。
         * @example `1800`
         */
        FileSplitInterval: number;
        /**
         * 录制事件HTTP回调地址。
         * @example `http://example.com/callback`
         */
        HttpCallbackUrl: string;
        /**
         * 录制的m3u8文件是否需要加上ts文件时间点。
         * @example `false`
         */
        EnableM3u8DateTime: boolean;
        /**
         * 背景色RGB。默认是**0**（黑色）。计算公式为R+G×256+B×65536，R（红）、G（绿）、B（蓝）的取值：**0~255**。
         * @example `0`
         */
        BackgroundColor: number;
        /**
         * 录制配置模板名称。
         * @example `模板-demo`
         */
        Name: string;
        /**
         * 录制配置模板ID。
         * @example `1ca698e2-57fa-4314-8e11-00d950d4****`
         */
        TemplateId: string;
        /**
         * 任务规格。
         * @example `4IN_1080P`
         */
        TaskProfile: string;
        /**
         * 背景图片信息列表。
         */
        Backgrounds: {
            /**
             * 背景图片窗格宽，归一化百分比。
             * @example `0.2456`
             */
            Width: number;
            /**
             * 背景图片窗格高，归一化百分比。
             * @example `0.2456`
             */
            Height: number;
            /**
             * 背景图片坐标Y，归一化百分比。
             * @example `0.7576`
             */
            Y: number;
            /**
             * 背景图片的HTTP或HTTPS地址。
             * @example `https://www.example.com/image.jpg`
             */
            Url: string;
            /**
             * 背景图片显示。取值：
             * - **0**（None）：不显示。
             * - **1**（Always）：总是显示。
             * @example `0`
             */
            Display: number;
            /**
             * 背景图片叠放顺序，0为最底层，1层在0层之上，以此类推。
             * @example `0`
             */
            ZOrder: number;
            /**
             * 背景图片坐标X，归一化百分比。
             * @example `0.7576`
             */
            X: number;
        }[];
        /**
         * 水印信息列表。
         */
        Watermarks: {
            /**
             * 水印透明度，归一化百分比。其中0表示透明，1表示完全不透明。
             * @example `0`
             */
            Alpha: number;
            /**
             * 水印窗格宽，归一化百分比。
             * @example `0.2456`
             */
            Width: number;
            /**
             * 水印窗格高，归一化百分比。
             * @example `0.2456`
             */
            Height: number;
            /**
             * 水印坐标Y，归一化百分比。
             * @example `0.7576`
             */
            Y: number;
            /**
             * 水印的HTTP或HTTPS地址。
             * @example `https://www.example.com/image.jpg`
             */
            Url: string;
            /**
             * 水印显示。取值：
             * - **0**（None）：不显示。
             * - **1**（Always）：总是显示。
             * @example `0`
             */
            Display: number;
            /**
             * 水印叠放顺序，0为最底层，1层在0层之上，以此类推。
             * @example `0`
             */
            ZOrder: number;
            /**
             * 水印坐标X，归一化百分比。
             * @example `0.7576`
             */
            X: number;
        }[];
        /**
         * 时钟信息列表。
         */
        ClockWidgets: {
            /**
             * 时钟字体类型，取值：
             * - **0**（默认值）：NOTO_SERIF_CJKSC_REGULAR
             * - **1**：ALIBABA_PUHUITI_REGULAR
             * - **2**：ALIBABA_PUHUITI_BOLD
             * - **3**：ALIBABA_PUHUITI_Heavy
             * - **4**：ALIBABA_PUHUITI_LIGHT
             * - **5**：ALIBABA_PUHUITI_MEDIUM
             * @example `0`
             */
            FontType: number;
            /**
             * 时钟文字颜色（RGB）。
             * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：**0**~**255**。
             * @example `0`
             */
            FontColor: number;
            /**
             * 时钟坐标Y，归一化百分比。
             * @example `0.7576`
             */
            Y: number;
            /**
             * 时钟叠放顺序，0为最底层，1层在0层之上，以此类推。
             * @example `0`
             */
            ZOrder: number;
            /**
             * 时钟坐标X，归一化百分比。
             * @example `0.7576`
             */
            X: number;
            /**
             * 时钟字体大小。字体合理范围**(0, 72]**。
             * @example `1`
             */
            FontSize: number;
        }[];
        LayoutIds: number[];
        Formats: string[];
    }[];
}
