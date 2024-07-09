export interface ListServiceInstanceResourcesResponse {
    /**
     * 下一个查询开始Token。
     * @example `AAAAAc3HCuYhJi/wvpk4xOr0VLbAx7BkQzyYC+ONO+WudHGKEdB0uWSY7AGnM3qCgm/Ynge7zU6NWdbj0Tegyajyqyc=`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 分页查询时每页行数。每页最大行数100行，默认行数20行。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 资源列表。
     */
    Resources: {
        /**
         * 资源ARN（Aliyun Resource Name）。
         * @example `arn:acs:sag:cn-hangzhou:130920852836****:ccn/ccn-b3qf0q439sq2de****`
         */
        ResourceARN: string;
        /**
         * 付费类型。取值范围：
         * - Subscription：预付费。
         * - PayAsYouGo：后付费。
         * @example `Subscription`
         */
        PayType: string;
        /**
         * 续费状态，取值：
         * - AutoRenewal：自动续费。
         * - ManualRenewal：手动续费。
         * - NotRenewal：不续费。
         * @example `AutoRenewal`
         */
        RenewStatus: string;
        /**
         * 创建时间。
         * @example `2022-01-01T12:00:00`
         */
        CreateTime: string;
        /**
         * 到期时间。
         * @example `2022-03-01T12:00:00`
         */
        ExpireTime: string;
        /**
         * 续费周期。
         * @example `1`
         */
        RenewalPeriod: number;
        /**
         * 续费周期单位。取值范围：
         * - Month：月。
         * - Year：年。
         * @example `Month`
         */
        RenewalPeriodUnit: string;
        /**
         * 产品类型。
         * @example `RDS`
         */
        ProductType: string;
        /**
         * 产品代码。
         * @example `rds`
         */
        ProductCode: string;
        /**
         * 运行状态。可能的值：
         * - running：运行中。
         * - waiting：待运行。
         * - terminated：停止运行。
         * > 仅查询容器资源时，才会返回运行状态。
         * @example `running`
         */
        Status: string;
    }[];
}
