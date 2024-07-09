export interface ModifyDBInstanceMaintainTimeRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk****`
     */
    "DBInstanceId": string;
    /**
     * 实例的可维护时间段。格式：<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
     * @example `22:00Z-02:00Z `
     */
    "MaintainTime": string;
}
