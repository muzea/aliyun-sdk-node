export interface QueryVideoPlayProgressRequest {
    /**
     * 通话ID。您可以在[SingleCallByVideo](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-singlecallbyvideo?spm)接口返回参数中获取CallId。
     * @example `116004767703^102806****`
     */
    "CallId"?: string;
    /**
     * 查询视频播放进度的手机号码。
     * @example `159****0000`
     */
    "CalledNumber": string;
}
