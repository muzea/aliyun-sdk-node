interface RestoreInstanceRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 备份文件ID。您可以调用[DescribeBackups](~~61081~~)查询。
    * @example `111111111`
    */ "BackupId": string;
    "OwnerId"?: number;
    /**
    * 需要进行数据恢复的实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { RestoreInstanceRequest };