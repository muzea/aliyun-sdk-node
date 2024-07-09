export interface SearchShareLinkRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 限定此次返回资源的数量，取值范围\[1,100\]。如果没有填写，默认取值100。
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
         * 是否返回搜到到的总记录数
         * @example `false`
         */
        return_total_count: boolean;
        /**
         * 排序字段。
         * 默认按照创建时间倒序排列。
         * 枚举值如下：
         * - share_name（分享名称）
         * - updated_at（修改时间）
         * - description（描述）
         * - created_at（创建时间）
         * @example `created_at`
         */
        order_by: string;
        /**
         * 排序方式。
         * 如果是排序字段是created\_at或者updated\_at，则默认是倒序，其他排序字段默认是升序。
         * 枚举值如下：
         * - ASC（升序）
         * - DESC（降序）
         * @example `ASC`
         */
        order_direction: string;
        /**
         * 分享创建者（user_id）
         * 1）如果不指定, 那么会根据用户本身的权限进行查询
         * 1.1 网盘管理员/超管：所有成员
         * 1.2 团队管理员：团队成员
         * 1.3 普通用户：自身
         * 2）如果指定, 那么只能指定那些有权限的成员, 参考1）
         */
        creators: string[];
        /**
         * 查询条件
         * 1）支持字段：
         * 1.1 created\_at 创建时间
         * 1.2 updated\_at 更新时间
         * 1.3 share\_name\_for\_fuzzy 分享名, 支持模糊匹配（match）
         * 1.4 status 分享状态,
         * 枚举值 enabled（分享中）/disabled（已取消）
         * 1.5 expired\_time 超时时间
         * 永不过期：expired\_time='1970-01-01T00:00:00', 返回的expiration=""
         * expired_time<'1970-01-02T00:00:00'系统保留使用,不表示具体时间
         * @example `created_at>='2022-01-18T02:50:00' and created_at<'2022-01-19T09:45:28' and share_name_for_fuzzy match 'HD.mp4' and status in ['enabled', 'disabled'] and expired_time='1970-01-01T00:00:00'`
         */
        query: string;
    };
}
