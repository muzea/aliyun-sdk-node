export interface DescribeDBInstancePromoteActivityResponse {
    /**
     * 实例名称。
     * @example `rm-uf6wjk5******`
     */
    DBInstanceName: string;
    /**
     * 请求ID。
     * @example `94CB8D93-017A-5AE7-A118-6E0F89D93C0A`
     */
    RequestId: string;
    /**
     * 阿里云账号ID。
     * @example `22973492**********`
     */
    AliUid: string;
    /**
     * 数据库引擎类型，取值范围如下：
     * * **MySQL**
     * * **PostgreSQL**
     * * **Oracle**
     * @example `MySQL`
     */
    DBType: string;
    /**
     * 实例ID。可调用[DescribeDBInstances](~~26232~~)获取。
     * @example `rm-uf6wjk5******`
     */
    DBInstanceId: string;
    /**
     * 实例的动态属性。详情请参见[实例动态](~~2391834~~)。
     * @example `1（表示目标实例未参加任何促销活动）`
     */
    IsActivity: string;
    /**
     * - 中国站：26842
     * - 国际站：26888
     * @example `26888`
     */
    Bid: string;
}
