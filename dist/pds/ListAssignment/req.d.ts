export interface ListAssignmentRequest {
    /**
     * A short description of struct
     */
    "domain_id"?: string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 管理的资源类型，当前仅支持： RT\_Group，查询某群组的管理员授权列表
         * @example `RT_Group`
         */
        manage_resource_type: string;
        /**
         * 管理的资源ID，比如群组的ID
         * @example `105***b82`
         */
        manage_resource_id: string;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * 默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 限定此次返回资源的数量，取值范围\[1,100\]。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
    };
}
