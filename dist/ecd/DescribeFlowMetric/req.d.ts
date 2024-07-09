export interface DescribeFlowMetricRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID，可以是云电脑ID或者公网精品带宽ID。
     * @example `ecd-fwq23f13****或者np-6inxqsvcyv6z8****`
     */
    "InstanceId": string;
    /**
     * 监控数据的统计周期。单位：秒。
     * @example `60`
     */
    "Period": number;
    /**
     * 开始时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * @example `1651817220643`
     */
    "StartTime": string;
    /**
     * 结束时间。支持的格式：
     * - Unix时间戳：从1970年1月1日开始所经过的毫秒数。
     * - Format格式：YYYY-MM-DDThh:mm:ssZ。
     * @example `1664714703743`
     */
    "EndTime": string;
    /**
     * 监控信息类型。支持云电脑的流入与流出带宽，以及公网精品带宽的公网流入与流出带宽监控数据。
     * @example `intranetOutRate`
     */
    "MetricType": string;
    /**
     * 实例类型。可以选择云电脑类型或公网精品带宽类型。如果选择云电脑类型，则`InstanceId`与`MetricType`需对应填写云电脑ID与云电脑的流量类型，公网精品带宽同理。
     * @example `desktop`
     */
    "InstanceType": string;
}
