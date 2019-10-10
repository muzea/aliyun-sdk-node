interface DeleteAsyncTaskRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * 要删除的任务ID。
    * @example `123`
    */ "TaskId": number;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
}
export { DeleteAsyncTaskRequest };