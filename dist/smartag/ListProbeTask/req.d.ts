export interface ListProbeTaskRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-****`
     */
    "SagId"?: string;
    /**
     * 智能接入网关设备序列号。
     * @example `sag****`
     */
    "Sn"?: string;
    /**
     * 拨测任务ID。
     * @example `probe-****`
     */
    "ProbeTaskId"?: string;
    /**
     * 拨测任务名称。
     * @example `test-ping`
     */
    "TaskName"?: string;
    /**
     * 拨测任务协议。取值：
     * - **ICMP**。
     * - **TCP**。
     * - **HTTP**。
     * > 私网拨测仅支持ICMP和TCP协议。
     * @example `ICMP`
     */
    "Protocol"?: string;
    /**
     * 智能接入网关实例名称。
     * @example `shanghai-office`
     */
    "SagName"?: string;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
