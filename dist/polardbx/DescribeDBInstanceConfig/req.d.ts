export interface DescribeDBInstanceConfigRequest {
    /**
     * 实例所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-*********`
     */
    "DBInstanceName": string;
    /**
     * 配置标识， 默认：htap。
     * @example `htap`
     */
    "ConfigName": string;
}
