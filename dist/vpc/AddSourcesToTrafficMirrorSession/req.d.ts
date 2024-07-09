export interface AddSourcesToTrafficMirrorSessionRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会添加镜像源。检查项包括是否填写了必需参数、请求格式和限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接添加镜像源。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 需要增加镜像源的镜像会话实例ID。
     * @example `tms-j6cla50buc44ap8tu****`
     */
    "TrafficMirrorSessionId": string;
    /**
     * 需要增加的镜像源的实例ID，目前支持弹性网卡作为镜像源。其中**N**的默认值为**1**，即一个镜像会话只支持添加一个镜像源。
     * @example `eni-j6ccmrl8z3xkvxgw****`
     */
    "TrafficMirrorSourceIds": string[];
    /**
     * 镜像会话的所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * 关于流量镜像支持的地域，请参见[流量镜像概述](~~207513~~)。
     * @example `cn-hongkong`
     */
    "RegionId": string;
}
