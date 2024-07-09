export interface DescribeDBInstanceViaEndpointRequest {
    /**
     * 实例的连接地址。
     * @example `pxc-hz*******.polarx.rds.aliyuncs.com`
     */
    "Endpoint": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
