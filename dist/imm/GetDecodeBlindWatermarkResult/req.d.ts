export interface GetDecodeBlindWatermarkResultRequest {
    /**
     * 项目名称，获取方式请见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 任务类型。
     * @example `DecodeBlindWatermark`
     */
    "TaskType": string;
    /**
     * 任务 ID，获取方式请参见创建提取图片盲水印任务的返回参数。
     * @example `DecodeBlindWatermark-c09b0943-ed79-4983-8dbe-7a882574****`
     */
    "TaskId": string;
}
