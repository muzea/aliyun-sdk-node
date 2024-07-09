export interface AddRecordTemplateRequest {
    /**
     * 布局ID数据列表。
     * @example `2`
     */
    "LayoutIds": number[];
    /**
     * 录制文件格式列表。
     * @example `mp4`
     */
    "Formats": string[];
    /**
     * 背景图片列表。
     */
    "Backgrounds"?: {
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
     * 水印列表。
     */
    "Watermarks"?: {
        /**
         * 水印透明度。0.0表示透明，1.0表示完全不透明。
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
     * 时钟列表。
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
     * 任务计费配置，根据您的不同设置，进行收费。请参见下文中的TaskProfile枚举值。
     * > - 编码选项MediaEncode的分辨率需要小于等于TaskProfile的分辨率。
     * - 布局最大窗格数需要小于等于TaskProfile的输入路数。
     * @example `4IN_1080P`
     */
    "TaskProfile": string;
    /**
     * 编码选项，请参见下文中的MediaEncode枚举值。
     * @example `20`
     */
    "MediaEncode": number;
    /**
     * 背景色RGB。默认是0（黑色）。计算公式为R+G×256+B×65536，R（红）、G（绿）、B（蓝）的取值：**0~255**。
     * @example `0`
     */
    "BackgroundColor"?: number;
    /**
     * 录制文件存储的OSS bucket。
     * > 目前仅支持上海区域OSS bucket。
     * @example `rtc-record-oss`
     */
    "OssBucket": string;
    /**
     * 录制文件命名规则。
     * > 为确保录制的文件名称唯一，目前录制文件的命名规则为record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}。
     * @example `record/{AppId}/{ChannelId_TaskId}/{EscapedStartTime}_{EscapedEndTime}`
     */
    "OssFilePrefix": string;
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
     * 录制事件回调消息队列。
     * > 此参数和HttpCallbackUrl必须输入其中某一个，不能两者都输入或都不输入。
     * @example `record-callback-queue`
     */
    "MnsQueue"?: string;
    /**
     * 录制事件HTTP回调地址。
     * > 此参数和MnsQueue必须输入其中某一个，不能两者都输入或都不输入。
     * @example `http://example.com/callback`
     */
    "HttpCallbackUrl"?: string;
    /**
     * 录制的m3u8文件是否需要加上ts文件时间点。
     * @example `false`
     */
    "EnableM3u8DateTime"?: boolean;
    "OssEndpoint"?: string;
}
