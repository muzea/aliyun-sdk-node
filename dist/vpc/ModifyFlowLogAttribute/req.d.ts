export interface ModifyFlowLogAttributeRequest {
    /**
     * 流日志所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * 流日志ID。
     * @example `fl-m5e8vhz2t21sel1nq****`
     */
    "FlowLogId": string;
    /**
     * 要修改的流日志名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `myFlowlog`
     */
    "FlowLogName"?: string;
    /**
     * 要修改的流日志描述。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is my Flowlog.`
     */
    "Description"?: string;
    /**
     * 要修改的流日志的采样间隔。单位：分钟。取值：**1**、**5**、**10**。
     * @example `1`
     */
    "AggregationInterval"?: number;
}
