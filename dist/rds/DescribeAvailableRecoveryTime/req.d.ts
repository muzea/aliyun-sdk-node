export interface DescribeAvailableRecoveryTimeRequest {
    /**
     * 跨地域备份文件ID。可以通过接口DescribeCrossRegionBackups查看备份集ID。
     * @example `12493****`
     */
    "CrossBackupId": number;
    /**
     * 地域ID。
     * @example `cn-chengdu`
     */
    "RegionId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
}
