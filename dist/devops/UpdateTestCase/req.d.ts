export interface UpdateTestCaseRequest {
    /**
     * 企业id
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 测试用例id，测试用例唯一标识
     * @example `4e22xxxxxxxxc64c16037fe76`
     */
    "testcaseIdentifier": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 更新测试用例属性请求，数组形式
         */
        updateWorkitemPropertyRequest: {
            /**
             * 需要更新的测试用例字段id
             * @example `tc.type`
             */
            fieldIdentifier: string;
            /**
             * 需要更新字段的属性值 (注：1.如果是人员类型的值必须要填写aliyunPK。2.如果是含有待选值的字段，填写相应的待选值的id。 3.如果多个值，需要用" , "进行分割，拼接成一个字符串。
             * @example `0a032xx28107xxxx53e87a9`
             */
            fieldValue: string;
        }[];
    };
}
