export interface DescribeMultiContainerGroupMetricRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * ECI实例ID，即容器组ID。格式为JSON数组，一次最多支持20个ID。
     * @example `["eci-2zegym1qhbmdfr1s****","eci-2ze39w5svzj5ic34****"]`
     */
    "ContainerGroupIds": string;
    /**
     * 实例所属的资源组ID。
     * @example `rg-acfmzw2jz2z****`
     */
    "ResourceGroupId"?: string;
    /**
     * 监控信息类型。目前仅支持配置为summary，表示返回Records。
     * @example `summary`
     */
    "MetricType"?: string;
}
