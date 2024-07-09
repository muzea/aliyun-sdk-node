export interface UpdateTestResultRequest {
    /**
     * 企业id
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 测试计划ID，测试计划唯一标识
     * @example `1d79xxxxxx86181xx6c5b`
     */
    "testPlanIdentifier": string;
    /**
     * 测试用例id，测试用例在用例库中的唯一标识
     * @example `4e22xxxxxxxxc64c16037fe76`
     */
    "testcaseIdentifier": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 测试计划中测试用例更新需要的执行人字段
         * @example `131xxx38624xxxx68`
         */
        executor: string;
        /**
         * 测试计划中测试用例更新需要的状态字段
         * @example `TO DO`
         */
        status: string;
    };
}
