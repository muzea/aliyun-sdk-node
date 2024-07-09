export interface AddDatabasesToGroupResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Results: {
        /**
         * 错误码。错误码为**OK**时，表示加入成功；其他错误码表示加入失败。
         * @example `OK`
         */
        Code: string;
        /**
         * 数据库实例 ID。
         * @example `9`
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
