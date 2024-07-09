export interface ListFpShotImportJobRequest {
    /**
     * 作业ID列表，可以从[提交文本导库作业](~~312262~~)的返回参数中获取。一次最多查询10个，用半角逗号（,）分隔。
     * @example `88c6ca184c0e47098a5b665e2a12****,c074b118ace44395a02063a5ab94****`
     */
    "JobIds": string;
}
