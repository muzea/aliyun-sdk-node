export interface UpdateRecordTaskRequest {
    /**
     * 指定该任务订阅的用户列表。
     * @example `userID`
     */
    "SubSpecUsers"?: string[];
    /**
     * 指定订阅房间里有哪些用户音频流。
     */
    "SubSpecAudioUsers"?: string[];
    /**
     * 指定订阅房间里有哪些用户屏幕共享流。
     */
    "SubSpecShareScreenUsers"?: string[];
    /**
     * 指定订阅房间里有哪些用户摄像头流。
     */
    "SubSpecCameraUsers"?: string[];
    /**
     * 指定非订阅房间里有哪些用户音频流。
     */
    "UnsubSpecAudioUsers"?: string[];
    /**
     * 指定非订阅房间里有哪些用户屏幕共享流。
     */
    "UnsubSpecShareScreenUsers"?: string[];
    /**
     * 指定非订阅房间里有哪些用户摄像头流。
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
             * 字体类型，取值：
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
             * 字体大小。字体合理范围：**(0, 72]**。
             * @example `1`
             */
            FontSize: number;
        }[];
        /**
         * 对应布局的用户视频输入。取值：
         * - **camera**（默认）：视频流。
         * - **shareScreen**：共享屏幕流。
         * N的取值：**1~16**。
         * @example `camera`
         */
        SourceType: string;
        /**
         * 窗格ID。N的取值：**1~16**。PaneID的取值：**0~15**。
         * > 当指定的PaneId用户找不到的话，会默认显示其他的流，流的确定是根据用户加入频道的顺序。
         * @example `1`
         */
        PaneId: number;
    }[];
    /**
     * 布局ID组。
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
     * 任务ID。仅支持传单个ID，和[StartRecordTask](~~193528~~)入参TaskId一致。
     * @example `yourTaskId`
     */
    "TaskId": string;
    /**
     * 配置模板ID。获取模板ID，请参见[AddRecordTemplate](~~193625~~)。
     * @example `76dasgb****`
     */
    "TemplateId": string;
    "TaskProfile"?: string;
    "CropMode"?: number;
    "MediaEncode"?: number;
}
