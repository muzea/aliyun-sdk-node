import { TextModerationRequest } from "./TextModeration/req";
import { TextModerationResponse } from "./TextModeration/res";
import { ImageModerationRequest } from "./ImageModeration/req";
import { ImageModerationResponse } from "./ImageModeration/res";
import { VoiceModerationResultRequest } from "./VoiceModerationResult/req";
import { VoiceModerationResultResponse } from "./VoiceModerationResult/res";
import { VoiceModerationCancelRequest } from "./VoiceModerationCancel/req";
import { VoiceModerationCancelResponse } from "./VoiceModerationCancel/res";
import { VoiceModerationRequest } from "./VoiceModeration/req";
import { VoiceModerationResponse } from "./VoiceModeration/res";
import { DescribeImageResultExtRequest } from "./DescribeImageResultExt/req";
import { DescribeImageResultExtResponse } from "./DescribeImageResultExt/res";
import { VideoModerationRequest } from "./VideoModeration/req";
import { VideoModerationResponse } from "./VideoModeration/res";
import { VideoModerationResultRequest } from "./VideoModerationResult/req";
import { VideoModerationResultResponse } from "./VideoModerationResult/res";
import { DescribeImageModerationResultRequest } from "./DescribeImageModerationResult/req";
import { DescribeImageModerationResultResponse } from "./DescribeImageModerationResult/res";
import { ImageAsyncModerationRequest } from "./ImageAsyncModeration/req";
import { ImageAsyncModerationResponse } from "./ImageAsyncModeration/res";
import { VideoModerationCancelRequest } from "./VideoModerationCancel/req";
import { VideoModerationCancelResponse } from "./VideoModerationCancel/res";
import { FileModerationRequest } from "./FileModeration/req";
import { FileModerationResponse } from "./FileModeration/res";
import { DescribeFileModerationResultRequest } from "./DescribeFileModerationResult/req";
import { DescribeFileModerationResultResponse } from "./DescribeFileModerationResult/res";
import { TextModerationPlusRequest } from "./TextModerationPlus/req";
import { TextModerationPlusResponse } from "./TextModerationPlus/res";
import { UrlAsyncModerationRequest } from "./UrlAsyncModeration/req";
import { UrlAsyncModerationResponse } from "./UrlAsyncModeration/res";
import { DescribeUrlModerationResultRequest } from "./DescribeUrlModerationResult/req";
import { DescribeUrlModerationResultResponse } from "./DescribeUrlModerationResult/res";

interface GREEN {
    /**
     * 采用动态策略和模型强化变异对抗性，提供多种业务场景的审核服务，识别出多种违规风险
     */
    TextModeration(query: TextModerationRequest): Promise<TextModerationResponse>;
    /**
     * 图片审核增强版API用于识别图像中是否有违反网络内容传播相关规定、影响平台内容秩序、影响用户体验的内容或元素，支持90+的内容风险标签和100+的风险管控项。通过内容安全的图片审核增强版，您可以根据业务所处的行业场景规范或平台内容治理规则，基于API返回的丰富的风险标签和置信分，对具体图片内容制定进一步的审核或治理措施。
     */
    ImageModeration(query: ImageModerationRequest): Promise<ImageModerationResponse>;
    /**
     * 语音审核增强版检测结果获取接口。
     */
    VoiceModerationResult(query: VoiceModerationResultRequest): Promise<VoiceModerationResultResponse>;
    /**
     * 语音审核增强版取消任务接口。
     */
    VoiceModerationCancel(query: VoiceModerationCancelRequest): Promise<VoiceModerationCancelResponse>;
    /**
     * 提交语音审核增强版检测任务。
     */
    VoiceModeration(query: VoiceModerationRequest): Promise<VoiceModerationResponse>;
    /**
     * 图片审核增强版辅助信息API用于获取图片审核增强版API接口识别的更多辅助信息，包含图片文字识别结果、自定义图库命中信息等。
     */
    DescribeImageResultExt(query: DescribeImageResultExtRequest): Promise<DescribeImageResultExtResponse>;
    /**
     * 内容安全视频审核增强版，帮助您检测视频文件中的风险或违规内容。本接口为检测任务提交接口。
     */
    VideoModeration(query: VideoModerationRequest): Promise<VideoModerationResponse>;
    /**
     * 获取视频审核增强版审核任务结果。
     */
    VideoModerationResult(query: VideoModerationResultRequest): Promise<VideoModerationResultResponse>;
    /**
     * 获取图片审核增强版审核任务结果。
     */
    DescribeImageModerationResult(query: DescribeImageModerationResultRequest): Promise<DescribeImageModerationResultResponse>;
    /**
     * 图片异步检测接口，异步检测任务不会实时返回检测结果，您需要通过callback或者轮询的方式获取检测结果。检测结果最长保留3天。
     */
    ImageAsyncModeration(query: ImageAsyncModerationRequest): Promise<ImageAsyncModerationResponse>;
    /**
     * 取消视频直播审核任务
     */
    VideoModerationCancel(query: VideoModerationCancelRequest): Promise<VideoModerationCancelResponse>;
    /**
     * 文档检测
     */
    FileModeration(query: FileModerationRequest): Promise<FileModerationResponse>;
    /**
     * 文档审核结果
     */
    DescribeFileModerationResult(query: DescribeFileModerationResultRequest): Promise<DescribeFileModerationResultResponse>;
    /**
     * 文本审核增强版升级PLUS服务，面向大语言模型的输入指令和生成文字分别提供审核服务，特定的模型输入指令支持检索标准回答，同时开放审核标签的开启和关闭功能。
     */
    TextModerationPlus(query: TextModerationPlusRequest): Promise<TextModerationPlusResponse>;
    /**
     * URL异步检测服务，识别URL链接是否存在欺诈、色情、赌博等风险，守护平台内容生态。
     */
    UrlAsyncModeration(query: UrlAsyncModerationRequest): Promise<UrlAsyncModerationResponse>;
    /**
     * 根据 URL 异步检测返回的 ReqId查询检测结果。
     */
    DescribeUrlModerationResult(query: DescribeUrlModerationResultRequest): Promise<DescribeUrlModerationResultResponse>;
}
export default GREEN;
