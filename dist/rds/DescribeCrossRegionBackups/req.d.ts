interface DescribeCrossRegionBackupsRequest {
    /**
    * 实例所在地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 跨地域备份目的地域ID。
    * @example `cn-shanghai`
    */ "CrossBackupRegion"?: string;
    /**
    * 跨地域备份文件ID。
    * >**CrossBackupId**和起止时间参数（**StartTime**、**EndTime**）必须传入其中一组。
    * @example `14562`
    */ "CrossBackupId"?: number;
    /**
    * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2019-05-30T12:10Z`
    */ "StartTime"?: string;
    /**
    * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2019-06-15T12:10Z`
    */ "EndTime"?: string;
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
export { DescribeCrossRegionBackupsRequest };