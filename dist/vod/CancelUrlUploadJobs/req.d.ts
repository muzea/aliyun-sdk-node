export interface CancelUrlUploadJobsRequest {
    /**
     * 任务ID列表，任务ID（JobId）可以通过[GetPlayInfo](~~56124~~)接口中返回的PlayInfo结构体中获取。
     * - 最多支持10个ID。
     * - 多个ID之间使用半角逗号（,）分隔。
     * > JobIds和UploadUrls必须指定一个，二者同时传入时只处理JobIds。
     * @example `341c92e6c18dc435ee31253685****,0193d395194a83ad6ee2ef27a5b5****`
     */
    "JobIds"?: string;
    /**
     * 上传源视频URL列表。多个URL之间使用半角逗号（,）分隔，最多支持10个。
     * > - 使用前，先进行URL编码。
     * > - JobIds和UploadUrls必须指定一个，二者同时传入时只处理JobIds。
     * @example `http://www.example.aliyundoc.com/***​/video01.mp4,http://www.example.aliyundoc.com/***​/video02.mp4`
     */
    "UploadUrls"?: string;
}
