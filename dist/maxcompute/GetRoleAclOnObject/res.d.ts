export interface GetRoleAclOnObjectResponse {
    /**
     * 请求id
     * @example `0bc1366d16686529650188023ef87f`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 对象名称
         * @example `tableA`
         */
        name: string;
        /**
         * 对象操作
         */
        actions: string[];
    };
}
