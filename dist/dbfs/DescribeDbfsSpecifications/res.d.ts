export interface DescribeDbfsSpecificationsResponse {
    /**
     * 请求ID。
     * @example `187BCB3B-12E6-58B0-8E71-E19A895F49EF`
     */
    RequestId: string;
    /**
     * 支持的ECS实例规格族列表。
     */
    SupportedEcsInstanceTypeFamily: string[];
    /**
     * 单台ECS最多支持挂载的DBFS实例数。
     * @example `{"enterprise": 4}`
     */
    MaxDbfsNumberPerEcs: any;
}
