export interface StartDtsJobsRequest {
    /**
     * 迁移、同步任务ID。
     * > - 当有多个任务ID时，使用**','**隔开。
     * - 可调用[DescribeDtsJobs](~~209702~~)获取DTS任务ID。
     * @example `l5o11f9029c****`
     */
    "DtsJobIds": string;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
