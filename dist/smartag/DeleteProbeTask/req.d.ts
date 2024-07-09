export interface DeleteProbeTaskRequest {
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
    "SagId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sag****`
     */
    "Sn": string;
    /**
     * 拨测任务ID。
     * @example `probe-****`
     */
    "ProbeTaskId": string;
}
