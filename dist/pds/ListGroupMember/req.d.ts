export interface ListGroupMemberRequest {
    /**
     * A short description of struct
     */
    "domain_id"?: string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 目标群组ID，表示将列举哪个群组下的成员
         * @example `3e5***2c2`
         */
        group_id: string;
        /**
         * 列举的成员类型，不传则两种都返回
         * - user（用户）
         * - group（群组）
         * 注意：群组只能作为一个群组的成员，不能同时成为多个群组的成员。 用户可以同时成为多个群组的成员
         * @example `user`
         */
        member_type: string;
        /**
         * 限定此次返回资源的数量，取值范围[1,100]。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * <br>默认值：100
         * @example `50`
         */
        limit: number;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * <br>默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
    };
}
