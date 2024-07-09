export interface CreateGroupResponse {
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
     * @example `D3F0679E-9757-95DB-AF2D-04D5188C69C5`
     */
    RequestId: string;
}
