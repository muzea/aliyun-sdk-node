export interface QueryUserGroupMemberResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `48C930FF-DFCF-5986-902B-E24C202E2443`
     */
    RequestId: string;
    /**
     * 用户组成员列表的请求结果。
     */
    Result: {
        /**
         * 所属用户组名称。
         * @example `财务组`
         */
        ParentUserGroupName: string;
        /**
         * 是否为用户组。取值范围：
         * - true：用户组
         * - false：用户
         * @example `true`
         */
        IsUserGroup: boolean;
        /**
         * 用户组名称或用户组成员昵称 。
         * @example `小刘的测试用户组`
         */
        Name: string;
        /**
         * 所属用户组ID。
         * @example `2fe4fbd8-588f-489a-b3e1-e92c7af0****`
         */
        ParentUserGroupId: string;
        /**
         * 用户组ID或用户组成员ID。
         * @example `3d2c23d4-2b41-4af8-a1f5-f6390f32****`
         */
        Id: string;
    }[];
}
