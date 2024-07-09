export interface DescribeADInfoResponse {
    /**
     * AD域的状态。返回值：
     * * **-1**：正在加入AD域。
     * * **0**：加入AD域失败。
     * * **1**：加入AD域成功。
     * @example `1`
     */
    ADStatus: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * AD域的DNS信息。
     * @example `100.100.XX.XX`
     */
    ADDNS: string;
    /**
     * AD域的服务IP地址。
     * @example `192.168.XX.XX`
     */
    ADServerIpAddress: string;
    /**
     * 异常原因。
     * @example `****`
     */
    AbnormalReason: string;
    /**
     * AD域的用户名。
     * @example `test_01`
     */
    UserName: string;
}
