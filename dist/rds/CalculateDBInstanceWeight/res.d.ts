export interface CalculateDBInstanceWeightResponse {
    /**
     * 请求ID。
     * @example `C816A4BF-A6EC-4722-95F9-2055859CCFD2`
     */
    RequestId: string;
    Items: {
        /**
         * 系统指定权重列表。
         */
        DBInstanceWeight: {
            /**
             * 只读实例延迟复制时间，只读实例延迟**ReadonlyInstanceSQLDelayedTime**的时间后再同步主实例数据，单位：秒。
             * @example `30`
             */
            ReadonlyInstanceSQLDelayedTime: string;
            /**
             * 系统实时计算的实例权重。
             * @example `100`
             */
            Weight: string;
            /**
             * 实例类型，取值：
             * * **Master**：主实例
             * * **Readonly**：只读实例
             * @example `Master`
             */
            DBInstanceType: string;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5xxxxxxx`
             */
            DBInstanceId: string;
        }[];
    };
}
