export interface GetInstanceMissingIndexListRequest {
    /**
     * 数据库实例ID。
     * @example `rm-t4nfalp2ap421****`
     */
    "InstanceId": string;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `1`
     */
    "PageNo"?: string;
    /**
     * 每页最大记录数，默认值为10。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 对象名。
     * @example `bas_customer`
     */
    "ObjectName"?: string;
    /**
     * 表总空间筛选条件。单位为MB。输入格式为`运算符+分割服“|”+表总空间大小`，例如筛选条件设置为查询总空间大于等于100M的表时，输入：`>=|100`。
     * @example `>=|100`
     */
    "ReservedSize"?: string;
    /**
     * 表记录数筛选条件。输入格式为`运算符+分割服“|”+表记录数`，例如`>=|100`。
     * @example `>=|100000`
     */
    "RowCount"?: string;
    /**
     * 总页数筛选条件。输入格式为`运算符+分割服“|”+总页数`，例如`>=|100`。
     * @example `>=|100`
     */
    "ReservedPages"?: string;
    /**
     * 索引个数（索引缺失表目前所拥有的索引个数）筛选条件。输入格式为`运算符+分割服“|”+索引个数`，例如`>=|100`。
     * @example `>=|8`
     */
    "IndexCount"?: string;
    /**
     * 编译次数筛选条件。输入格式为`运算符+分割服“|”+编译次数`，例如`>=|100`。
     * @example `>=|10000`
     */
    "UniqueCompiles"?: string;
    /**
     * 查找次数筛选条件。输入格式为`运算符+分割服“|”+查找次数`，例如`>=|100`。
     * @example `>=|1000`
     */
    "UserSeeks"?: string;
    /**
     * 扫描次数筛选条件。输入格式为`运算符+分割服“|”+扫描次数`，例如`>=|100`。
     * @example `>=|10000`
     */
    "UserScans"?: string;
    /**
     * 平均开销节约百分比（预测建立了缺失索引后，用户的平均CPU开销节约百分比。）筛选条件。输入格式为`运算符+分割服“|”+平均开销节约百分比`，例如筛选条件设置为查询平均开销节约百分比小于等于10%时，输入：`<=|10`。
     * @example `<=|8`
     */
    "AvgTotalUserCost"?: string;
    /**
     * 性能提升百分比（预测建立了缺失索引后，用户的平均查询性能提升百分比。）筛选条件。输入格式为`运算符+分割服“|”+性能提升百分比`，例如筛选条件设置为查询性能提升百分比大于等于100%时，输入：`>=|100`。
     * @example `>|10000`
     */
    "AvgUserImpact"?: string;
    /**
     * 索引最后查找时间的开始时间。格式为Unix时间戳，单位为毫秒。
     * @example `1679414400000`
     */
    "StartTime"?: string;
    /**
     * 索引最后查找时间的结束时间。格式为Unix时间戳，单位为毫秒。
     * @example `1681869544000`
     */
    "EndTime"?: string;
}
