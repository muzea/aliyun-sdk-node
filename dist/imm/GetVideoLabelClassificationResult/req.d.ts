export interface GetVideoLabelClassificationResultRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 任务类型。
     * @example `VideoLabelClassification`
     */
    "TaskType": string;
    /**
     * 任务ID，获取方式请参见[创建视频标签检测任务](~~478223~~)的返回参数。
     * @example `VideoLabelClassification-2f157087-91df-4fda-8c3e-232407ec****`
     */
    "TaskId": string;
}
