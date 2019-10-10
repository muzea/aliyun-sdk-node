interface DeleteReplicationJobRequest {
    "RegionId"?: string;
    /**
    * 迁移任务Id。
    * @example `j-xxxxxxxxxx`
    */ "JobId": string;
    /**
    * @example `000000000`
    */ "OwnerId"?: number;
}
export { DeleteReplicationJobRequest };