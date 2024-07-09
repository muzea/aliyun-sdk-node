export interface DescribeDBInstancesByExpireTimeResponse {
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 页码，取值：大于**0**且不超过Integer类型的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 当前页的实例个数。
     * @example `2`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `200`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 实例信息列表。
         */
        DBInstanceExpireTime: {
            /**
             * 实例到期时间。<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * > 按量付费实例无到期时间。
             * @example `2019-03-27T16:00:00Z`
             */
            ExpireTime: string;
            /**
             * 实例付费方式。取值：
             * - **Postpaid**：按量付费
             * - **Prepaid**：包年包月
             * @example `Prepaid`
             */
            PayType: string;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5xxxxxxx`
             */
            DBInstanceId: string;
            /**
             * 实例状态。详情请参见[实例状态表](~~26315~~)。
             * @example `Running`
             */
            DBInstanceStatus: string;
            /**
             * 实例备注。
             * @example `testInstance`
             */
            DBInstanceDescription: string;
            /**
             * 实例锁定模式。取值：
             * - **Unlock**：正常
             * - **ManualLock**：手动触发锁定
             * - **LockByExpiration**：实例过期自动锁定
             * - **LockByRestoration**：实例回滚前的自动锁定
             * - **LockByDiskQuota**：实例空间满自动锁定
             * - **LockReadInstanceByDiskQuota**：只读实例空间满自动锁定
             * @example `Unlock`
             */
            LockMode: string;
        }[];
    };
}
