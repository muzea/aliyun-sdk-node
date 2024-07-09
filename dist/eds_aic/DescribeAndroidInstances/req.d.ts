export interface DescribeAndroidInstancesRequest {
    /**
     * 实例组ID。
     * @example `ag-25nt4kk9whjh****`
     */
    "InstanceGroupId"?: string;
    /**
     * 已绑定的密钥对ID。
     * @example `kp-5hh431emkpuoi****`
     */
    "KeyPairId"?: string;
    /**
     * 实例ID列表。
     */
    "AndroidInstanceIds"?: string[];
    /**
     * 实例名称。
     * @example `name`
     */
    "AndroidInstanceName"?: string;
    /**
     * 实例状态。
     * @example `RUNNING`
     */
    "Status"?: string;
    /**
     * 售卖模式。
     * @example `standard`
     */
    "SaleMode"?: string;
    /**
     * 分页查询时每页的最大条目数。取值范围1～100，默认值为100。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 用来表示当前开始读取的位置。置空表示从头开始。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****`
     */
    "NextToken"?: string;
}
