export interface ResumeVideoFileRequest {
    /**
     * 通话ID。您可以在[SingleCallByVideo](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-singlecallbyvideo?spm)接口返回参数中获取CallId。
     * @example `100001616500^1000018****`
     */
    "CallId"?: string;
    /**
     * 恢复视频播放的手机号码。
     * @example `159****0000`
     */
    "CalledNumber": string;
}
