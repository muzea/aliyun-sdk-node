export interface SkipVideoFileRequest {
    /**
     * 通话ID。您可以在[SingleCallByVideo](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-singlecallbyvideo?spm)接口返回参数中获取CallId。
     * @example `116012854210^10281427****`
     */
    "CallId"?: string;
    /**
     * 跳转到对应的时间播放视频，单位：毫秒。
     * @example `04:02:01`
     */
    "SkipTimes": number;
    /**
     * 预留给调用方使用的ID。最终会通过在回执消息中将此ID带回给调用方。
     * 字符串类型，长度为1~15个字节。
     * @example `PR0210428****`
     */
    "OutId"?: string;
    /**
     * 接收视频播放的手机号码。
     * @example `159****0000`
     */
    "CalledNumber": string;
}
