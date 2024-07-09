export interface UpdateDNSServiceRuleAttributeRequest {
    /**
     * 云连接器实例ID。
     * @example `iotcc-1y6h8z7imd2yu4****`
     */
    "IoTCloudConnectorId": string;
    /**
     * DNS授权规则ID。
     * @example `ar-r56ijpurlu50gi****`
     */
    "DNSServiceRuleId": string;
    /**
     * DNS授权规则的目标类型。取值：
     * - **Normal**：普通类型。
     * - **DNSRedirect**：重定向类型，重定向类型指将当前DNS服务地址重定向至另一个地址。
     * @example `Normal`
     */
    "ServiceType"?: string;
    /**
     * 重定向后的DNS服务地址。
     * >  当**ServiceType**参数取值为**DNSRedirect**时，该参数必选。
     * @example `192.168.0.2`
     */
    "Destination"?: string;
    /**
     * 源DNS IP地址。包括但不限于以下取值：
     * **100.100.2.136**，**100.100.2.137**，**100.100.2.138**，**114.114.114.114**，**8.8.8.8**，**8.8.4.4**，**223.5.5.5**，**223.6.6.6**，**221.5.88.88**，**116.116.116.116**，**221.228.15.26**，**61.139.2.69**，**218.6.200.139**，**119.29.29.29**，**218.2.2.2**，**208.67.220.220**，**208.67.222.222**，**218.4.4.4**。
     * <props="china">除以上默认的DNS授权规则的IP，如有其他DNS授权规则的IP诉求，请[提交工单](https://selfservice.console.aliyun.com/ticket/category/ga/today)，并在工单中附上需要申请的DNS授权规则的IP。
     * </props>
     * <props="intl">除以上默认的DNS授权规则的IP，如有其他DNS授权规则的IP诉求，请[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex)，并在工单中附上需要申请的DNS授权规则的IP。</props>
     * @example `100.100.2.138`
     */
    "Source"?: string;
    /**
     * DNS授权规则名称。
     * 长度为2~128个英文或中文字符，开头必须为大小写英文字母或中文，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `test`
     */
    "DNSServiceRuleName"?: string;
    /**
     * DNS授权规则描述。
     * 长度为2~256个字符，开头必须为大小写英文字母或中文，但不能为`http://`或`https://`。
     * @example `description`
     */
    "DNSServiceRuleDescription"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改DNS授权规则。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行修改。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * DNS授权规则所在的地域ID。
     * 您可以通过调用[ListRegions](~~313836~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
