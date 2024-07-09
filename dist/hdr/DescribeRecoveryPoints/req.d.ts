export interface DescribeRecoveryPointsRequest {
    /**
     * 受保护服务器ID
     * @example `sr-0008fj9dbe1xzlg6805i`
     */
    "ServerId"?: string;
    /**
     * 开始时间，从开始时间查询可用恢复点
     * @example `1633503912`
     */
    "StartTime"?: number;
}
