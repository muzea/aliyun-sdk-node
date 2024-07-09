export interface ListGroupsResponse {
    /**
     * 请求ID。
     * @example `065527AA-2F2E-AD7C-7484-F2626CFE4934`
     */
    RequestId: string;
    Groups: {
        /**
         * 用户组信息。
         */
        Group: {
            /**
             * 用户组ID。
             * @example `g-FpMEHiMysofp****`
             */
            GroupId: string;
            /**
             * 更新时间。
             * @example `2015-01-23T12:33:18Z`
             */
            UpdateDate: string;
            /**
             * 用户组名称。
             * @example `Dev-Team`
             */
            GroupName: string;
            /**
             * 备注信息。
             * @example `开发团队`
             */
            Comments: string;
            /**
             * 创建时间。
             * @example `2015-01-23T12:33:18Z`
             */
            CreateDate: string;
        }[];
    };
    /**
     * 请求返回结果是否被截断。取值：
     * - true
     * - false
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `EXAMPLE`
     */
    Marker: string;
}
