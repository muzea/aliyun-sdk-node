export interface DescribeVodDomainCertificateInfoResponse {
    /**
     * 请求ID。
     * @example `5C1E43DC-9E51-4771-****-7D5ECEB547A1`
     */
    RequestId: string;
    CertInfos: {
        /**
         * 证书信息。
         */
        CertInfo: {
            /**
             * 证书状态。
             * - **success**：已生效
             * - **checking**：检测域名是否在阿里云点播
             * - **cname_error**：域名没有切到阿里云点播
             * - **domain_invalid**：域名包含非法字符
             * - **unsupport_wildcard**：不支持泛域名
             * - **applying**：证书申请中
             * - **failed**：证书申请失败
             * > 仅当`CertType`为`free`时，该字段才会返回值，其他类型的证书该字段返回为空。
             * @example `success`
             */
            Status: string;
            /**
             * 证书时长。单位：months（月），years（年）。
             * @example `3 months`
             */
            CertLife: string;
            /**
             * 证书过期时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-06-03T13:03:39Z`
             */
            CertExpireTime: string;
            /**
             * 证书类型。取值：
             * - **free**：免费证书
             * - **cas**：云盾证书
             * - **upload**：自定义上传
             * @example `free`
             */
            CertType: string;
            /**
             * HTTPS证书开启状态。
             * - **on**：已开启
             * - **off**：未开启
             * @example `on`
             */
            ServerCertificateStatus: string;
            /**
             * 证书匹配的域名。
             * @example `example.com`
             */
            CertDomainName: string;
            /**
             * 证书名称。
             * @example `cert-example.com`
             */
            CertName: string;
            /**
             * 证书组织。
             * @example `Let's Encrypt`
             */
            CertOrg: string;
            /**
             * 加速域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
