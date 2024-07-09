export interface ModifyHADiagnoseConfigRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 实例的可用性检测方式。取值：
     * - **SHORT**：短连接
     * - **LONG**：长连接
     * @example `SHORT`
     */
    "TcpConnectionType"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
