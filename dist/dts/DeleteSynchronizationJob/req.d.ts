export interface DeleteSynchronizationJobRequest {
    /**
     * 数据同步实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步实例ID，可以通过调用[DescribeSynchronizationJobs](~~49454~~)接口查询。
     * @example `dtshn6107ve264****`
     */
    "SynchronizationJobId": string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
