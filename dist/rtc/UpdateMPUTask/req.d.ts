export interface UpdateMPUTaskRequest {
    /**
     * 布局ID数据。
     */
    "LayoutIds"?: number[];
    /**
     * 指定该任务订阅的用户列表。
     */
    "SubSpecUsers"?: string[];
    /**
     * 指定订阅房间里哪些用户音频流。
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
     * 布局参数。
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
         * 对应布局窗格的用户ID，取值：**1**~**16**。
         * @example `TestUserID`
         */
        UserId: string;
        /**
         * 当前布局的文字框位列表。
         */
        Texts: {
            /**
             * 字体类型，取值：
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
         * 对应布局的用户视频输入，取值：
         * - **camera**：相机流。
         * - **shareScreen**：共享屏幕流。
         * @example `camera`
         */
        SourceType: string;
        /**
         * 窗格ID，取值范围：**0**~**15**。
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
     * 时钟挂件。
     */
    "ClockWidgets"?: {
        /**
         * 字体类型，取值：
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
     * 可通过控制台创建和查询。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 任务ID，仅支持传单个ID，和[StartMpuTask](~~93183~~)中入参TaskId一致。
     * @example `testId`
     */
    "TaskId": string;
    /**
     * 视频的裁剪模式。取值：
     * - **1**：保持比例裁剪。
     * - **2**（默认值）：保持比例留边。
     * @example `1`
     */
    "CropMode"?: number;
    /**
     * 编码选项，请参见下文中的MediaEncode枚举值。
     * @example `2`
     */
    "MediaEncode"?: number;
    /**
     * 混流模式。取值：
     * - **0**：单路转推，不混流转码，仅转推原始单路流，无需配置混流转码参数。
     * - **1**：混流转码（默认值），支持混流转码输出。
     * > - 单路转推模式下有效参数：**StreamType**、**SourceType**。
     * - 混流转码模式下有效参数：**MediaEncode**、**LayoutIds**、**BackgroundColor**、**SubSpecUsers**、**CropMode**、**UserPanes**、**Backgrounds**、**Watermarks**。
     * @example `0`
     */
    "MixMode"?: number;
    /**
     * 单路转推模式下用户视频输入流。取值：
     * - **camera**：摄像头。
     * - **shareScreen**：屏幕共享。
     * @example `camera`
     */
    "SourceType"?: string;
    /**
     * 单路转推模式下转推音频流。取值：
     * - **0**（默认值）：转推原始流。
     * - **1**：仅转推音频流。
     * - **2**：仅转推视频流。
     * @example `0`
     */
    "StreamType"?: number;
    /**
     * 背景色RGB，默认是**0**（黑色）。
     * 计算公式为`R + G × 256 + B × 65536`，R（红）、G（绿）、B（蓝）的取值：**0**~**255**。
     * @example `0`
     */
    "BackgroundColor"?: number;
}
