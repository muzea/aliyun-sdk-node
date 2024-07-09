export interface DescribeDrdsDbInstanceResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `4FE09970-CA69-4144-88CA-67FB4BTY56G3`
     */
    RequestId: string;
    /**
     * 私有定制RDS实例详情。
     */
    DbInstance: {
        /**
         * 实例过期时间，格式为Unix时间戳，单位为秒。
         * >仅预付费实例支持该参数。
         * @example `12341434315`
         */
        ExpireTime: string;
        /**
         * 实例付费类型，取值范围如下：
         * - **Prepaid**：包年包月（即预付费）
         * - **Postaid**：按量付费（即后付费或按小时付费）
         * @example `Postpaid`
         */
        PayType: string;
        /**
         * 实例状态。
         * @example `1`
         */
        DBInstanceStatus: string;
        /**
         * 实例网络类型，目前仅支持专有网络**VPC**。
         * @example `VPC`
         */
        NetworkType: string;
        /**
         * 实例访问端口。
         * @example `3306`
         */
        Port: number;
        /**
         * 实例引擎版本，目前仅支持**5.7**版本。
         * @example `5.7`
         */
        EngineVersion: string;
        /**
         * 资源ID。
         * @example `dm-*************`
         */
        DmInstanceId: string;
        /**
         * 私有定制RDS连接地址。
         * @example `rm-***************.mysql.rds.aliyuncs.com`
         */
        ConnectUrl: string;
        /**
         * 实例读比例。
         * @example `70`
         */
        ReadWeight: number;
        /**
         * 实例类型。
         * @example `RDS`
         */
        RdsInstType: string;
        /**
         * 实例过期剩余天数。
         * @example `0`
         */
        RemainDays: string;
        /**
         * 私有定制RDS实例ID。
         * @example `rm-***************`
         */
        DBInstanceId: string;
        /**
         * 实例类型，取值范围如下：
         * - **Primary**：主实例
         * - **ReadOnly**：只读实例
         * @example `Primary`
         */
        DbInstType: string;
        /**
         * 实例引擎，目前仅支持**MySQL**。
         * @example `MySQL`
         */
        Engine: string;
        ReadOnlyInstances: {
            /**
             * 只读实例列表。
             */
            ReadOnlyInstance: {
                /**
                 * 实例过期时间戳。
                 * @example `1823487328173`
                 */
                ExpireTime: string;
                /**
                 * 实例购买类型。
                 * @example `Postpaid`
                 */
                PayType: string;
                /**
                 * 无效字段
                 * @example `0`
                 */
                VersionAction: number;
                /**
                 * 实例状态。
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
                 * 实例引擎版本。
                 * @example `5.7`
                 */
                EngineVersion: string;
                /**
                 * 资源ID。
                 * @example `dm-*************`
                 */
                DmInstanceId: string;
                /**
                 * 只读实例连接地址。
                 * @example `rm-bp1ub71ct9skc3yxx.mysql.rds.aliyuncs.com`
                 */
                ConnectUrl: string;
                /**
                 * 实例读比例。
                 * @example `30`
                 */
                ReadWeight: number;
                /**
                 * 实例类型。
                 * @example `RDS`
                 */
                RdsInstType: string;
                /**
                 * 实例过期剩余天数。
                 * @example `0`
                 */
                RemainDays: string;
                /**
                 * 只读实例ID。
                 * @example `rm-bp1ub71ct9skc****`
                 */
                DBInstanceId: string;
                /**
                 * 实例类型。
                 * @example `RDS`
                 */
                DbInstType: string;
                /**
                 * 实例引擎。
                 * @example `MySQL`
                 */
                Engine: string;
            }[];
        };
    };
}
