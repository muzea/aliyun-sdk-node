export interface DescribeDBNodePerformanceRequest {
    /**
     * 指标名称，多个用英文逗号分隔，最多6个。详细内容请参见[性能参数表](https://help.aliyun.com/document_detail/332726.htm)。
     * @example `Cpu_Usage,Mem_Usage`
     */
    "Key": string;
    /**
     * 查询开始时间, 格式： YYYY-MM-ddTHH:mmZ（UTC时间）。
     * @example `2012-06-08T15:00Z`
     */
    "StartTime": string;
    /**
     * PolarDB-X实例名称。
     * @example `pxc-*******`
     */
    "DBInstanceName": string;
    /**
     * 节点名称，多个用英文逗号分隔，CDC节点和计算节点一次最多支持10个节点，数据节点一次最多支持1个节点。
     * @example `pxc-i-******,pxc-i-*******`
     */
    "DBNodeIds": string;
    /**
     * 节点类型。目前包含polarx\_cn、polarx\_dn、polarx\_cdc、polarx\_gms。
     * @example `polarx_cn`
     */
    "CharacterType": string;
    /**
     * 节点类型，取值：
     * - master：主节点
     * - slave：备节点
     * 只对DN和GMS节点生效。
     * @example `master`
     */
    "DBNodeRole"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询结束时间, 格式： YYYY-MM-ddTHH:mmZ（UTC时间）。
     * @example `2012-06-18T15:00Z`
     */
    "EndTime": string;
}
