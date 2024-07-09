export interface CreateReverseDtsJobRequest {
    /**
     * 同步或迁移任务的ID，可调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `n99m9jx822k****`
     */
    "DtsJobId": string;
    "ShardUsername"?: string;
    "ShardPassword"?: string;
    "ResourceGroupId"?: string;
}
