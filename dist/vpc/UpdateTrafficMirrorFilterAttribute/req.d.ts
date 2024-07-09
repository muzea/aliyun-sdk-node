export interface UpdateTrafficMirrorFilterAttributeRequest {
    /**
     * 流量镜像筛选条件的实例ID。
     * @example `tmf-j6cmls82xnc86vtpe****`
     */
    "TrafficMirrorFilterId": string;
    /**
     * 需要修改的流量镜像筛选条件的描述。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `This is a new filter.`
     */
    "TrafficMirrorFilterDescription"?: string;
    /**
     * 需要修改的流量镜像筛选条件的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "TrafficMirrorFilterName"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改流量镜像筛选条件的配置信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并直接修改筛选条件的配置信息。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 流量镜像的所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。关于流量镜像支持的地域，请参见[流量镜像概述](~~207513~~)。
     * @example `cn-hongkong`
     */
    "RegionId": string;
}
