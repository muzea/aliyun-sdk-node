interface DescribeSQLLogFilesRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 审计文件名称。
    * @example `custinsxxxxx.csv`
    */ "FileName"?: string;
    /**
    * 每页记录数，取值：**1-50**。
    * 默认值：**20**。
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 页码，取值：**1-100000**。
    * 默认值：**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeSQLLogFilesRequest };