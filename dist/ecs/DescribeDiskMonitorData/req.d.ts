interface DescribeDiskMonitorDataRequest {
    "RegionId"?: string;
    /**
    * 云盘ID。
    * @example `d-myDisk`
    */ "DiskId": string;
    /**
    * 数据的起始时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果秒（ss）不是00，则自动取为下一分钟开始时。
    * @example `2014-07-23T12:07:00Z`
    */ "StartTime": string;
    /**
    * 数据的结束时间。按照[ISO8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果秒（ss）不是00，则自动取为下一分钟开始时。
    * @example `2014-07-23T12:09:00Z`
    */ "EndTime": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 数据的精度，单位为秒。取值范围：
    * - 60
    * - 600
    * - 3600
    * 默认值：60
    * @example `60`
    */ "Period"?: number;
}
export { DescribeDiskMonitorDataRequest };