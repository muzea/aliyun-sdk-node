export interface DescribeMonitoringAgentHostsRequest {
    /**
     * 模糊搜索关键字。
     * @example `host1`
     */
    "KeyWord"?: string;
    /**
     * 主机名称。
     * @example `hostNam1`
     */
    "HostName"?: string;
    /**
     * 实例ID。
     * @example `i-a3d1q1pm2f9yr29e****`
     */
    "InstanceIds"?: string;
    /**
     * 主机序列号。
     * 每台主机成功安装云监控插件之后会生成一个SerialNumber，具备全局唯一性。非阿里云主机无实例ID，有SerialNumber。
     * >该参数可用于精准查找监控的任何一台主机。
     * @example `a1ab31a3-1234-40f2-9e95-c8caa8f0****`
     */
    "SerialNumbers"?: string;
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示记录条数。取值：
     * - 10
     * - 20
     * - 50
     * - 100
     * >虽然目前阿里云未限制该参数的最大值，但是不建议设置的值过大，可能会导致超时无法正常获取。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 实例所在的地域。
     * @example `cn-hangzhou`
     */
    "InstanceRegionId"?: string;
    /**
     * 阿里云主机（ECS）。取值：
     * - true（默认值）：过滤出所有阿里云主机（ECS）。
     * - false：过滤出所有非阿里云主机。
     * @example `true`
     */
    "AliyunHost"?: boolean;
    /**
     * 主机状态。取值：
     * - Running：运行中。
     * - Stopped：已停止、未安装或安装失败。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * SysOM的开启状态。取值：
     * - installing：开启中。
     * - running：运行中。
     * - stopped：已停止。
     * - uninstalling：关闭中。
     * @example `running`
     */
    "SysomStatus"?: string;
}
