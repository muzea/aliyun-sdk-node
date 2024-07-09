export interface UpdateGroupResponse {
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
         * @example `NewDev-Team`
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
     * @example `EC6647CC-0A36-EC7A-BA72-CC81BF3DE182`
     */
    RequestId: string;
}
