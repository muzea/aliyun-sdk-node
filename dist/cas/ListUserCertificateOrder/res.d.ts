export interface ListUserCertificateOrderResponse {
    /**
     * 分页数据。
     * @example `10`
     */
    ShowSize: number;
    /**
     * 分页数据。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 查询数据总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 证书及订单列表。
     * @example `{"CertificateOrderList": [{"Status": "PAYED","ProductName": "专业版通配符 OV SSL","InstanceId": "cert-instanceId","ProductCode": "globalsign-xxxx","SourceType": "buy","WildDomainCount": 1,"CertType": "OV","PartnerOrderId": "","OrderId": 3451111,"Algorithm": "RSA","RootBrand": "GlobalSign","AliyunOrderId": 21xxxxxx40655,"DomainType": "WILDCARD","TrusteeStatus": "trustee","Domain": "","BuyDate": 1632649385000,"DomainCount": 1}]}`
     */
    CertificateOrderList: {
        /**
         * 算法，当入参OrderType=CPACK或者BUY时返回。
         * @example `RSA`
         */
        Algorithm: string;
        /**
         * 阿里云订单号，当入参OrderType=CPACK或者BUY时返回。
         * @example `234567`
         */
        AliyunOrderId: number;
        /**
         * 购买时间。单位：毫秒，当入参OrderType=CPACK或者BUY时返回。
         * @example `1634283958000`
         */
        BuyDate: number;
        /**
         * 证书过期时间，单位：毫秒，当入参OrderType=CPACK或者BUY时返回。
         * @example `1665819958000`
         */
        CertEndTime: number;
        /**
         * 证书开始时间，单位：毫秒，当入参OrderType=CPACK或者BUY时返回。
         * @example `1665819958000`
         */
        CertStartTime: number;
        /**
         * 证书类型，当入参OrderType=CPACK或者BUY时返回。类型：
         * - **DV**：DV类型的证书。
         * - **EV**：EV类型的证书。
         * - **OV**：OV类型的证书。
         * **FREE**：免费证书（仅中国站支持）。
         * @example `FREE`
         */
        CertType: string;
        /**
         * 域名，当入参OrderType=CPACK或者BUY时返回。
         * @example `aliyundoc.com`
         */
        Domain: string;
        /**
         * 购买域名总个数，当入参OrderType=CPACK或者BUY时返回。
         * @example `1`
         */
        DomainCount: number;
        /**
         * 域名类型，当入参OrderType=CPACK或者BUY时返回。类型：
         * - **ONE**：单域名。
         * - **MULTIPLE**：多域名。
         * - **WILDCARD**：单通配符域名。
         * - **M_WILDCARD**：多通配符域名。
         * - **MIX**：混合域名。
         * @example `ONE`
         */
        DomainType: string;
        /**
         * 资源ID。
         * @example `cas-instanceId`
         */
        InstanceId: string;
        /**
         * 订单ID，当入参OrderType=CPACK或者BUY时返回。
         * @example `2345687`
         */
        OrderId: number;
        /**
         * 第三方CA订单号，当入参OrderType=CPACK或者BUY时返回。
         * @example `ca-123456`
         */
        PartnerOrderId: string;
        /**
         * 订单规格ID，当入参OrderType=CPACK或者BUY时返回。
         * @example `bykj123456`
         */
        ProductCode: string;
        /**
         * 订单规格名称，当入参OrderType=CPACK或者BUY时返回。
         * @example `CFCA`
         */
        ProductName: string;
        /**
         * 品牌（包括WoSign、CFCA、DigiCert、vTrus等），当入参OrderType=CPACK或者BUY时返回。
         * @example `CFCA`
         */
        RootBrand: string;
        /**
         * 订单类型，当入参OrderType=CPACK或者BUY时返回。
         * - **cpack**：资源虚拟订单。
         * - **buy**：售卖订单。
         * @example `buy`
         */
        SourceType: string;
        /**
         * 订单或者证书状态，当入参OrderType=CPACK或者BUY时返回。
         * - **PAYED**：待申请。
         * - **CHECKING**：审核中。
         * - **CHECKED_FAIL**：审核失败。
         * - **ISSUED**：已签发。
         * - **WILLEXPIRED**：即将过期。
         * - **EXPIRED**：已过期。
         * - **NOTACTIVATED**：未激活。
         * - **REVOKED**：吊销完成。
         * @example `PAYED`
         */
        Status: string;
        /**
         * 托管状态，当入参OrderType=CPACK或者BUY时返回。
         * - **unTrustee**：未托管。
         * - **trustee**：托管。
         * @example `unTrustee`
         */
        TrusteeStatus: string;
        /**
         * 购买泛域名个数，当入参OrderType=CPACK或者BUY时返回。
         * @example `0`
         */
        WildDomainCount: number;
        /**
         * 证书ID，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `896521`
         */
        CertificateId: number;
        /**
         * 证书名称 ，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `cert-name`
         */
        Name: string;
        /**
         * 证书的主域名，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `aliyun.com`
         */
        CommonName: string;
        /**
         * 证书指纹，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `CC6B3696E7C7CA715BD26E28E45FF3E3DF435C03`
         */
        Fingerprint: string;
        /**
         * 证书Sha2值，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `56B4DED2243A81DD909D7C39824FFE4DDBD87F91BFA46CD333FF212FE0E7CB11`
         */
        Sha2: string;
        /**
         * 证书序列号，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `040a6e493cffdda6d744acf99b6576cf`
         */
        SerialNo: string;
        /**
         * 证书签发者，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `MyIssuer`
         */
        Issuer: string;
        /**
         * 证书组织名称，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `阿里云`
         */
        OrgName: string;
        /**
         * 省或自治区，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `浙江省`
         */
        Province: string;
        /**
         * 城市，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `杭州市`
         */
        City: string;
        /**
         * 国家代码，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `CN`
         */
        Country: string;
        /**
         * 证书绑定的所有域名。多个域名之间使用半角逗号（,）分隔，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `aliyun.com`
         */
        Sans: string;
        /**
         * 证书是否过期，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `true`
         */
        Expired: boolean;
        /**
         * 证书是否上传证书，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `false`
         */
        Upload: boolean;
        /**
         * 证书开始时间，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `2021-11-16`
         */
        StartDate: string;
        /**
         * 证书结束时间，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `2022-11-17`
         */
        EndDate: string;
        /**
         * 资源分组ID，当入参OrderType=CERT或者UPLOAD时返回。
         * @example `rg-ae******4wia`
         */
        ResourceGroupId: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
}
