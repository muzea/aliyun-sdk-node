export interface CreateFlowLogRequest {
    /**
     * 流日志所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 流日志名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `myFlowlog`
     */
    "FlowLogName"?: string;
    /**
     * 流日志描述。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my Flowlog.`
     */
    "Description"?: string;
    /**
     * 要捕获流量的资源类型。取值：
     * - **NetworkInterface**：弹性网卡。
     *
     * - **VSwitch**：交换机内的所有弹性网卡。
     *
     * - **VPC**：专有网络内的所有弹性网卡。
     * @example `NetworkInterface`
     */
    "ResourceType": string;
    /**
     * 要捕获流量的资源ID。
     * @example `eni-askldfas****`
     */
    "ResourceId": string;
    /**
     * 采集的流量类型。取值：
     * - **All**：全部流量。
     *
     * - **Allow**：访问控制允许的流量。
     *
     * - **Drop**：访问控制拒绝的流量。
     * @example `All`
     */
    "TrafficType": string;
    /**
     * 管理捕获到的流量的Project名称。
     * - Projec名称仅支持小写字母、数字和短划线（-）。
     * - 名称的开头与结尾必须为小写字母或数字。
     * - 名称长度为3~63个字符。
     * @example `FlowLogProject`
     */
    "ProjectName": string;
    /**
     * 存储捕获到的流量的LogStore名称。
     * - LogStore名称仅支持小写字母、数字、短划线（-）和下划线（_）。
     * - 名称的开头与结尾必须为小写字母或数字。
     * - 名称长度为3~63个字符。
     * @example `FlowLogStore`
     */
    "LogStoreName": string;
    /**
     * 流日志的采样间隔。单位：分钟。取值：**1**、**5**、**10**（默认值）。
     * @example `10`
     */
    "AggregationInterval"?: number;
    /**
     * 采集的流量路径。取值：
     * - **all**：表示全量采集。
     * - **internetGateway**：表示公网流量采集。
     */
    "TrafficPath"?: string[];
    /**
     * 资源组ID。
     * @example `rg-acfmxazdjdhd****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，请勿输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如果传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
