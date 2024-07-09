export interface ModifyHostsActiveAddressTypeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 接口的调用结果。
     */
    Results: {
        /**
         * 接口的调用结果信息。取值：
         * - **OK**：操作成功。
         * - **UNEXPECTED**：未知错误。
         * - **INVALID_ARGUMENT**：请求参数设置错误。
         * - **OBJECT_NOT_FOUND**：操作的对象不存在。
         * - **OBJECT_AlREADY_EXISTS** ：操作的对象已存在。
         * @example `OK`
         */
        Code: string;
        /**
         * 该参数已废弃，无需关注。
         * @example `无`
         */
        Message: string;
        /**
         * 主机ID。
         * @example `1`
         */
        HostId: string;
    }[];
}
