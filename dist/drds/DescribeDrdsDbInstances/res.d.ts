export interface DescribeDrdsDbInstancesResponse {
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 请求ID。
     * @example `2F7F8080-9132-4279-85D0-B7E5C4305162`
     */
    RequestId: string;
    /**
     * RDS主实例总数。
     * @example `1`
     */
    Total: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    DbInstances: {
        /**
         * 数据库下的存储实例列表。
         */
        DbInstance: {
            /**
             * 存储实例过期时间。
             * @example `1237486127634`
             */
            ExpireTime: string;
            /**
             * 付费类型。
             * @example `PostPaid`
             */
            PayType: string;
            /**
             * - 0：创建中
             * - 1：运行中
             * - 3：删除中
             * - 5：重启中
             * - 6：升降级中
             * - 7：备份中
             * - 8：内外网切换中
             * - 9：迁移中
             * - 11：迁移数据中
             * - 12：生成灾备实例中
             * - 13：数据导入中
             * - 14：从其他 RDS 实例导入数据中
             * - 15：容灾切换中
             * - 16：创建临时实例中
             * - 17：网络创建中
             * - 18：实例克隆中
             * - 19：链路切换中
             * - 20：只读实例迁移中
             * @example `1`
             */
            DBInstanceStatus: string;
            /**
             * 网络类型。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * 端口。
             * @example `3306`
             */
            Port: number;
            /**
             * 存储引擎版本，比如RDS for MySQL的5.7、5.6、5.5。
             * @example `5.7`
             */
            EngineVersion: string;
            /**
             * 资源ID。
             * @example `dm-hbgau1zp****`
             */
            DmInstanceId: string;
            /**
             * 存储实例的链接地址，调用对应存储（比如RDS）接口返回的链接地址。
             * @example `rm-bp1t1mk5a5b******.mysql.rds.aliyuncs.com`
             */
            ConnectUrl: string;
            /**
             * 在数据库中的读写权重。
             * @example `30`
             */
            ReadWeight: number;
            /**
             * 是RDS主实例还是只读实例。
             * @example `Primary`
             */
            RdsInstType: string;
            /**
             * 预付费实例剩余过期天数。
             * @example `0`
             */
            RemainDays: number;
            /**
             * 存储实例ID。
             * @example `rm-bp1t1mk5a5bdj****`
             */
            DBInstanceId: string;
            /**
             * 存储实例类型，仅支持RDS。
             * @example `RDS`
             */
            DbInstType: string;
            /**
             * 存储引擎，比如RDS的MySQL。
             * @example `MySQL`
             */
            Engine: string;
            ReadOnlyInstances: {
                /**
                 * 存储实例的只读实例列表。
                 */
                ReadOnlyInstance: {
                    /**
                     * 存储实例过期时间戳。
                     * @example `123421352351234`
                     */
                    ExpireTime: string;
                    /**
                     * 付费类型。
                     * @example `Postpaid`
                     */
                    PayType: string;
                    /**
                     * 存储实例状态。
                     * @example `1`
                     */
                    DBInstanceStatus: string;
                    /**
                     * 实例网络类型。
                     * @example `VPC`
                     */
                    NetworkType: string;
                    /**
                     * 实例访问端口。
                     * @example `3306`
                     */
                    Port: number;
                    /**
                     * 存储实例引擎版本。
                     * @example `5.7`
                     */
                    EngineVersion: string;
                    /**
                     * 资源ID。
                     * @example `dm-hbgau1zp****`
                     */
                    DmInstanceId: string;
                    /**
                     * 存储实例的链接地址，调用对应存储（比如RDS）接口返回的链接地址。
                     * @example `rm-bp1t1mk5a5b******.mysql.rds.aliyuncs.com`
                     */
                    ConnectUrl: string;
                    /**
                     * 实例读写比例。
                     * @example `70`
                     */
                    ReadWeight: number;
                    /**
                     * 实例类型。
                     * @example `RDS`
                     */
                    RdsInstType: string;
                    /**
                     * 保留字段。
                     * @example `**`
                     */
                    InstanceName: string;
                    /**
                     * 实例过期剩余天数。
                     * @example `0`
                     */
                    RemainDays: number;
                    /**
                     * 存储实例类型。
                     * @example `RDS`
                     */
                    DbInstType: string;
                    /**
                     * 存储实例引擎。
                     * @example `MySQL`
                     */
                    Engine: string;
                }[];
            };
        }[];
    };
}
