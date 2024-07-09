export interface DescribeContainerLogRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * ECI实例ID，即容器组ID。
     * @example `eci-uf6fonnghi50v6nq****`
     */
    "ContainerGroupId": string;
    /**
     * 容器名称。
     * @example `nginx`
     */
    "ContainerName": string;
    /**
     * UTC时间，RFC3339标准。
     * @example `2018-08-02T15:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询最新多少行的日志内容。默认500行，最大2000行 。
     * 日志内容最大返回1 MB数据。
     * @example `500`
     */
    "Tail"?: number;
    /**
     * 是否查询上一个容器（如果容器退出重启了）。取值范围：
     * - true：查询上一个容器。
     * - false：不查询。
     * 默认为false。
     * @example `false`
     */
    "LastTime"?: boolean;
    /**
     * 查询最近多少秒内的日志。例如：10s、20s、30s。
     * @example `10`
     */
    "SinceSeconds"?: number;
    /**
     * 日志总大小的限制。单位为Byte，取值范围为1~1048576（1 MB）。
     * @example `123798`
     */
    "LimitBytes"?: number;
    /**
     * 是否返回日志时间戳。取值范围：
     * - true：返回日志时间戳。
     * - false：不返回日志时间戳。
     * 默认为false。
     * @example `false`
     */
    "Timestamps"?: boolean;
}
