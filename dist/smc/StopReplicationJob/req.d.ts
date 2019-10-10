interface StopReplicationJobRequest {
    "RegionId"?: string;
    /**
    * 迁移任务ID。
    * @example `j-xxxxxxxxxxxxxxx`
    */ "JobId": string;
    /**
    * @example `000000`
    */ "OwnerId"?: number;
}
export { StopReplicationJobRequest };