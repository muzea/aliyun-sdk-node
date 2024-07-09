export interface UpdateWorkspaceUsersRoleResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功，存在部分成员修改成功，部分修改失败的情况，失败的原因参考返回结果中的FailureDetail
     * - false：请求失败，不会持久化任何数据
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `7AAB95D7-2E11-4FE2-94BC-858E4FC0C976`
     */
    RequestId: string;
    /**
     * 返回接口执行结果。
     */
    Result: {
        /**
         * 修改失败的用户数。
         * @example `0`
         */
        Failure: number;
        /**
         * 修改失败的原因。
         */
        FailureDetail: any;
        /**
         * 修改用户的总数。
         * @example `2`
         */
        Total: number;
        /**
         * 修改成功的用户数。
         * @example `2`
         */
        Success: number;
    };
}
