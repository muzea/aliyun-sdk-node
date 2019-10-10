interface CancelImportRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 迁移任务ID。
    * >发起迁移任务时会返回此参数，参见[ImportDatabaseBetweenInstances](~~26301~~)。
    * @example `8562584`
    */ "ImportId": number;
    "OwnerId"?: number;
}
export { CancelImportRequest };