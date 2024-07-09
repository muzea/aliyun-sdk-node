export interface PlayVideoFileRequest {
    /**
     * 视频插播文件ID。
     * 您可以在[视频插播文件](https://dyvms.console.aliyun.com/videoFiles/list/slot)页面查看审核通过的视频ID。
     * @example `1120213841979436_20240620155*****5_.mp4`
     */
    "VideoId": string;
    /**
     * 接收视频播放的手机号码。
     * @example `159****0000`
     */
    "CalledNumber": string;
    /**
     * 通话一ID。您可以在[SingleCallByVideo](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-singlecallbyvideo?spm)接口返回参数中获取CallId。
     * > 您可以使用CallId，调用[QueryVideoPlayProgress](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-queryvideoplayprogress?spm)接口查看视频播放进度。
     * @example `116012354148^1028137841****`
     */
    "CallId"?: string;
    /**
     * 预留给调用方的ID，最终会通过回执消息将此ID带回给调用方。
     * 字符串类型，长度限制为1~15个字符。
     * @example `342268*****`
     */
    "OutId"?: string;
    /**
     * 仅在手机端播放视频。取值：
     * - true
     * - false（默认值）
     * @example `false`
     */
    "OnlyPhone"?: boolean;
}
