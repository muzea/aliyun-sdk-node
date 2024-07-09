export interface DescribeDBInstanceConnectivityRequest {
    /**
     * 资源组id。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例id。
     * @example `rm-t4ns09hgoy99i5gez`
     */
    "DbInstanceName": string;
    /**
     * 用户源IP地址。
     * @example `172.16.XX.XX`
     */
    "SourceIpAddress": string;
}
