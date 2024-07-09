export interface RefreshMediaPlayUrlsRequest {
    /**
     * 需要刷新或预热的音/视频ID。支持设置一个或多个，多个ID之前使用半角逗号（,）分隔，最多支持20个。
     * 音/视频ID可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[获取音视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `ca3a8f6e4957b658067095869****, a6e49sfgd23p5g9ja7095863****`
     */
    "MediaIds": string;
    /**
     * 提交的任务类型。取值：
     * - **Refresh**：刷新
     * - **Preload**：预热
     * @example `Preload`
     */
    "TaskType": string;
    /**
     * 设置需要刷新或预热的播放流格式。支持设置多个格式，多个格式之间使用半角逗号（,）分隔。若不设置，则默认刷新或预热所有格式的播放流。支持的格式如下：
     * - **mp4**
     * - **m3u8**
     * - **mp3**
     * - **flv**
     * - **webm**
     * - **ts**
     * @example `mp4,m3u8`
     */
    "Formats"?: string;
    /**
     * 设置需要刷新或预热的播放流清晰度。支持设置多个清晰度，多个清晰度之间使用半角逗号（,）分隔。若不设置，则默认刷新或预热所有清晰度的播放流。
     * > 取值必须为[媒资参数说明](~~124671~~)中**清晰度：Definition**所定义的取值。
     * @example `HD, SD`
     */
    "Definitions"?: string;
    /**
     * 设置需要刷新或预热的播放流类型。支持设置多个播放流类型，多个播放流类型之间使用半角逗号（,）分隔。若不设置，则默认刷新或预热所有的播放流类型。取值：
     * - **video**：视频
     * - **audio**：音频
     * @example `video`
     */
    "StreamType"?: string;
    /**
     * 设置刷新或预热的结果类型。取值：
     * - **Single**（默认）：每种清晰度和格式只刷新或预热一路最新转码完成的流。
     * - **Multiple**：每种清晰度和格式刷新或预热所有转码完成的流。
     * @example `Single`
     */
    "ResultType"?: string;
    /**
     * 设置是否刷新或预热M3U8播放流的TS文件的播放链接。取值：
     * - **false**（默认）：否
     * - **true**：是
     * @example `false`
     */
    "SliceFlag"?: boolean;
    /**
     * 设置刷新或预热M3U8播放流的TS文件播放链接的个数。每个M3U8播放流仅会刷新前N个TS文件的播放链接。取值范围为1~20，默认值为5。
     * @example `5`
     */
    "SliceCount"?: number;
    /**
     * 自定义设置。为JSON字符串，支持消息回调、上传加速等设置。更多信息，请参见[UserData](~~86952~~)。
     * > - 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。控制台配置HTTP回调的操作，请参见[回调设置](~~86071~~)。
     * > - 如需使用上传加速功能，请提交工单申请开通，更多信息，请参见[上传相关说明](~~55396~~)。关于如何提交工单，请参见[联系我们](~~464625~~)。
     * @example `{"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"}, "Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
}
