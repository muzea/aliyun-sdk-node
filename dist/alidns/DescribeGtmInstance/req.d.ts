export interface DescribeGtmInstanceRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * GTM实例ID。
     * @example `instance1`
     */
    "InstanceId": string;
    /**
     * 是否需要额外信息，默认为**false**。取值为**true**时，返回AccessStrategyNum（访问策略个数）、AddressPoolNum（地址池个数）。
     * @example `false`
     */
    "NeedDetailAttributes"?: boolean;
}
