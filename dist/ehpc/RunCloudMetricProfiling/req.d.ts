export interface RunCloudMetricProfilingRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 主机名称。
     * @example `compute0`
     */
    "HostName": string;
    /**
     * 剖析进程ID。
     * @example `29075`
     */
    "ProcessId": number;
    /**
     * 剖析时长。单位：秒
     * 取值范围：10~300
     * 默认值：30
     * @example `300`
     */
    "Duration"?: number;
    /**
     * 采样频率。单位：Hz
     * 取值范围：1~2000
     * 默认值：2000
     * @example `2000`
     */
    "Freq"?: number;
}
