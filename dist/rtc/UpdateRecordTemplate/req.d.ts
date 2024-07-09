export interface UpdateRecordTemplateRequest {
    /**
     * 布局ID组。
     * @example `1111`
     */
    "LayoutIds": number[];
    /**
     * 录制文件格式。
     * @example `mp4`
     */
    "Formats": string[];
    /**
     * 背景图片信息。
     */
    "Backgrounds"?: {
        /**
         * 窗格宽，归一化百分比。
         * @example `0.2456`
         */
        Width: number;
        /**
         * 窗格高，归一化百分比。
         * @example `0.2456`
         */
        Height: number;
        /**
         * 坐标Y，归一化百分比。
         * @example `0.7576`
         */
        Y: number;
        /**
         * 图片的HTTP或HTTPS地址。
         * @example `https://www.example.com/image.jpg`
         */
        Url: string;
        /**
         * 图片显示。取值：
         * - **0**（None）：不显示。
         * - **1**（Always）：总是显示。
         * @example `0`
         */
        Display: number;
        /**
         * 叠放顺序，0为最底层，1层在0层之上，以此类推。
         * @example `0`
         */
        ZOrder: number;
        /**
         * 坐标X，归一化百分比。
         * @example `0.7576`
         */
        X: number;
    }[];
    /**
     * 水印信息。
     */
    "Watermarks"?: {
        /**
         * 透明度。0.0表示透明，1.0表示完全不透明。
         * @example `0`
         */
        Alpha: number;
        /**
         * 窗格宽，归一化百分比。
         * @example `0.2456`
         */
        Width: number;
        /**
         * 窗格高，归一化百分比。
         * @example `0.2456`
         */
        Height: number;
        /**
         * 坐标Y，归一化百分比。
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
         * 叠放顺序，0为最底层，1层在0层之上，以此类推。
         * @example `0`
         */
        ZOrder: number;
        /**
         * 坐标X，归一化百分比。
         * @example `0.7576`
         */
        X: number;
    }[];
    /**
     * 时钟信息。
     */
    "ClockWidgets"?: {
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
    /**
     * 应用ID。通过控制台创建和查询，仅支持传单个ID。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 录制配置模板名称。
     * @example `录制模板`
     */
    "Name": string;
    /**
     * 配置模板ID。获取模板ID，请参加[AddRecordTemplate](~~193625~~)。
     * @example `76dasgb****`
     */
    "TemplateId": string;
    /**
     * 任务计费配置。
     * @example `4IN_1080P`
     */
    "TaskProfile": string;
    /**
     * 编码选项。
     * @example `20`
     */
    "MediaEncode": number;
    /**
     * 背景色RGB，默认是0（黑色）。计算公式为R+G×256+B×65536，R（红）、G（绿）、B（蓝）的取值：**0~255**。
     * @example `0`
     */
    "BackgroundColor"?: number;
    /**
     * 录制文件存储的OSS Bucket。
     * @example `rtc-record-pre`
     */
    "OssBucket": string;
    /**
     * 录制文件命名规则。
     * @example `record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}`
     */
    "OssFilePrefix": string;
    /**
     * 录制事件回调消息队列。
     * @example `record-callback-queue`
     */
    "MnsQueue"?: string;
    /**
     * 录制事件HTTP回调地址。
     * @example `http://example.com/callback`
     */
    "HttpCallbackUrl"?: string;
    /**
     * 录制文件切割时长（大于等于1800）。单位：秒。
     * @example `1800`
     */
    "FileSplitInterval": number;
    /**
     * 延时停止录制的时间。单位：秒。默认值为**180**秒。
     * @example `180`
     */
    "DelayStopTime"?: number;
    /**
     * 录制的m3u8文件是否需要加上ts文件时间点。
     * @example `false`
     */
    "EnableM3u8DateTime"?: boolean;
    "OssEndpoint"?: string;
}
