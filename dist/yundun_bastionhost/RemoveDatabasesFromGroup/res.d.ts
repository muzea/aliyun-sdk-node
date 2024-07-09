export interface RemoveDatabasesFromGroupResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 接口的调用结果信息。
     */
    Results: {
        /**
         * 错误码，OK表示成功，其他表示错误。
         * @example `OK`
         */
        Code: string;
        /**
         * 数据库实例ID。
         * @example `20`
         */
        DatabaseId: string;
        /**
         * 资产组ID。
         * @example `1`
         */
        HostGroupId: string;
        /**
         * 错误信息。
         * @example `无`
         */
        Message: string;
    }[];
}
