interface StartReplicationJobRequest {
    "RegionId"?: string;
    /**
    * 迁移任务ID。
    * @example `j-xxxxxxxxxxxxxx`
    */ "JobId": string;
    /**
    * @example `000000`
    */ "OwnerId"?: number;
}
export { StartReplicationJobRequest };