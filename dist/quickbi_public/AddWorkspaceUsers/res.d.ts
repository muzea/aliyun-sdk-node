export interface AddWorkspaceUsersResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功，存在添加部分成员成功，部分失败的情况，添加失败的原因参考返回结果中的FailureDetail
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
         * 添加失败的用户数。
         * @example `2`
         */
        Failure: number;
        /**
         * 添加失败的原因。
         * @example `{"2046274934845893" : "AE0150010001: This user already exists.", "1213444447906552" : "AE0150010001: This user already exists."}`
         */
        FailureDetail: any;
        /**
         * 添加用户的总数。
         * @example `3`
         */
        Total: number;
        /**
         * 添加成功的用户数。
         * @example `1`
         */
        Success: number;
    };
}
