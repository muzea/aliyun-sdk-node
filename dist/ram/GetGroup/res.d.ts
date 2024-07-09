export interface GetGroupResponse {
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
         * @example `2015-02-11T03:15:21Z`
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
    };
    /**
     * 请求ID。
     * @example `D4065824-E422-3ED6-68B1-1AF7D5C7804C`
     */
    RequestId: string;
}
