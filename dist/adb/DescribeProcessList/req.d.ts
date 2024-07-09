export interface DescribeProcessListRequest {
    /**
     * 集群ID。
     * @example `am-bp11q28kvl688****`
     */
    "DBClusterId": string;
    /**
     * 是否展示完整的SQL语句。取值说明：
     * - **True**：展示完整的SQL语句。
     * - **False**：只展示SQL语句的前100个字符。
     * > 默认值False。
     * @example `True`
     */
    "ShowFull"?: boolean;
    /**
     * 按运行时间过滤，展示大于该运行时间的查询。单位：秒。
     * @example `5`
     */
    "RunningTime"?: number;
    /**
     * 按用户名过滤。
     * @example `test`
     */
    "User"?: string;
    /**
     * 过滤关键字，目前仅支持过滤**SELECT**。
     * @example `SELECT`
     */
    "Keyword"?: string;
    /**
     * 按指定字段排序，JSON格式，`[{"Field":"Time","Type":"Desc" },{ "Field":"User", "Type":"Asc" }]`，取值说明：
     * - **Field**：需要排序的字段名，支持Time，User，Host，DB字段。
     * - **Type**：排序类型，**Desc**为降序，**Asc**为升序。
     * @example `[ { "Field":"Time","Type":"Desc" },  { "Field":"User", "Type":"Asc" }]`
     */
    "Order"?: string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
}
