export interface OpenVClusterRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群类型，云产品统一为`cloud-product-prometheus`。
     * @example `cloud-product-prometheus`
     */
    "ClusterType": string;
    /**
     * 集群ID长度，默认为10。
     * @example `10`
     */
    "Length"?: number;
    /**
     * 云产品名称，当`clusterType=cloud-product-prometheus`时该字段必传。目前已经接入的云产品名为influxdb、mongodb、DLA，该参数不支持传入多个。
     * @example `influxdb`
     */
    "Product"?: string;
    /**
     * 创建或者查询虚拟集群开关参数，可以对老数据兼容控制。
     * @example `false`
     */
    "RecreateSwitch"?: boolean;
}
