export interface GetAppNetworkRequest {
    /**
     * 开始时间的时间戳。单位：毫秒。
     * > 开始时间戳和结束时间戳不能超过**7**天。
     * @example `1649260800000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳。单位：毫秒。
     * > 开始时间戳和结束时间戳相差不能超过**7**天。
     * @example `1650470399999`
     */
    "EndTime"?: number;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `cf77xxx`
     */
    "ClusterId"?: string;
}
