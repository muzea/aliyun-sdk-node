interface CancelTaskRequest {
    /**
    * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 任务 ID。您可以调用 [DescribeTasks](~~25622~~) 查看任务 ID 列表。
    * @example `t-23ym6mvro`
    */ "TaskId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { CancelTaskRequest };