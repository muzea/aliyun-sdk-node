export interface GetTestcaseListResponse {
    /**
     * 总数
     * @example `10`
     */
    totalCount: number;
    /**
     * 分页Token，没有下一页则为空
     * @example `""`
     */
    nextToken: string;
    /**
     * 每页数量
     * @example `20`
     */
    maxResults: number;
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
    testcase: {
        /**
         * 测试用例Id，测试用例唯一标识
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        identifier: string;
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
             * @example `12xxxxx456`
             */
            assignedToIdenttifier: string;
            /**
             * 负责人姓名
             * @example `人员名称`
             */
            name: string;
        };
        /**
         * 用例库信息
         */
        space: {
            /**
             * 用例库id，用例库唯一标识
             * @example `22c32972b853cd703dbf0efe4c`
             */
            spaceIdentifier: string;
            /**
             * 空间类型
             * @example `TestRepo`
             */
            type: string;
        };
        /**
         * 测试用例的类型id
         * @example `Req`
         */
        categoryIdentifier: string;
        /**
         * 创建时间
         * @example `1621578648000`
         */
        gmtCreate: number;
        /**
         * 自定义字段数组
         */
        customFields: {
            /**
             * 字段id，自定义字段唯一标识
             * @example `85702b33f14bfa82cb458173ba`
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
        /**
         * 标签数据数组
         */
        tags: {
            /**
             * 标签id，标签唯一标识
             * @example `85702b33f14bxxxxxx58173ba`
             */
            tagIdentifier: string;
            /**
             * 标签名称
             * @example `标签名称`
             */
            name: string;
        }[];
    }[];
}
