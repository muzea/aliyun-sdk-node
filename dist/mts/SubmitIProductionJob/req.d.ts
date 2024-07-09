export interface SubmitIProductionJobRequest {
    /**
     * 功能算法名称。各功能算法支持的地域请参见[服务地域](~~43248~~)。取值：
     * - **VideoH2V**：视频横转竖
     * - **VideoDelogo**：视频去图标
     * - **Cover**：智能封面
     * - **VideoClip**：视频摘要
     * - **ImageH2V**：横转竖
     * - **ImageDelogo**：图片去图标
     * - **CaptionExtraction**：字幕提取（算法输入待处理视频的URL，输出提取的字幕文件）
     * - **VideoDetext**：视频去字幕
     * - **VideoGreenScreenMatting**：绿幕抠图（算法输入待抠图视频的URL和替换的背景图片URL，输出合成后的视频）
     * - **MusicSegmentDetect**：副歌检测（输入待处理音频、视频的URL，输出检测出的每一段副歌的起止时间，若检测不到副歌，则返回为空）
     * - **AudioMixing**：混音处理
     * - **AudioBeatDetection**：节奏检测（输入待处理音频、视频的URL，输出检测出的节拍时间列表BeatList和强拍时间列表DownBeatList）
     * - **ImageCartoonize**：3D风格、人脸风格化（如需使用人脸风格化的功能请联系钉钉号：yuanzhigao1209对接）
     * - **AudioQualityAssessment**：音质检测
     * - **FaceBeauty**：视频美颜
     * - **SpeechDenoise**：智能降噪
     *
     *     > 音质检测输入音频支持16bit量化的WAV音频文件，支持单双声道，支持的采样率范围为8000~48000Hz。
     * @example `ImageCartoonize`
     */
    "FunctionName": string;
    /**
     * 算法模型ID。如果为空，则选择对应功能的默认模型（此参数保持为空即可，一般无需传入，直接使用默认模型）。
     * @example `null`
     */
    "ModelId"?: string;
    /**
     * 算法作业参数，JSON对象，不同算法对应参数内容不同。更多信息请参见[智能生产接口参数补充说明](~~352026~~)。
     * @example `{"Model":"gif"}`
     */
    "JobParams"?: string;
    /**
     * 作业调度参数，设置任务调度配置（非必填，保持为空即可）。
     * @example `null`
     */
    "ScheduleParams"?: string;
    /**
     * Callback路径，目前仅支持MNS消息队列。消息队列的路径可以通过**MNS控制台** > **队列列表** > **详情**查看。
     * @example `mns://125340688170****.mns.cn-beijing.aliyuncs.com/queues/example-pipeline`
     */
    "NotifyUrl"?: string;
    /**
     * 用户业务数据，随回调信息回传给回调地址（非必填，保持为空即可）。
     * @example `null`
     */
    "UserData"?: string;
    /**
     * 作业管道ID，可以通过**MPS控制台** > **全局设置** > **管道**获取。用于确认作业回调队列以及提供租户隔离能力。若不传，则使用默认管道，默认作业并发数10，不绑定消息通知。
     * @example `39f8e0bc005e4f309379701645f4****`
     */
    "PipelineId"?: string;
    /**
     * 输入文件的OSS Bucket（目前仅支持OSS路径，且OSS的地域需要与当前MPS所在地域保持一致），可以通过**MPS控制台** > **媒体管理** > **媒体列表**获取或OSS控制台选择对应的Bucke获取路径。
     * > 由于算法不同，Input在某些场景下为必填项。请根据您的实际业务需要选择是否传入此参数。
     * @example `oss://example-****.oss-cn-shanghai.aliyuncs.com/example.mp4`
     */
    "Input"?: string;
    /**
     * 输出文件的OSS Bucket（目前仅支持OSS路径），可以通过**MPS控制台** > **媒体管理** > **媒体列表**获取或OSS控制台选择对应的Bucke获取路径。OSS的地域需要与当前MPS所在地域保持一致。
     * > 格式为：`oss://example-****.oss-cn-shanghai.aliyuncs.com/iproduction/{source}-{timestamp}-{sequenceId}.srt`，其中`{source}`、`{timestamp}`和`{sequenceId}`为占位符，分别填充输入文件名、Unix时间戳和生成序号，占位符不必须，但对于多输出算法，比如智能封面等，需要注意加入序号占位符确保输出文件路径不重复，文件后缀名规则由用户自定义。
     * @example `oss://example-****.oss-cn-shanghai.aliyuncs.com/iproduction/{source}-{timestamp}-{sequenceId}.srt`
     */
    "Output"?: string;
}
