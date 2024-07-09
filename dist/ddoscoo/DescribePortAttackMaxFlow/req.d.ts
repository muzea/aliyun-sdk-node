export interface DescribePortAttackMaxFlowRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的流量数据的结束时间。使用时间戳表示，单位：秒。
     * > 必须为整点分钟。
     * @example `1583683200`
     */
    "EndTime": number;
    /**
     * 要查询的流量数据的开始时间。使用时间戳表示，单位：秒。
     * > 必须为整点分钟。
     * @example `1582992000`
     */
    "StartTime": number;
    /**
     * 要查询的DDoS高防实例的ID列表。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceIds": string[];
}
