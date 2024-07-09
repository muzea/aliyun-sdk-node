export interface DescribeDBClusterConnectivityResponse {
    /**
     * 请求ID。
     * @example `73A85BAF-1039-4CDE-A83F-1A140F******`
     */
    RequestId: string;
    /**
     * 集群ID。
     * @example `pc-xxxxxxxxxxxxx`
     */
    DBClusterId: string;
    /**
     * 连接诊断结果。取值范围如下：
     * * **Success**
     * * **Failed**
     * @example `Failed`
     */
    ConnCheckResult: string;
    /**
     * 连接诊断错误码。取值范围如下：
     * * **SRC_IP_NOT_IN_USER_WHITELIST**：源IP地址没有加入白名单。
     * * **CONNECTION_ABNORMAL**：连接正常。
     * @example `SRC_IP_NOT_IN_USER_WHITELIST`
     */
    ConnCheckErrorCode: string;
    /**
     * 连接诊断错误信息。
     * @example `Src ip:192.***.***.1 not in user whitelist`
     */
    ConnCheckErrorMessage: string;
}
