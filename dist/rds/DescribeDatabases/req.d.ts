interface DescribeDatabasesRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 数据库名称。
    * @example `testDB01`
    */ "DBName"?: string;
    /**
    * 数据库状态，取值：
    * * **Creating**：创建中；
    * * **Running**：使用中；
    * * **Deleting**：删除中。
    * @example `Creating`
    */ "DBStatus"?: string;
    /**
    * 每页记录数，取值：
    * * **30**；
    * * **50**；
    * * **100**。
    * 默认值：30。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 页码，取值：大于0且不超过Integer的最大值。
    * 默认值：**1**。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeDatabasesRequest };