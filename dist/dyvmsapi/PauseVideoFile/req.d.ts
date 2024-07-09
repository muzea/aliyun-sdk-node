export interface PauseVideoFileRequest {
    /**
     * 通话ID。您可以在[SingleCallByVideo](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-singlecallbyvideo?spm)接口返回参数中获取CallId。
     * @example `116012854210^10281427****`
     */
    "CallId"?: string;
    /**
     * 暂停视频播放的手机号码。
     * @example `159****0000`
     */
    "CalledNumber": string;
}
