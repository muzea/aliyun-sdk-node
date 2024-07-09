export interface DescribeFlowLogsRequest {
    /**
     * 流日志所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 流日志名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `myFlowlog`
     */
    "FlowLogName"?: string;
    /**
     * 流日志ID。
     * @example `fl-bp1f6qqhsrc2c12ta****`
     */
    "FlowLogId"?: string;
    /**
     * 流日志描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my Flowlog.`
     */
    "Description"?: string;
    /**
     * 要捕获的流量的资源类型。取值：
     *
     * - **NetworkInterface**：弹性网卡。
     *
     * - **VSwitch**：交换机内的所有弹性网卡。
     *
     * - **VPC**：专有网络内的所有弹性网卡。
     * @example `NetworkInterface`
     */
    "ResourceType"?: string;
    /**
     * 要捕获的流量的资源ID。
     * @example `eni-askldfas****`
     */
    "ResourceId"?: string;
    /**
     * 采集的流量类型。取值：
     *
     * - **All**：全部流量。
     *
     * - **Allow**：访问控制允许的流量。
     *
     * - **Drop**：访问控制拒绝的流量。
     * @example `All`
     */
    "TrafficType"?: string;
    /**
     * 管理捕获到的流量的Project。
     * @example `FlowLogProject`
     */
    "ProjectName"?: string;
    /**
     * 存储捕获到的流量的Logstore。
     * @example `FlowLogStore`
     */
    "LogStoreName"?: string;
    /**
     * 流日志的状态。取值：
     * - **Active**：流日志为启动状态。
     * - **Activating**：流日志正在创建中。
     * - **Inactive**：流日志为未启动状态。
     * @example `Active`
     */
    "Status"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 所要查看流日志的VPC的ID。
     * @example `vpc-bp1nwd16gvo1wgs****`
     */
    "VpcId"?: string;
    /**
     * 流日志所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
