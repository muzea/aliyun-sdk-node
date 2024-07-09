export interface AttachVpcToNetLinkRequest {
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 网络连接id。
     * @example `cciot-xxxx`
     */
    "NetLinkId": string;
    /**
     * 专有网络id。
     * @example `vpc-bp1etmgc4vooo5ahbkzou`
     */
    "VpcId": string;
    /**
     * 客户的专有网络下的交换机，必须是2个进行主备，且交换机的可用区和和网络连接的可用区保持一致。
     */
    "VSwitches": string[];
    /**
     * 地域id。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `TF-******-1633255280-43c94bf7-2dd3-4c14-8`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会关联用户Vpc和Vswitch。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后关联用户Vpc和Vswitch到5G高速上云实例。
     * @example `true`
     */
    "DryRun"?: boolean;
}
