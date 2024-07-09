export interface QueryIProductionJobResponse {
    /**
     * 算法名称。取值：
     * - **VideoH2V**：视频横转竖。
     * - **VideoDelogo**：视频去图标。
     * - **Cover**：智能封面。
     * - **VideoClip**：视频摘要。
     * - **ImageH2V**：横转竖。
     * - **ImageDelogo**：图片去图标。
     * - **CaptionExtraction**：字幕提取。
     * - **VideoDetext**：视频去字幕。
     * - **VideoGreenScreenMatting**：绿幕抠图。
     * - **MusicSegmentDetect**：副歌检测。
     * - **AudioMixing**：混音处理。
     * - **VideoSplit**：PPT拆条。
     * - **AudioBeatDetection**：节奏检测。
     * - **ImageCartoonize**：3D风格、人脸风格化（需使用人脸风格化的功能请联系钉钉号：yuanzhigao1209对接）。
     * - **AudioQualityAssessment**：音质检测。
     *     > 音质检测输入音频支持16bit量化的WAV音频文件，支持单双声道，支持的采样率范围为8000~48000Hz。
     * @example `ImageCartoonize`
     */
    FunctionName: string;
    /**
     * 输入文件的OSS Bucket。
     * @example `oss://example-****.oss-cn-hangzhou.aliyuncs.com/example.mp4`
     */
    Input: string;
    /**
     * 请求ID。
     * @example `D127C68E-F1A1-4CE5-A874-8FF724881A12`
     */
    RequestId: string;
    /**
     * 用户业务数据。
     * @example `null`
     */
    UserData: string;
    /**
     * 作业状态。取值：
     * - Queuing：排队中。
     * - Analysing：分析中。
     * - Fail：失败。
     * - Success：成功。
     * @example `Success`
     */
    State: string;
    /**
     * 输出文件的OSS Bucket。
     * @example `oss://example-****.oss-cn-hangzhou.aliyuncs.com/iproduction/{source}-{timestamp}-{sequenceId}.srt`
     */
    Output: string;
    /**
     * 作业管道ID。
     * @example `39f8e0bc005e4f309379701645f4****`
     */
    PipelineId: string;
    /**
     * 算法作业参数。
     * @example `{mode:"gif"}`
     */
    JobParams: string;
    /**
     * 作业ID。
     * @example `88c6ca184c0e432bbf5b665e2a15****`
     */
    JobId: string;
    /**
     * 作业结果详细信息。更多信息请参见[智能生产接口参数补充说明](~~352026~~)。
     * @example `{"Code":"Success","Data":"{\"result\":[{\"file\":\"iproduction/test-result.jpg\"},{\"file\":\"iproduction/test-origin.jpg\"}]}","Message":"Successful."}`
     */
    Result: string;
}
