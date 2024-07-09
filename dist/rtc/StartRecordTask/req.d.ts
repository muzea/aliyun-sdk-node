export interface StartRecordTaskRequest {
    /**
     * 指定该任务订阅的用户列表。
     * @example `userID`
     */
    "SubSpecUsers"?: string[];
    /**
     * 指定订阅房间里有哪些用户音频流。
     * @example `1`
     */
    "SubSpecAudioUsers"?: string[];
    /**
     * 指定订阅房间里有哪些用户屏幕共享流。
     * @example `1`
     */
    "SubSpecShareScreenUsers"?: string[];
    /**
     * 指定订阅房间里有哪些用户摄像头流。
     * @example `1`
     */
    "SubSpecCameraUsers"?: string[];
    /**
     * 指定非订阅房间里有哪些用户音频流。
     * @example `1`
     */
    "UnsubSpecAudioUsers"?: string[];
    /**
     * 指定非订阅房间里有哪些用户屏幕共享流。
     * @example `1`
     */
    "UnsubSpecShareScreenUsers"?: string[];
    /**
     * 指定非订阅房间里有哪些用户摄像头流。
     * @example `1`
     */
    "UnsubSpecCameraUsers"?: string[];
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
             * - **0**（None）：不显示。
             * - **1**（Always）：总是显示。
             * - **2**（Backup）：当前用户无视频流时显示。
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
         * 对应布局框格的用户ID。N的取值：**1~16**。
         * @example `TestId`
         */
        UserId: string;
        /**
         * 当前布局的文字框位列表。
         */
        Texts: {
            /**
             * 字体类型。取值：
             * - **0**（默认）：NOTO_SERIF_CJKSC_REGULAR。
             * - **1**：ALIBABA_PUHUITI_REGULAR。
             * - **2**：ALIBABA_PUHUITI_BOLD。
             * - **3**：ALIBABA_PUHUITI_Heavy。
             * - **4**：ALIBABA_PUHUITI_LIGHT。
             * - **5**：ALIBABA_PUHUITI_MEDIUM。
             * @example `0`
             */
            FontType: number;
            /**
             * 文字颜色（RGB）。计算公式为R+G×256+B×65536，R（红）、G（绿）、B（蓝）的取值：**0~255**。
             * @example `1`
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
             * 字体大小。字体合理范围**(0, 72]**。
             * @example `1`
             */
            FontSize: number;
        }[];
        /**
         * 对应布局的用户视频输入。取值：
         * - **camera**（默认）：视频流。
         * - **shareScreen**：共享屏幕流。
         * @example `camera`
         */
        SourceType: string;
        /**
         * 窗格ID，取值：**0**~**15**。
         * > - 当指定的PaneId用户找不到的话，会默认显示其他的流，流的确定是根据用户加入频道的顺序。
         * - 如果某个UserPanes相关的参数为必选，则其他相关参数都为必选，反之都为非必选。
         * @example `2`
         */
        PaneId: number;
    }[];
    /**
     * 布局ID组。
     * @example `1111`
     */
    "LayoutIds"?: number[];
    /**
     * 应用ID。通过控制台创建和查询，仅支持传单个ID。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 频道ID。仅支持传单个ID。
     * @example `yourChannelId`
     */
    "ChannelId": string;
    /**
     * 任务ID。仅支持传单个ID，需保证唯一。由1~55位大小写字母、数字、下划线、短划线（-）组成。
     * @example `yourTaskId`
     */
    "TaskId": string;
    /**
     * 任务计费配置，根据您的不同设置，进行收费。请参见下文中的TaskProfile枚举值。
     * > - 编码选项MediaEncode的分辨率需要小于等于TaskProfile的分辨率。
     * - 布局最大窗格数需要小于等于TaskProfile的输入路数。
     * @example `4IN_1080P`
     */
    "TaskProfile"?: string;
    /**
     * 编码选项，请参见下文中的MediaEncode枚举值。
     * @example `20`
     */
    "MediaEncode"?: number;
    /**
     * 配置模板ID。获取模板ID，请参见[AddRecordTemplate](~~193625~~)。
     * @example `76dasgb****`
     */
    "TemplateId": string;
    /**
     * 单流录制模式下视频源，取值：
     * - **camera**：摄像头。
     * - **shareScreen**：屏幕共享。
     * > 如果视频源为shareScreen，且仅推摄像头流，则录制摄像头流；如果同时推屏幕共享流，则录制屏幕共享流。
     * @example `camera`
     */
    "SourceType"?: string;
    /**
     * 单流录制模式，取值：
     * - **0**（默认值）：录制原始流。
     * - **1**：仅录制音频流。
     * @example `0`
     */
    "StreamType"?: number;
    /**
     * 录制模式，取值：
     * - **0**：单流录制，不允许中间修改任务参数（不允许调用UpdateRecordTask接口修改任务参数）。
     * - **1**（默认值）：合流录制，支持多画面合流输出。
     * > - 单流录制模式下有效参数：StreamType、SourceType。
     * - 合流录制模式下有效参数：TaskProfile、MediaEncode、LayoutIds、BackgroundColor、SubSpecUsers、CropMode、UserPanes、Backgrounds、Watermarks、ClockWidgets。
     * @example `1`
     */
    "MixMode"?: number;
    /**
     * 视频的裁剪方式。取值：
     * - **1**：保持比例裁剪。
     * - **2**：保持比例留边（默认值）。
     * @example `1`
     */
    "CropMode"?: number;
}
