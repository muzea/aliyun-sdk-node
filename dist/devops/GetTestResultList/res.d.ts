export interface GetTestResultListResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 工作项信息
     */
    testResult: {
        /**
         * 测试结果的id
         * @example `a8bxxxxxxxxxxxxxxxx54`
         */
        testResultIdentifier: string;
        /**
         * 测试结果的状态
         * @example `TO DO`
         */
        testResultStatus: string;
        /**
         * 测试计划执行人对象
         */
        testResultExecutor: {
            /**
             * 执行人唯一标识，aliyunPk
             * @example `1243xxxxx234xx`
             */
            executorIdentifier: string;
            /**
             * 执行人名称
             * @example `人员名称`
             */
            name: string;
        };
        /**
         * 测试结果生成时间
         * @example `1621578648000
        `
         */
        testResultGmtCreate: number;
        /**
         * 测试用例id，测试用例唯一标识
         * @example `943d20fe5e385a08fdd6b593fb`
         */
        testcaseIdentifier: string;
        /**
         * 测试执行结果关联缺陷数量
         * @example `8`
         */
        bugCount: number;
        /**
         * 测试用例标题
         * @example `测试工作项`
         */
        subject: string;
        /**
         * 负责人信息
         */
        assignedTo: {
            /**
             * 负责人id，负责人唯一标识
             * @example `1243xxxxx234xx`
             */
            assignedToIdenttifier: string;
            /**
             * 负责人姓名
             * @example `人员名称`
             */
            name: string;
        };
        /**
         * 测试用例所属的测试库id
         * @example `592531647d7b15f2e98dbc7e27`
         */
        spaceIdentifier: string;
        /**
         * 测试用例的类型id
         * @example `Req`
         */
        categoryIdentifier: string;
        /**
         * 测试用例创建时间
         * @example `1621578648000`
         */
        gmtCreate: number;
        /**
         * 自定义字段数组
         */
        customFields: {
            /**
             * 字段id，自定义字段唯一标识
             * @example `943d20fe5e385a08fdd6b593fb`
             */
            fieldIdentifier: string;
            /**
             * 自定义字段值
             * @example `d7f112f9d023e2108fa1b0d8`
             */
            value: string;
            /**
             * 自定义字段格式
             * @example `Input`
             */
            fieldFormat: string;
            /**
             * 自定义字段类型
             * @example `User`
             */
            fieldClassName: string;
        }[];
    }[];
}
