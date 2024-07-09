export interface UpdateTrafficMirrorSessionAttributeRequest {
    /**
     * 要修改的镜像会话描述。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is a new session.`
     */
    "TrafficMirrorSessionDescription"?: string;
    /**
     * 要修改的镜像会话名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "TrafficMirrorSessionName"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改镜像会话的配置信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并直接修改镜像会话的配置信息。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要修改的镜像会话的实例ID。
     * @example `tms-j6cla50buc44ap8tu****`
     */
    "TrafficMirrorSessionId": string;
    /**
     * 要修改的镜像目的实例ID。
     * @example `eni-j6c2fp57q8rr47rp*****`
     */
    "TrafficMirrorTargetId"?: string;
    /**
     * 要修改的镜像目的类型，取值：
     * - **NetworkInterface**：弹性网卡。
     * - **SLB**：私网负载均衡实例。
     * @example `NetworkInterface`
     */
    "TrafficMirrorTargetType"?: string;
    /**
     * 要修改的流量镜像筛选条件的实例ID。
     * @example `tmf-j6cmls82xnc86vtpe****`
     */
    "TrafficMirrorFilterId"?: string;
    /**
     * 要修改的指定VNI，用来区分不同的镜像流量，取值范围为**0**~**16777215**。
     * 您可以通过VNI在镜像目的区分不同会话的镜像流量。您可以自定义VNI的值，也可以由系统随机分配该值。如果由系统随机分配，该参数无需配置。
     * @example `10`
     */
    "VirtualNetworkId"?: number;
    /**
     * 要修改的镜像会话的优先级，取值范围为**1**~**32766**。
     * 数字越小，优先级越高。同一账号在同一个地域创建的镜像会话优先级不能重复。
     * @example `2`
     */
    "Priority"?: number;
    /**
     * 指定被镜像的原始报文长度（不包含VXLAN报文长度），默认值**1500**，取值范围：**64**～**8500**，单位：字节。
     * - 该参数的大小会影响镜像目的收到的报文长度，详情请参见[流量镜像概述](~~207513~~)中的镜像报文长度和MTU限制。
     * - 该参数仅在部分地域可用，详情请参见[创建和管理流量镜像](~~207514~~)中的镜像报文长度参数描述。
     * @example `1500`
     */
    "PacketLength"?: number;
    /**
     * 是否开启流量会话，取值：
     * - **false**（默认值）：不开启流量会话。
     * - **true**：开启流量会话。
     * @example `false`
     */
    "Enabled"?: boolean;
    /**
     * 镜像会话的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。关于流量镜像支持的地域，请参见[流量镜像概述](~~207513~~)。
     * @example `cn-hongkong`
     */
    "RegionId": string;
}
