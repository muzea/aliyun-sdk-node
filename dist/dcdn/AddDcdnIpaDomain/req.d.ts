export interface AddDcdnIpaDomainRequest {
    /**
     * 需要接入全站加速IPA的域名。
     * 支持泛域名，以英文句号（.）开头，例如：.example.com。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 资源组ID。不传该参数时，系统自动补全默认资源组ID。
     * @example `rg`
     */
    "ResourceGroupId"?: string;
    /**
     * 回源地址列表。
     * @example `[{"content":"10.10.10.10","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
     */
    "Sources": string;
    /**
     * 检测URL。
     * @example `example.com/image_01.png`
     */
    "CheckUrl"?: string;
    /**
     * 加速区域。取值：
     * - **domestic**：仅中国内地。
     * - **overseas**：全球（不包含中国内地）。
     * - **global**：全球。
     * @example `domestic`
     */
    "Scope"?: string;
    /**
     * 顶级接入域。
     * @example `*.com`
     */
    "TopLevelDomain"?: string;
    /**
     * 协议名称。取值：
     * - **udp**：UDP协议。
     * - **tcp**：TCP协议。
     * > 例如：`{"protocol":"udp"}`。
     * @example `udp`
     */
    "Protocol"?: string;
}
