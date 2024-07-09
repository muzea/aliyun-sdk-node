export interface DescribeGlobalQuestionRequest {
    /**
     * 实例id
     * @example `7cefbff0-8d50-4d6f-b93c-73cee23c1555`
     */
    "InstanceId": string;
    /**
     * 全局话术所在的话术id
     * @example `b7ee988b-2837-4bc1-9d56-f76e7c831f60`
     */
    "ScriptId": string;
    /**
     * 查询的全局话术id
     * @example `e851e242-ad67-4507-96a2-d4114564dcec`
     */
    "GlobalQuestionId": string;
}
