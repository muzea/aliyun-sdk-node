export interface ListPoliciesResponse {
    /**
     * 数据总条数。
     * @example `2`
     */
    TotalCount: number;
    Policies: {
        /**
         * 权限策略信息。
         */
        Policy: {
            /**
             * 权限策略默认版本。
             * @example `v1`
             */
            DefaultVersion: string;
            /**
             * 权限策略描述。
             * @example `OSS管理员权限`
             */
            Description: string;
            /**
             * 权限策略更新时间。
             * @example `2016-02-11T18:39:12Z`
             */
            UpdateDate: string;
            /**
             * 引用次数。
             * @example `1`
             */
            AttachmentCount: number;
            /**
             * 权限策略名称。
             * @example `OSS-Administrator`
             */
            PolicyName: string;
            /**
             * 权限策略创建时间。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateDate: string;
            /**
             * 权限策略类型。
             * - Custom：自定义策略。
             * - System：系统策略。
             * @example `Custom`
             */
            PolicyType: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `7B8A4E7D-6CFF-471D-84DF-195A7A241ECB`
     */
    RequestId: string;
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
}
