export interface DescribeDBInstanceEncryptionKeyRequest {
    /**
     * 实例所在的地域ID。可调用DescribeRegions接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances接口获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
    /**
     * 自定义密钥ID。
     * @example `749c1df7-****-****-****-****`
     */
    "EncryptionKey"?: string;
    /**
     * 目标地域ID。可调用DescribeRegions接口获取。
     * @example `cn-qingdao`
     */
    "TargetRegionId"?: string;
}
