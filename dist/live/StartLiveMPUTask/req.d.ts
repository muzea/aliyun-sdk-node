export interface StartLiveMPUTaskRequest {
    /**
     * 应用ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 频道ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourChannelId`
     */
    "ChannelId": string;
    /**
     * 任务ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大55字符。此ID为旁路转推的标识，需保证唯一。
     * @example `yourTaskId`
     */
    "TaskId": string;
    /**
     * 混流模式。取值：
     * - **0**：单路转推，不混流转码，仅转推原始单路流，无需配置混流转码参数。
     * - **1（默认值）**：混流转码转推。
     * @example `0`
     */
    "MixMode": string;
    /**
     * 直播推流地址，仅支持RTMP协议，仅支持传单个地址，最大长度不超过2048个字符。生成规则请参见[推流地址和播放地址](~~199339~~)。
     * >- 对已开防盗链鉴权的域名，需要在推流地址中包含鉴权串。
     * - 禁止同一个StreamURL在不同任务中同时使用。
     * - 任务停止10S之内，禁止使用同一个StreamURL。
     * @example `rtmp://example.com/live/stream`
     */
    "StreamURL": string;
    /**
     * 请求的混流服务所在区域。取值：
     * - **CN-Shanghai<props="china"><ph>（默认值）</ph></props>**：上海。
     * - **AP-Singapore<props="intl"><ph>（默认值）</ph></props>**：新加坡。
     * - **EMAA-Saudi**：沙特。
     * @example `CN-Shanghai`
     */
    "Region"?: string;
    /**
     * 单流转推参数，单流转推（MixMode=0）时必填。需要混流转码时不填。
     */
    "SingleSubParams"?: {
        /**
         * 单流转推模式下视频输入流类型，仅针对视频流（StreamType=2）有效。取值：
         * - **camera（默认值）**：摄像头。
         * - **shareScreen**：屏幕共享。
         * @example `camera`
         */
        SourceType: string;
        /**
         * 单流转推模式下转推流类型。取值：
         * - **0（默认值）**：转推原始流。
         * - **1**：仅转推音频流。
         * - **2**：仅转推视频流。
         * @example `0`
         */
        StreamType: string;
        /**
         * 单流转推的用户ID，一次只能转推一路流。
         * @example `yourSubUserId`
         */
        UserId: string;
    };
    /**
     * 混流转码转推参数，混流转码转推（MixMode=1）时必填。需要单流转推时不填。
     */
    "TranscodeParams"?: {
        /**
         * 混流全局背景图。
         */
        Background: {
            /**
             * 子画面输出时的显示模式：
             * - **0**：缩放并显示黑底。
             * - **1**（默认）：裁剪。
             * @example `1`
             */
            RenderMode: string;
            /**
             * 全局背景图URL，最大长度不超过2048个字符。
             * @example `yourImageUrl`
             */
            URL: string;
        };
        /**
         * 转推输出的编码参数。
         */
        EncodeParams: {
            /**
             * 是否为纯音频，取值：
             * - **true**：纯音频，仅需要设置音频相关参数。
             * - **false（默认值）**：非纯音频，除VideoCodec参数与EnhancedParam参数外，其它参数均不能为空。
             * @example `false`
             */
            AudioOnly: string;
            /**
             * 音频码率，取值范围：\[8, 500\]，单位：kbps。
             * @example `128`
             */
            AudioBitrate: string;
            /**
             * 音频声道数，取值：1、2。
             * @example `2`
             */
            AudioChannels: string;
            /**
             * 音频采样率，取值：8000、16000、32000、44100、48000，单位：Hz。
             * @example `44100`
             */
            AudioSampleRate: string;
            /**
             * 视频编码格式。默认值H.264。
             * @example `H.264`
             */
            VideoCodec: string;
            /**
             * 视频码率，取值范围：\[1, 10000\]，单位：kbps。
             * @example `3500`
             */
            VideoBitrate: string;
            /**
             * 视频帧率，取值范围：\[1, 60\]，单位：fps。
             * @example `25`
             */
            VideoFramerate: string;
            /**
             * 视频GOP，取值范围：\[1, 60\]。
             * @example `20`
             */
            VideoGop: string;
            /**
             * 视频高，取值范围：\[0, 1920\]，单位：px。
             * @example `1000`
             */
            VideoHeight: string;
            /**
             * 视频宽，取值范围：\[0, 1920\]，单位：px。
             * @example `1920`
             */
            VideoWidth: string;
            /**
             * 编码增强参数，JSON字符串，目前支持的可选配置包括profile与preset。
             * - profile：编码级别。当视频编码格式为H.264时，profile支持的可选值包括："baseline", "main", "high"。
             * - preset：调节编码速度和质量的平衡。preset支持的可选值包括："ultrafast", "superfast", "veryfast", "faster", "fast", "medium", "slow", "slower", "veryslow" "placebo"。每个值代表了一种编码速度与输出视频质量的策略，从"ultrafast"（极快，编码速度优先）到"placebo"（追求极致质量，编码极慢）。
             * > 例如设置superfast，主要用于实时通讯领域。建议非编码器专业技术人员，不设置该选项。
             * @example `{"profile": "high", "preset": "veryfast"}`
             */
            EnhancedParam: string;
        };
        /**
         * 视频布局信息。
         * > 视频转码时，需要指定视频布局信息，包括布局坐标(X，Y)，布局窗格(Width，Height)，叠放顺序(ZOrder)；纯音频转码时，禁止填写视频布局信息。
         */
        Layout: {
            /**
             * 混流用户窗格信息。
             */
            UserPanes: {
                /**
                 * 该窗格对应的混流用户信息，不填时后台按照上行主播的进房顺序自动填充。
                 * >- 如果指定混流用户信息，该用户信息需要已在TranscodeParams.UserInfos参数中配置。
                 * - 仅针对原始流和视频流有效。
                 */
                UserInfo: {
                    /**
                     * 混流转码模式下视频输入流类型，仅针对视频流（StreamType=2）有效。取值：
                     * - **camera（默认值）**：摄像头。
                     * - **shareScreen**：屏幕共享。
                     * @example `camera`
                     */
                    SourceType: string;
                    /**
                     * 混流用户ID。
                     * @example `yourSubUserId`
                     */
                    UserId: string;
                };
                /**
                 * 窗格高，归一化百分比。
                 * @example `0.2632`
                 */
                Height: string;
                /**
                 * 窗格宽，归一化百分比。
                 * @example `0.3564`
                 */
                Width: string;
                /**
                 * 坐标X，归一化百分比。
                 * @example `0.2456`
                 */
                X: string;
                /**
                 * 坐标Y，归一化百分比。
                 * @example `0.3789`
                 */
                Y: string;
                /**
                 * 叠放顺序，0为最底层，1层在0层之上，以此类推。
                 * @example `0`
                 */
                ZOrder: string;
                /**
                 * 子画面的背景图URL，最大长度不超过2048个字符。当用户关闭摄像头或未进入房间时，会在布局位置填充为此图片。
                 * @example `yourImageUrl`
                 */
                BackgroundImageUrl: string;
                /**
                 * 子画面输出时的显示模式，取值：
                 * - **0**：缩放并显示黑底。
                 * - **1（默认值）**：裁剪。
                 * @example `1`
                 */
                RenderMode: string;
            }[];
        };
        /**
         * 混流用户信息，不指定用户则所有用户混流。
         */
        UserInfos: {
            /**
             * 混流转码模式下视频输入流类型，仅针对视频流（StreamType=2）有效。取值：
             * - **camera（默认值）**：摄像头。
             * - **shareScreen**：屏幕共享。
             * @example `camera`
             */
            SourceType: string;
            /**
             * 混流转码模式下转推流类型。取值：
             * - **0（默认值）**：转推原始流。
             * - **1**：仅转推音频流。
             * - **2**：仅转推视频流。
             * @example `0`
             */
            StreamType: string;
            /**
             * 混流用户ID。
             * @example `yourSubUserId`
             */
            UserId: string;
        }[];
    };
    /**
     * SEI配置参数。
     */
    "SeiParams"?: {
        /**
         * 布局和音量SEI，该参数内容可以为空，表示携带默认的布局和音量SEI。
         */
        LayoutVolume: {
            /**
             * 发送IDR关键帧时是否确保携带SEI，取值：
             * - **0**：不确保带SEI。
             * - **1**：确保带SEI。
             * @example `0`
             */
            FollowIdr: string;
            /**
             * SEI发送间隔，取值范围：\[1000, 5000\]，单位：毫秒。
             * @example `1000`
             */
            Interval: string;
        };
        /**
         * 透传SEI。
         */
        PassThrough: {
            /**
             * 发送IDR关键帧时是否确保携带SEI，取值：
             * - **0**：不确保带SEI。
             * - **1**：确保带SEI。
             * @example `0`
             */
            FollowIdr: string;
            /**
             * SEI发送间隔，取值范围：\[1000, 5000\]，单位：毫秒。
             * @example `1000`
             */
            Interval: string;
            /**
             * 透传SEI的payload内容。
             * @example `yourPayloadContent`
             */
            PayloadContent: string;
            /**
             * 透传SEI的payload内容对应的key值。不设置时，key为默认值udd。
             * @example `yourPayloadContentKey`
             */
            PayloadContentKey: string;
        };
        /**
         * SEI消息的自定义payload_type，取值范围100-254。不设置时，SEI的payload_type为默认值为5。
         * @example `100`
         */
        PayloadType: string;
    };
}
