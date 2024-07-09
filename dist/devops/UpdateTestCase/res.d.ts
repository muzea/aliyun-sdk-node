export interface UpdateTestCaseResponse {
    /**
     * Id of the request
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
     * @example `""`
     */
    errorCode: string;
    /**
     * 是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 测试用例对象
     */
    Testcase: {
        /**
         * 测试用例id
         * @example `c7f7033b021ead52cc42721382`
         */
        identifier: string;
        /**
         * 标题
         * @example `测试用例标题`
         */
        subject: string;
        /**
         * 负责人信息
         */
        assignedTo: {
            /**
             * 用户Id
             * @example `1316xxxxxx8624xxx`
             */
            assignIdentifier: string;
            /**
             * 用户名称
             * @example `用户姓名`
             */
            name: string;
            /**
             * 人员角色id
             * @example `xxxxxxxewdds12xxx
            `
             */
            tbRoleId: string;
        };
        /**
         * 用例库id
         * @example `1e7d7a412b91a2144ec4aa8411`
         */
        spaceIdentifier: string;
        /**
         * 空间类型，为TestRepo
         * @example `TestRepo`
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
             * @example `1316xxxxxx8624xxx`
             */
            createIdentifier: string;
            /**
             * 创建者名称
             * @example `xxxxxxx`
             */
            name: string;
        };
        /**
         * 修改人
         */
        modifier: {
            /**
             * 修改者id
             * @example `1316xxxxxx8624xxx`
             */
            modifyIdentifier: string;
            /**
             * 修改者名称
             * @example `xxxxxxx`
             */
            name: string;
        };
        /**
         * 目录信息
         */
        directory: {
            /**
             * 目录id
             * @example `e27b8eace6501ce51cf5d56784`
             */
            directoryIdentifier: string;
            /**
             * 目录名称
             * @example `全部用例目录`
             */
            name: string;
            /**
             * 用例完整目录名
             */
            pathName: string[];
            /**
             * 子目录id
             * @example `2973f597c14c6f533fffdcd05c`
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
                 * @example `3354596c7b3004480b635acf95`
                 */
                preIdentifier: string;
                /**
                 * 前置条件内容
                 * @example `前置条件内容`
                 */
                preContent: string;
                /**
                 * 前置条件格式
                 * @example `MARKDOWN`
                 */
                preContentType: string;
            };
            /**
             * 测试步骤对象
             */
            stepContent: {
                /**
                 * 测试步骤id
                 * @example `ad504e6cdcd2165b28eb1e1b9f`
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
                 * @example `685340d13127b01185335bd360`
                 */
                expectIdentifier: string;
                /**
                 * 预期结果内容
                 * @example `预期结果内容`
                 */
                expectContent: string;
                /**
                 * 预期结果格式
                 * @example `MARKDOWN`
                 */
                expectContentType: string;
            };
        };
    };
}
