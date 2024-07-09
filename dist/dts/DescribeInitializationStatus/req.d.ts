export interface DescribeInitializationStatusRequest {
    /**
     * 数据同步实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步实例ID，可以通过调用[DescribeSynchronizationJobs](~~49454~~)接口查询。
     * @example `dtsi76118o3w92****`
     */
    "SynchronizationJobId": string;
    /**
     * 每页记录数，取值：**1**~**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
