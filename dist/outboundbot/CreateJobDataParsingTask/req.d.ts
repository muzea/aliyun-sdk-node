export interface CreateJobDataParsingTaskRequest {
    /**
     * 任务所在文件路径
     * @example `UPLOADED/JOB/024f8cf0-c842-4c01-b74b-c8667e4579c7/e5897675-91f0-4e53-8af8-7e1ce4f2c089_KDC HR- 外呼话术2- 外呼名单模板 - Copy.xlsx`
     */
    "JobFilePath": string;
    /**
     * 实例id
     * @example `b3865dc3-40fa-4afd-9fe4-dc7cda305a24`
     */
    "InstanceId": string;
}
