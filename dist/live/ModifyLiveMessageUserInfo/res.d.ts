export interface ModifyLiveMessageUserInfoResponse {
    /**
     * 对象数组。
     */
    FailList: {
        /**
         * 错误码。
         * @example `440`
         */
        Code: number;
        /**
         * 用户所在的群组ID。若修改失败，则在查询群组用户列表时用户信息不会同步更新。可根据失败原因检查后重新尝试。
         * @example `grouptest2`
         */
        GroupId: string;
        /**
         * 群组修改失败的原因。
         * @example `group not exists or already deleted`
         */
        Reason: string;
        /**
         * 群组修改失败。
         * @example `false`
         */
        Success: boolean;
    }[];
    /**
     * 请求ID。
     * @example `3271ACD2-F143-1204-AFDB-9A87C131****`
     */
    RequestId: string;
    /**
     * 对象数组。
     */
    SuccessList: {
        /**
         * 用户所在的群组ID。若修改成功，则在查询群组用户列表时用户信息会同步更新。
         * @example `grouptest1`
         */
        GroupId: string;
        /**
         * 群组修改成功。
         * @example `true`
         */
        Success: boolean;
    }[];
}
