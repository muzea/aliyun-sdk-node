export interface GetUserInfoResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `ADCD28CC-16DD-0EFC-9A1E-43B518E351C4`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 用户主账号ID。
         * @example `1420754889803588`
         */
        ParentUid: string;
        /**
         * 用户类型。
         * - COMMON_USER：普通用户。
         * - INTERNAL_USER：内部用户。
         * @example `INTERNAL_USER`
         */
        UserType: string;
    };
}
