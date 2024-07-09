export interface ListTrafficMirrorSessionsRequest {
    /**
     * 镜像会话的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "TrafficMirrorSessionName"?: string;
    /**
     * 本次查询的最大记录条数。取值范围：**1**~**100**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 镜像源的实例ID，目前支持弹性网卡作为镜像源。
     * @example `eni-j6c8znm5l1yt4sox*****`
     */
    "TrafficMirrorSourceId"?: string;
    /**
     * 镜像目的的实例ID，目前支持弹性网卡和私网负载均衡实例作为镜像目的。
     * @example `eni-j6c2fp57q8rr47rp****`
     */
    "TrafficMirrorTargetId"?: string;
    /**
     * 流量镜像筛选条件的实例ID。
     * @example `tmf-j6cmls82xnc86vtpe****`
     */
    "TrafficMirrorFilterId"?: string;
    /**
     * 指定VNI，用来区分不同的镜像流量，取值范围为**0**~**16777215**。您可以通过VNI在镜像目的区分不同会话的镜像流量。您可以自定义VNI的值，也可以由系统随机分配该值。如果由系统随机分配该值，请不传该参数。
     * @example `10`
     */
    "VirtualNetworkId"?: number;
    /**
     * 镜像会话的优先级，取值范围为**1**~**32766**。
     * 数字越小，优先级越高。同一账号在同一个地域创建的镜像会话优先级不能重复。
     * @example `1`
     */
    "Priority"?: number;
    /**
     * 是否开启流量会话，取值：
     * - **false**（默认值）：不开启流量会话。
     * - **true**：开启流量会话。
     * @example `false`
     */
    "Enabled"?: boolean;
    /**
     * 镜像会话的实例ID。其中**N**最大取值为**100**，即支持查询最多100个镜像会话。
     * @example `tms-j6cla50buc44ap8tu****`
     */
    "TrafficMirrorSessionIds"?: string[];
    /**
     * 镜像会话的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。关于流量镜像支持的地域，请参见[流量镜像概述](~~207513~~)。
     * @example `cn-hongkong`
     */
    "RegionId": string;
    /**
     * 需要查询的流量镜像所属的资源组ID。
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
