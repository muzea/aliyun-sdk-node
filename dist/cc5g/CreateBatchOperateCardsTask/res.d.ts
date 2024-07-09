export interface CreateBatchOperateCardsTaskResponse {
    /**
     * 请求id。
     * @example `1651FBB6-4FBF-49FF-A9F5-DF5D696C7EC6`
     */
    RequestId: string;
    /**
     * 批量操作任务id。
     * @example `boct-xxxx`
     */
    BatchOperateCardsTaskId: string;
    /**
     * 批量操作结果的文件路径。
     * @example `https://examplebucket.oss-eu-central-1.aliyuncs.com/***`
     */
    OperateResultOssFilePath: string;
}
