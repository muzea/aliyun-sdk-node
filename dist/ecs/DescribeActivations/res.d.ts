export interface DescribeActivationsResponse {
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `4ECEEE12-56F1-4FBC-9AB1-890F74625134`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 符合查询条件的记录条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 激活码及使用情况信息组成的集合。
     */
    ActivationList: {
        /**
         * 创建时间。
         * @example `2021-01-20T06:00:00Z`
         */
        CreationTime: string;
        /**
         * 已注销的实例数。
         * @example `1`
         */
        DeregisteredCount: number;
        /**
         * 激活码用于注册托管实例的使用次数上限。
         * @example `1`
         */
        InstanceCount: number;
        /**
         * 激活码对应的描述。
         * @example `This is description.`
         */
        Description: string;
        /**
         * 已注册的实例数。
         * @example `1`
         */
        RegisteredCount: number;
        /**
         * 默认的实例名称前缀。
         * @example `test-InstanceName`
         */
        InstanceName: string;
        /**
         * 激活码是否被禁用。
         * @example `false`
         */
        Disabled: boolean;
        /**
         * 允许使用该激活码的主机IP。
         * @example `0.0.0.0/0`
         */
        IpAddressRange: string;
        /**
         * 激活码的有效时间。单位：小时。
         * @example `4`
         */
        TimeToLiveInHours: number;
        /**
         * 激活码ID。
         * @example `4ECEEE12-56F1-4FBC-9AB1-890F1234****`
         */
        ActivationId: string;
        /**
         * 激活码所属的资源组ID。
         * @example `rg-123******`
         */
        ResourceGroupId: string;
        /**
         * 托管实例激活码的标签信息。
         */
        Tags: {
            /**
             * 托管实例激活码的标签键。
             * @example `owner`
             */
            TagKey: string;
            /**
             * 托管实例激活码的标签值。
             * @example `zhangsan`
             */
            TagValue: string;
        }[];
    }[];
}
