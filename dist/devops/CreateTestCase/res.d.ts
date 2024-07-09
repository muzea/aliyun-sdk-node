export interface CreateTestCaseResponse {
    /**
     * Id of the request
     * @example `18E50717-93A4-53BC-A30D-963F742A1CE6`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * 是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 测试用例实体
     */
    testcase: {
        /**
         * 测试用例id
         * @example `5a73f81c834d013361d92bdcce`
         */
        identifier: string;
        /**
         * 标题
         * @example `标题`
         */
        subject: string;
        /**
         * 负责人信息
         */
        assignedTo: {
            /**
             * 用户Id
             * @example `134xxx343xxxxx`
             */
            assignIdentifier: string;
            /**
             * 用户名称
             * @example `人员名称`
             */
            name: string;
            /**
             * 人员角色id
             * @example `3c2253c22xxxxxxxx53a`
             */
            tbRoleId: string;
        };
        /**
         * 用例库id
         * @example `a18571eba8fe9267cd8375fc06`
         */
        spaceIdentifier: string;
        /**
         * 空间类型，为TestRepo
         * @example `TestRepo
        
        `
         */
        spaceType: string;
        /**
         * 工作项类型id，一般为TestCase
         * @example `TestCase
        
        `
         */
        categoryIdentifier: string;
        /**
         * 创建人
         */
        creator: {
            /**
             * 创建者id
             * @example `134xxx343xxxxx`
             */
            createIdentifier: string;
            /**
             * 创建者名称
             * @example `人员名称`
             */
            name: string;
        };
        /**
         * 修改人
         */
        modifier: {
            /**
             * 修改者id
             * @example `134xxx343xxxxx`
             */
            modifyIdentifier: string;
            /**
             * 修改者名称
             * @example `人员名称`
             */
            name: string;
        };
        /**
         * 目录信息
         */
        directory: {
            /**
             * 目录id
             * @example `0bc1150dcxxxxxxxx04c`
             */
            directoryIdentifier: string;
            /**
             * 目录名称
             * @example `全部目录`
             */
            name: string;
            /**
             * 用例完整目录名
             */
            pathName: string[];
            /**
             * 子目录id
             * @example `0bc1150dcxxxxxxxx04c`
             */
            childIdentifier: string;
        };
        /**
         * 用例详细信息
         */
        detailInfo: {
            /**
             * 步骤类型
             * @example `TEXT/TABLE`
             */
            stepType: string;
            /**
             * 前置条件对象
             */
            precondition: {
                /**
                 * 前置条件id
                 * @example `59253164xxxxxxf2e98dbc7e27`
                 */
                preIdentifier: string;
                /**
                 * 前置条件内容
                 * @example `前置条件内容`
                 */
                preContent: string;
                /**
                 * 前置条件格式
                 * @example `RICHTEXT`
                 */
                preContentType: string;
            };
            /**
             * 测试步骤对象
             */
            stepContent: {
                /**
                 * 测试步骤id
                 * @example `59253164xxxxxxf2e98dbc7e27`
                 */
                stepIdentifier: string;
                /**
                 * 测试步骤内容
                 * @example `测试步骤内容`
                 */
                stepContent: string;
                /**
                 * 测试步骤格式
                 * @example `RICHTEXT`
                 */
                stepContentType: string;
            };
            /**
             * 测试步骤对象
             */
            expectedResult: {
                /**
                 * 预期结果id
                 * @example `59253164xxxxxxf2e98dbc7e27`
                 */
                expectIdentifier: string;
                /**
                 * 预期结果内容
                 * @example `预期结果`
                 */
                expectContent: string;
                /**
                 * 预期结果格式
                 * @example `RICHTEXT`
                 */
                expectContentType: string;
            };
        };
    };
}
