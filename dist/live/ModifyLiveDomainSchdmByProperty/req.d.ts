export interface ModifyLiveDomainSchdmByPropertyRequest {
    /**
     * 需修改加速区域的直播域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 修改加速区域。
     * {“coverage”:“overseas”} 指的是该配置面向的是海外区域。下面是对三个支持的coverage值的说明：
     * - domestic：中国内地。
     * - overseas：海外及港澳台加速。
     * - global：全球加速。
     * @example `{"coverage":"global"}`
     */
    "Property": string;
}
