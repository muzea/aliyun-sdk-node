interface DescribeAvailableRecoveryTimeRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 跨地域备份文件ID。可以通过接口[DescribeCrossRegionBackups](~~121733~~)查看备份集ID。
    * @example `14377`
    */ "CrossBackupId": number;
}
export { DescribeAvailableRecoveryTimeRequest };