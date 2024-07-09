export interface DescribeRiskEventPayloadRequest {
    /**
     * 设置查询开始时间。使用秒级时间戳格式表示。
     * @example `1669533617`
     */
    "StartTime": string;
    /**
     * 设置查询结束时间。使用秒级时间戳格式表示。
     * @example `1681288980`
     */
    "EndTime": string;
    /**
     * 要查询的源IP。设置该参数表示查询包含了这条源IP的入侵防御事件。
     * @example `203.0.113.1`
     */
    "SrcIP"?: string;
    /**
     * 要查询的目的IP。设置该参数表示查询包含了这条目的IP的入侵防御事件。
     * @example `203.0.113.2`
     */
    "DstIP"?: string;
    /**
     * 入侵防御事件的UUID。
     * @example `e62c25e0-1073-46bd-9567-b8f12b3d****`
     */
    "UUID": string;
    /**
     * 云防火墙类型。取值：
     * - **VpcFirewall**：表示VPC边界防火墙
     * - **InternetFirewall**（默认）：表示互联网边界防火墙
     * @example `InternetFirewall`
     */
    "FirewallType"?: string;
    /**
     * 要查询的源VPC ID。设置该参数表示查询包含了这条源VPC ID的入侵防御事件。
     * @example `vpc-wz9j2lqyo15udw5nt****`
     */
    "SrcVpcId"?: string;
    /**
     * 要查询的目的VPC ID。设置该参数表示查询包含了这条目的VPC ID的入侵防御事件。
     * @example `vpc-uf6jr1klwqb60dyn2****`
     */
    "DstVpcId"?: string;
    /**
     * 要查询的公网资产IP。设置该参数表示查询包含了这条资产IP的失陷感知事件。
     * @example `203.0.113.3`
     */
    "PublicIP"?: string;
}
