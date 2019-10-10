interface DescribeCrossRegionLogBackupFilesRequest {
    /**
    * 实例所在地域ID。可以通过接口[DescribeRegions](~~26243~~)查看地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2019-05-30T12:10Z`
    */ "StartTime": string;
    /**
    * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
    * @example `2019-06-15T12:10Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 跨地域备份目的地域ID。可以通过接口[DescribeCrossRegionBackupDBInstance](~~121737~~)查看地域ID。
    * @example `cn-shanghai`
    */ "CrossBackupRegion"?: string;
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
export { DescribeCrossRegionLogBackupFilesRequest };