export interface DescribeDBInstanceConnectivityResponse {
    /**
     * Id of the request
     * @example `D880212A-F21F-5722-8422-BD06B2874CC3`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `rm-2ze2za3is7baay1w4`
     */
    DbInstanceName: string;
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
     * @example `Src ip:39.106.64.59 not in user whitelist`
     */
    ConnCheckErrorMessage: string;
}
