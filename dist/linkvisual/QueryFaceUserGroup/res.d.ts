export interface QueryFaceUserGroupResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误描述
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 请求Id
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口返回值
     */
    Data: {
        /**
         * 分页号
         * @example `1`
         */
        PageNo: number;
        /**
         * 分页大小
         * @example `20`
         */
        PageSize: number;
        /**
         * 用户组总数
         * @example `5`
         */
        Total: number;
        /**
         * 用户组列表
         */
        UserGroupList: {
            /**
             * 用户组名称
             * @example `TestUserGroupName`
             */
            UserGroupName: string;
            /**
             * 修改时间
             * @example `2020-05-12 17:12:37`
             */
            ModifiedTime: string;
            /**
             * 用户组Id
             * @example `TestUserGroupId`
             */
            UserGroupId: string;
        }[];
    };
}
