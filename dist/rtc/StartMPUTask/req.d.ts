export interface StartMPUTaskRequest {
    /**
     * 指定该任务订阅的用户列表。
     * @example `userID`
     */
    "SubSpecUsers"?: string[];
    /**
     * 指定订阅房间里哪些用户音频流。
     * @example `audioUserID`
     */
    "SubSpecAudioUsers"?: string[];
    /**
     * 指定订阅房间里哪些用户共享视频流。
     */
    "SubSpecShareScreenUsers"?: string[];
    /**
     * 指定订阅房间里哪些用户摄像头视频流。
     */
    "SubSpecCameraUsers"?: string[];
    /**
     * 指定不订阅房间里哪些用户音频流。
     */
    "UnsubSpecAudioUsers"?: string[];
    /**
     * 指定不订阅房间里哪些用户共享视频流。
     */
    "UnsubSpecShareScreenUsers"?: string[];
    /**
     * 指定不订阅房间里哪些用户摄像头视频流。
     */
    "UnsubSpecCameraUsers"?: string[];
    /**
     * 布局ID数据。
     * @example `1`
     */
    "LayoutIds"?: number[];
    /**
     * 布局参数列表。
     */
    "UserPanes"?: {
        /**
         * 当前布局的图片框位列表。
         */
        Images: {
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
             * 图片显示，取值：
             * - **0（None）**：不显示。
             * - **1（Always）**：总是显示。
             * - **2（Backup）**：当前用户无视频流时显示。
             * @example `1`
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
         * 人像分割类型。取值：
         * - **0**：无人像分割（默认值）。
         * - **1**：人像分割，仅在开启增强参数（人像分割功能）后有效。
         * @example `0`
         */
        SegmentType: number;
        /**
         * 对应布局框格的用户ID。取值：**1**~**16**。
         * @example `TestId`
         */
        UserId: string;
        /**
         * 当前布局的文字框位列表。
         */
        Texts: {
            /**
             * 字体类型，取值：
             * - **0**：NOTO_SERIF_CJKSC_REGULAR（默认值）
             * - **1**：ALIBABA_PUHUITI_REGULAR
             * - **2**：ALIBABA_PUHUITI_BOLD
             * - **3**：ALIBABA_PUHUITI_Heavy
             * - **4**：ALIBABA_PUHUITI_LIGHT
             * - **5**：ALIBABA_PUHUITI_MEDIUM
             * @example `0`
             */
            FontType: number;
            /**
             * 文字颜色（RGB）。
             * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：**0**~**255**。
             * @example `0`
             */
            FontColor: number;
            /**
             * 坐标Y，归一化百分比。
             * @example `0.2456`
             */
            Y: number;
            /**
             * 文本内容。
             * @example `text`
             */
            Text: string;
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
            /**
             * 字体大小，取值范围：**0**~**72**。
             * @example `1`
             */
            FontSize: number;
            /**
             * 文字描边宽度（单位：像素），默认为0。
             * @example `1`
             */
            BorderWidth: number;
            /**
             * 文字描边颜色。
             * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：**0**~**255**。
             * @example `0`
             */
            BorderColor: number;
            /**
             * 是否出现文字框。取值：
             * - false（默认值）：不出现。
             * - true：出现。
             * @example `false`
             */
            Box: boolean;
            /**
             * 文字框颜色。
             * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：**0**~**255**。
             * @example `0`
             */
            BoxColor: number;
            /**
             * 文字框宽度（单位：像素），默认为0。
             * @example `0`
             */
            BoxBorderWidth: number;
            /**
             * 文字框和文字透明度。0.0表示透明，1.0表示完全不透明。
             * @example `0`
             */
            Alpha: number;
        }[];
        /**
         * 对应布局的用户视频输入。取值：
         * - **camera**：视频流（默认值）。
         * - **shareScreen**：共享屏幕流。
         * @example `camera`
         */
        SourceType: string;
        /**
         * 窗格ID，取值：**0**~**15**。
         * >当指定的PaneId用户找不到的话，会默认显示其他的流，流的确定是根据用户加入频道的顺序。
         * @example `2`
         */
        PaneId: number;
    }[];
    /**
     * 画布背景图片框位列表。
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
         * 图片显示，取值：
         * - **0（None）**：不显示。
         * - **1（Always）**：总是显示。
         * @example `1`
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
     * 水印图片框位列表。
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
         * 图片的HTTP或HTTPS地址。
         * @example `https://www.example.com/image.jpg`
         */
        Url: string;
        /**
         * 图片显示，取值：
         * - **0（None）**：不显示。
         * - **1（Always）**：总是显示。
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
     * 时钟挂件。
     */
    "ClockWidgets"?: {
        /**
         * 字体类型，取值：
         * - **0**：NOTO_SERIF_CJKSC_REGULAR（默认值）
         * - **1**：ALIBABA_PUHUITI_REGULAR
         * - **2**：ALIBABA_PUHUITI_BOLD
         * - **3**：ALIBABA_PUHUITI_Heavy
         * - **4**：ALIBABA_PUHUITI_LIGHT
         * - **5**：ALIBABA_PUHUITI_MEDIUM
         * @example `0`
         */
        FontType: number;
        /**
         * 文字颜色（RGB）。
         * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：**0**~**255**。
         * @example `0`
         */
        FontColor: number;
        /**
         * 坐标Y，归一化百分比。
         * @example `0.7576`
         */
        Y: number;
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
        /**
         * 字体大小，取值范围：**0**~**72**。
         * @example `1`
         */
        FontSize: number;
        /**
         * 文字描边宽度（单位：像素），默认为0。
         * @example `1`
         */
        BorderWidth: number;
        /**
         * 文字描边颜色。
         * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：**0**~**255**。
         * @example `0`
         */
        BorderColor: number;
        /**
         * 是否出现文字框。取值：
         * - false（默认值）：不出现。
         * - true：出现。
         * @example `false`
         */
        Box: boolean;
        /**
         * 文字框颜色。
         * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：**0**~**255**。
         * @example `0`
         */
        BoxColor: number;
        /**
         * 文字框宽度（单位：像素），默认为0。
         * @example `0`
         */
        BoxBorderWidth: number;
        /**
         * 文字框和文字透明度。0.0表示透明，1.0表示完全不透明。
         * @example `0`
         */
        Alpha: number;
    }[];
    /**
     * 应用ID，仅支持传单个ID。
     * 您可以在控制台创建和查询。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 频道ID，仅支持传单个ID。
     * @example `yourChannelId`
     */
    "ChannelId": string;
    /**
     * 任务ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大55字节。
     * > 此ID为旁路转推的标识，需保证唯一。
     * @example `yourTaskId`
     */
    "TaskId": string;
    /**
     * 混流模式。取值：
     * - **0**：单路转推，不混流转码，仅转推原始单路流，无需配置混流转码参数。
     * - **1**：混流转码（默认值），支持混流转码输出。
     * > - 单路转推模式下有效参数：**StreamType**、**SourceType**、**SubSpecUsers**。
     * - 混流转码模式下有效参数：**MediaEncode**、**LayoutIds**、**BackgroundColor**、**SubSpecUsers**、**CropMode**、**UserPanes**、**Backgrounds**、**Watermarks**。
     * @example `0`
     */
    "MixMode"?: number;
    /**
     * 视频的裁剪方式。取值：
     * - **1**：保持比例裁剪。
     * - **2**：保持比例留边（默认值）。
     * @example `1`
     */
    "CropMode"?: number;
    /**
     * 编码选项，请参见下文中的MediaEncode枚举值。
     * @example `2`
     */
    "MediaEncode"?: number;
    /**
     * 单路转推模式下用户视频输入流。取值：
     * - **camera**：摄像头。
     * - **shareScreen**：屏幕共享。
     * @example `camera`
     */
    "SourceType"?: string;
    /**
     * 单路转推模式下转推音频流。取值：
     * - **0**：转推原始流。
     * - **1**：仅转推音频流。
     * - **2**：仅转推视频流。
     * 默认转推原始流。
     * @example `0`
     */
    "StreamType"?: number;
    /**
     * 背景色RGB，默认是**0**（黑色）。
     * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：0~255。
     * @example `0`
     */
    "BackgroundColor"?: number;
    /**
     * 直播推流地址，仅支持传单个地址。生成规则请参见[推流地址和播放地址](~~199339~~)。
     * >- 对已开防盗链鉴权的域名，需要在推流地址中包含鉴权串。
     * - 禁止同一个StreamURL在不同任务中同时使用。
     * - 任务停止10S之内，禁止使用同一个StreamURL。
     * @example `rtmp://example.com/live/stream`
     */
    "StreamURL"?: string;
    /**
     * 载荷类型。取值：
     * - **0**：不使用载荷。
     * - **1**：使用VideoSEI。
     * @example `0`
     */
    "PayloadType"?: number;
    /**
     * 语音激励标志。取值：
     * - **0**：不传递语音激励信息。
     * - **1**：传递语音激励信息。
     * @example `0`
     */
    "ReportVad"?: number;
    /**
     * RTP扩展头信息。取值：
     * - **0**：不传递。
     * - **1**：传递。
     * @example `0`
     */
    "RtpExtInfo"?: number;
    /**
     * 时间戳。
     * @example `15273582735`
     */
    "TimeStampRef"?: number;
    /**
     * 语音激励的回调间隔。
     * @example `86400`
     */
    "VadInterval"?: number;
    /**
     * 媒体处理类型。取值：
     * - **0**：旁路转推任务。
     * - **1**：MCU混流低延时分发任务。
     * @example `0`
     */
    "TaskType"?: number;
    /**
     * 增强参数。
     */
    "EnhancedParam"?: {
        /**
         * 人像分割功能（内测中），取值：
         * - **true**：开启。
         * - **false**（默认值）：关闭。
         * @example `false`
         */
        EnablePortraitSegmentation: boolean;
    };
}
