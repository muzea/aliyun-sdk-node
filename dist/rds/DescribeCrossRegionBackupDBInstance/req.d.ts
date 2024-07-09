export interface DescribeCrossRegionBackupDBInstanceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。一次最多传入30个实例ID，以英文逗号（,）分隔。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
    /**
     * 每页记录数。默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
