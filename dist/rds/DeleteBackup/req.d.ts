interface DeleteBackupRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 备份集ID。可通过接口[DescribeBackups](~~26273~~)查询。多组值以英文逗号（,）隔开，单次最多传入100个。
    * >只支持删除[DescribeBackups](~~26273~~)中**StoreStatus**为**Enabled**的备份集。
    * @example `324909958`
    */ "BackupId": string;
    "OwnerId"?: number;
}
export { DeleteBackupRequest };