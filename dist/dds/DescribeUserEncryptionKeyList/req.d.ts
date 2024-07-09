export interface DescribeUserEncryptionKeyListRequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 目标可用区ID，您可以通过[DescribeRegions](~~61933~~)查询可用的可用区。
     * @example `cn-shanghai`
     */
    "TargetRegionId"?: string;
}
