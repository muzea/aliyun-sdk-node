export interface ModifyFullNatEntryAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 需要修改的FULLNAT表ID。
     * @example `fulltb-gw88z7hhlv43rmb26****`
     */
    "FullNatTableId": string;
    /**
     * 需要修改的FULLNAT条目ID。
     * @example `fullnat-gw8fz23jezpbblf1j****`
     */
    "FullNatEntryId": string;
    /**
     * 需要修改的弹性网卡ID。
     * @example `eni-gw8g131ef2dnbu3k****`
     */
    "NetworkInterfaceId"?: string;
    /**
     * 需要修改的NAT IP地址。
     * @example `192.168.XX.XX`
     */
    "NatIp"?: string;
    /**
     * 需要修改的FULLNAT端口映射的前端端口，取值：**1**~**65535**。
     * @example `80`
     */
    "NatIpPort"?: string;
    /**
     * 需要修改的FULLNAT地址转换的后端IP地址。
     * @example `192.168.XX.XX`
     */
    "AccessIp"?: string;
    /**
     * 需要修改的FULLNAT端口映射的后端端口，取值：**1**~**65535**。
     * @example `80`
     */
    "AccessPort"?: string;
    /**
     * 转发端口的协议类型，取值：
     * - **TCP**：转发TCP协议的报文。
     * - **UDP**：转发UDP协议的报文。
     * @example `TCP`
     */
    "IpProtocol"?: string;
    /**
     * 需要修改的FULLNAT条目名称，即修改后的名称。
     * 长度为2~128个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `modify`
     */
    "FullNatEntryName"?: string;
    /**
     * 需要修改的FULLNAT条目的描述信息，即修改后的描述信息。
     * 描述可以为空；或填写2~256个字符，不能以`http://`或`https://`开头。
     * @example `abcd`
     */
    "FullNatEntryDescription"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改FULLNAT条目。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并修改FULLNAT条目。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 需要修改的FULLNAT条目所在VPC NAT网关的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
}
