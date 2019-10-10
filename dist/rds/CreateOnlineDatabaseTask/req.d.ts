interface CreateOnlineDatabaseTaskRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 数据库名称。
    * @example `testDB`
    */ "DBName": string;
    /**
    * 迁移任务ID。
    * @example `5652255443`
    */ "MigrateTaskId": string;
    /**
    * 打开数据库后的一致性检查方法，取值：
    * * **SyncExecuteDBCheck**：同步执行DB检查；
    * * **AsyncExecuteDBCheck**：异步执行DB检查。
    * >兼容SQL Server 2008 R2版本。
    * @example `AsyncExecuteDBCheck`
    */ "CheckDBMode": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
    */ "ClientToken"?: string;
}
export { CreateOnlineDatabaseTaskRequest };