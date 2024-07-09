export interface DescribeTrafficRequest {
    /**
     * 要查询的DDoS原生防护实例的ID。
     * > 您可以调用[DescribeInstanceList](~~118698~~)查询所有DDoS原生防护实例的ID。
     * 如果此处设置的实例用于代播防护，您必须设置请求参数**Interval**。
     * @example `ddosbgp-cn-n6w203qg****`
     */
    "InstanceId"?: string;
    /**
     * 要查询的代播网段。
     * @example `111.XX.XX.0/24`
     */
    "Ipnet"?: string;
    /**
     * 要查询的公网IP资产。不设置该参数表示查询DDoS原生防护实例防护的所有公网IP资产的流量统计数据。
     * > 公网IP资产必须已经添加为DDoS原生防护实例的防护对象。您可以调用[DescribePackIpList](~~118701~~)查询DDoS原生防护实例的所有防护对象。
     * @example `39.XX.XX.96`
     */
    "Ip"?: string;
    /**
     * 查询开始时间。使用时间戳格式，单位：秒。
     * @example `1619798400`
     */
    "StartTime": number;
    /**
     * 查询结束时间。使用时间戳格式，单位：秒。
     * 不设置该参数表示以当前时间作为查询结束时间。
     * @example `1563445054`
     */
    "EndTime"?: number;
    /**
     * 设置流量统计的时间间隔，单位：秒，表示将每多少秒时间段作为一个区间，统计该区间内的流量数据。默认值为**5**。
     * @example `5`
     */
    "Interval"?: number;
    /**
     * 要查询的流量统计数据的类型。取值：
     * - **max**：表示统计时间区间内的流量峰值。
     * - **avg**：表示统计时间区间内的流量均值。
     * @example `max`
     */
    "FlowType"?: string;
    /**
     * DDoS原生防护实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * DDoS原生防护实例所属地域ID。
     * > 您可以调用[DescribeRegions](~~118703~~)查询DDoS原生防护支持的所有地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
