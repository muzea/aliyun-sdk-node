export interface ListShareLinkRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 创建者
         * @example `c9b7a5aa04d14ae3867fdc886fa01da4`
         */
        creator: string;
        /**
         * 限定此次返回资源的数量，取值范围\[0,100\]。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * <br>默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * 排序字段。
         * 默认按照创建时间倒序排列。
         * 枚举值如下：
         * - share_name（分享名称）
         * - updated_at（分享修改时间）
         * - description（分享描述）
         * - created_at（分享创建时间）
         * @example `share_name`
         */
        order_by: string;
        /**
         * 排序方式。
         * 如果是排序字段是created_at或者updated_at，则默认是倒序，其他排序字段默认是升序。
         * 枚举值如下：
         * - ASC（升序）
         * - DESC（降序）
         * @example `ASC`
         */
        order_direction: string;
        /**
         * 是否包含已取消的分享
         * @example `true`
         */
        include_cancelled: boolean;
    };
}
