interface DeleteAccountRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 需要删除的数据库账号名称。
    * @example `test1`
    */ "AccountName": string;
    "OwnerId"?: number;
}
export { DeleteAccountRequest };