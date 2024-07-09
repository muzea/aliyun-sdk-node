export interface DescribeHADiagnoseConfigResponse {
    /**
     * 阿里云对RDS实例的可用性检测方式。返回值：
     * - **LONG**：长连接
     * - **SHORT**：短连接
     * @example `LONG`
     */
    TcpConnectionType: string;
    /**
     * 请求ID。
     * @example `06B220E2-EAC5-4DBE-A1FC-1B62DB6A****`
     */
    RequestId: string;
}
