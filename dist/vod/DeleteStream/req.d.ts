interface DeleteStreamRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `de3a60c5-759c-4cd4-bb79-6cedfeefdf4d`
    */ "VideoId": string;
    /**
    * - 媒体流转码的作业ID列表，多个用逗号分隔，最多支持同一个视频下的20个作业ID。
    * - JobId通过获取播放地址接口(GetPlayInfo)返回的PlayInfo结构体中获取，每个媒体流对应的JobId不同。
    * @example `f1a64a67-98f0-4423-b8bd-057d4a20aa94`
    */ "JobIds": string;
    "OwnerId"?: number;
}
export { DeleteStreamRequest };