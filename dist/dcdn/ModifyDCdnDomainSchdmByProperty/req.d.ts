export interface ModifyDCdnDomainSchdmByPropertyRequest {
    /**
     * 需修改加速区域的域名，仅支持单个修改。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 加速区域属性，{"coverage":"overseas"}。
     * 其中coverage参数的取值如下：
     * - **domestic**：仅中国内地。
     * - **overseas**：全球（不包含中国内地）。
     * - **global**：全球。
     * @example `{"coverage":"overseas"}`
     */
    "Property": string;
}
