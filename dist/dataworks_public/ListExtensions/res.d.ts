export interface ListExtensionsResponse {
    /**
     * Id of the request
     * @example `0000-ABCD-EFG`
     */
    RequestId: string;
    /**
     * 分页信息
     */
    PagingInfo: {
        /**
         * 请求的数据页数，用于翻页。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数
         * @example `10`
         */
        PageSize: number;
        /**
         * 满足条件的数据总条数。
         * @example `12`
         */
        TotalCount: number;
        /**
         * 扩展程序列表
         */
        Extensions: {
            /**
             * 扩展程序状态：
             * 0：测试中,
             * 1：上线中,
             * 3：禁用中,
             * 4：审批中,
             * 5：审批通过,
             * 6：审批不通过
             * @example `0`
             */
            Status: number;
            /**
             * 扩展程序描述
             * @example `这是一个描述`
             */
            ExtensionDesc: string;
            /**
             * 扩展程序名称
             * @example `扩展程序名称`
             */
            ExtensionName: string;
            /**
             * 子账号ID
             * @example `2003****`
             */
            Owner: string;
            /**
             * 唯一的扩展程序码
             * @example `扩展程序码`
             */
            ExtensionCode: string;
            /**
             * 扩展点事件列表
             */
            BindEventList: {
                /**
                 * 事件名称
                 * @example `文件提交前置事件`
                 */
                EventName: string;
                /**
                 * 事件码
                 * @example `commit-file`
                 */
                EventCode: string;
            }[];
        }[];
    };
}
