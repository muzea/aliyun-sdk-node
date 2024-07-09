export interface DescribeLiveDomainDetailResponse {
    /**
     * 域名配置详情。
     */
    DomainDetail: {
        /**
         * 证书名称。
         * @example `liveCert****`
         */
        CertName: string;
        /**
         * CNAME域名。为直播域名生成一个CNAME域名，需要在域名解析服务商处将直播域名CNAME解析到该域名。
         * >由于Local DNS的解析记录存在缓存时间，因此在配置域名的CNAME解析记录之后大约会延迟10分钟才会显示CNAME解析记录配置成功。详细内容，请参见[CNAME解析常见问题](~~362010~~)。
         * @example `learn.developer.aliyundoc.com`
         */
        Cname: string;
        /**
         * 域名备注，说明信息。
         * @example `test`
         */
        Description: string;
        /**
         * 直播推流域名或播流域名。
         * @example `demo.aliyundoc.com`
         */
        DomainName: string;
        /**
         * 直播域名运行状态。取值：
         * - **online**：启用。
         * - **offline**：停用。
         * - **configuring**：配置中。
         * @example `online`
         */
        DomainStatus: string;
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-07-27T06:51:25Z`
         */
        GmtCreated: string;
        /**
         * 最近修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-08-07T06:51Z`
         */
        GmtModified: string;
        /**
         * 域名业务类型。取值：
         * - **liveVideo**：播流域名。
         * - **liveEdge**：边缘推流域名。
         * @example `liveVideo`
         */
        LiveDomainType: string;
        /**
         * 域名所属地域。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 是否开启SSL证书。取值：
         * - **on**：开启。
         * - **off**：关闭。
         * @example `on`
         */
        SSLProtocol: string;
        /**
         * 证书公钥。
         * @example `Public Key`
         */
        SSLPub: string;
        /**
         * 加速区域。取值：
         * - **domestic**：中国内地。
         * - **overseas**：海外及港澳台加速。
         * - **global**：全球加速。
         * @example `domestic`
         */
        Scope: string;
    };
    /**
     * 请求ID。
     * @example `09ABE829-6CD3-4FE0-AFEE-556113E29727`
     */
    RequestId: string;
}
