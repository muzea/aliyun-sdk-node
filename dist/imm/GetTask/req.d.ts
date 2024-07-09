export interface GetTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 任务的类型。取值范围请参见[任务类型列表](~~475313~~)。
     * @example `FileCompression`
     */
    "TaskType": string;
    /**
     * 需要查询的任务ID，该值在创建任务时作为返回参数。
     * @example `FileCompression-2f157087-91df-4fda-8c3e-232407ec*****`
     */
    "TaskId": string;
    /**
     * 是否需要返回创建任务的初始请求参数，默认值为False。
     * @example `True`
     */
    "RequestDefinition"?: boolean;
}
