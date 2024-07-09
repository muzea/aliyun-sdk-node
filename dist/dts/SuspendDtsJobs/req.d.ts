export interface SuspendDtsJobsRequest {
    /**
     * 迁移、同步任务ID。
     * > - 当有多个任务ID时，使用','隔开。
     * - 可调用[DescribeDtsJobs](~~209702~~)获取DTS任务ID。
     * @example `hfi12iv4z7e****`
     */
    "DtsJobIds": string;
    /**
     * DTS实例所属的地域，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
