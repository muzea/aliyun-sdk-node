export interface QueryAvailableInstancesResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C7C15585-8349-4C62-BEE4-5A391841B9BE`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `11`
         */
        TotalCount: number;
        /**
         * 实例信息的列表。
         */
        InstanceList: {
            /**
             * 子状态。
             * @example `Normal-后付费模块正常
            WaitForLimit-后付费模块即将欠费受限
            BandwidthLimited-后付费模块欠费受限`
             */
            SubStatus: string;
            /**
             * 状态。
             * @example `Creating-资源创建中
            WaitForExpire-即将停服
            Normal-正常
            Expired-停服`
             */
            Status: string;
            /**
             * 期望释放时间。
             * @example `2019-09-08T16:00:00Z`
             */
            ExpectedReleaseTime: string;
            /**
             * 续费状态，取值：
             * - AutoRenewal：自动续费。
             * - ManualRenewal：手动续费。
             * - NotRenewal：不续费。
             * @example `ManualRenewal`
             */
            RenewStatus: string;
            /**
             * 创建时间。
             * @example `2019-09-08T16:00:00Z`
             */
            CreateTime: string;
            /**
             * 卖方ID。
             * @example `123123123`
             */
            SellerId: number;
            /**
             * 实例ID。
             * @example `1049056`
             */
            InstanceID: string;
            /**
             * 卖方。
             * @example `123123123`
             */
            Seller: string;
            /**
             * 停止时间。
             * @example `2019-09-08T16:00:00Z`
             */
            StopTime: string;
            /**
             * 自动续费周期单位，取值：
             * - M：月。
             * - Y：年。
             * @example `M`
             */
            RenewalDurationUnit: string;
            /**
             * 订阅类型，取值：
             * - Subscription：预付费。
             * - PayAsYouGo：后付费。
             * @example `Subscription`
             */
            SubscriptionType: string;
            /**
             * 所有者ID。
             * @example `325352345`
             */
            OwnerId: number;
            /**
             * 结束时间。
             * @example `2019-09-08T16:00:00Z`
             */
            EndTime: string;
            /**
             * 产品类型。
             * @example `rds`
             */
            ProductType: string;
            /**
             * 地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 释放时间。
             * @example `2019-09-08T16:00:00Z`
             */
            ReleaseTime: string;
            /**
             * 自动续费周期数量。
             * @example `1`
             */
            RenewalDuration: number;
            /**
             * 产品代码。
             * @example `rds`
             */
            ProductCode: string;
        }[];
    };
}
