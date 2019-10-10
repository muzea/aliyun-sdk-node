interface DescribeBackupTasksRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 备用参数。
    * @example `-`
    */ "Flag"?: string;
    /**
    * 备份任务ID。
    * @example `4762614`
    */ "BackupJobId"?: string;
    /**
    * 备份模式，取值：
    * * **Automated**：系统自动备份；
    * * **Manual**：手动备份。
    * @example `Automated`
    */ "BackupMode"?: string;
    /**
    * 备份任务状态，取值：
    * * **0**：未开始；
    * * **1**：正在进行中。
    * 默认为所有状态。
    * @example `0`
    */ "BackupJobStatus"?: string;
}
export { DescribeBackupTasksRequest };