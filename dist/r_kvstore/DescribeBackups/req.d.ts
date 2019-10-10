interface DescribeBackupsRequest {
    "RegionId"?: string;
    /**
    * 查询开始时间，例如：`2018-12-21T18:10Z`。
    * @example `2019-03-11T10:00Z`
    */ "StartTime": string;
    /**
    * 查询结束时间，例如：`2018-12-28T18:10Z`。
    * @example `2019-03-14T18:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 备份文件的ID。
    * @example `111111111`
    */ "BackupId"?: number;
    /**
    * 每页最大记录数。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 页码，大于0，且不超过Integer的最大值。
    * @example `1`
    */ "PageNumber"?: number;
    "NeedAof"?: string;
}
export { DescribeBackupsRequest };