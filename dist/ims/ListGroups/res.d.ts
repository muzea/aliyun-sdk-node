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
             * 用户组显示名称。
             * @example `Dev-Team`
             */
            DisplayName: string;
            /**
             * 用户组ID。
             * @example `740317625433843****`
             */
            GroupId: string;
            /**
             * 更新时间。
             * @example `2020-10-19T12:33:18Z`
             */
            UpdateDate: string;
            /**
             * 用户组名称。
             * @example `dev-team`
             */
            GroupName: string;
            /**
             * 备注。
             * @example `开发团队`
             */
            Comments: string;
            /**
             * 创建时间。
             * @example `2020-10-19T12:33:18Z`
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
     * 当`IsTruncated`为`true`时才有此参数，当返回`true`时，需要继续调用此接口，并且使用`Marker`获取截断后的内容 。
     * @example `EXAMPLE`
     */
    Marker: string;
}
