export interface LookupTmchNoticeRequest {
    /**
     * 域名商标词key，通过[CheckDomainSunriseClaim](https://help.aliyun.com/document_detail/97210.htm?spm=a2c4g.11186623.0.0.4aec615fTVPYjt)接口获取。
     * @example `2017092100/8/2/1/kDfu9htHGEx_y-LJ3XSlKMZ70000020001`
     */
    "ClaimKey": string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户IP，可以设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
