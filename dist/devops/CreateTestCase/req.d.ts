export interface CreateTestCaseRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 测试用例标题
         * @example `测试工作项`
         */
        subject: string;
        /**
         * 负责人id
         * @example `19xxxx31947xxxx`
         */
        assignedTo: string;
        /**
         * 用例库id
         * @example `asd345xxxxx9q9845xxxxx34`
         */
        spaceIdentifier: string;
        /**
         * 目录id
         * @example `fdd395xxxxx9q9845xxxxx23
        `
         */
        directoryIdentifier: string;
        /**
         * 用例优先级
         * @example `ik3dexxxxxfdfds1xxxxx23`
         */
        priority: string;
        /**
         * 标签id数组
         */
        tags: string[];
        /**
         * 自定义字段列表
         */
        fieldValueList: {
            /**
             * 字段id
             * @example `6aexxxxxa1d98c09c60xxxx16`
             */
            fieldIdentifier: string;
            /**
             * 字段值
             * @example `77c7fb03c4186c8691d6...`
             */
            value: string;
        }[];
        /**
         * 测试用例步骤内容信息
         */
        testcaseStepContentInfo: {
            /**
             * 前置条件
             * @example `前置条件内容`
             */
            precondition: string;
            /**
             * 测试步骤格式，只有表格和文本两种形式
             * @example `TEXT`
             */
            stepType: string;
            /**
             * 测试用例步骤与内容，如果该内容为文本形式，则stepResultList只会取第一组值，并且可以给步骤内容和预期结果设置格式；如果该内容为表格形式，则会取到每一组步骤和内容值，但是无法设置步骤内容和预期结果的格式。
             */
            stepResultList: {
                /**
                 * 测试步骤
                 * @example `测试第一步骤`
                 */
                step: string;
                /**
                 * 测试内容
                 * @example `测试第一步预期结果`
                 */
                expected: string;
            }[];
        };
    };
}
