interface CAS {
    /**
    * 调用DescribeDVOrderResult接口查询DV订单的详细信息。
    */ DescribeDVOrderResult(query: {
        "RegionId"?: string;
        /**
        * 指定证书实例。
        * @example `cas-cn-***`
        */ "InstanceId": string;
        /**
        * 指定请求的来源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 添加证书。
    */ CreateUserCertificate(query: {
        "RegionId"?: string;
        /**
        * 自定义证书名称。一个用户下的证书名称不能重复。
        * @example `auto-test-AXX`
        */ "Name": string;
        /**
        * 指定证书内容。要使用PEM编码格式。
        * @example `---BEGIN CERTIFICATE----- MIIF...... -----END CERTIFICATE-----`
        */ "Cert": string;
        /**
        * 指定证书私钥内容。要使用PEM编码格式。
        * @example `---BEGIN RSA PRIVATE KEY----- MII.... -----END RSA PRIVATE KEY-----`
        */ "Key": string;
        /**
        * 指定请求的来源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * @example `ZH`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 查询单个证书的详细信息。
    */ DescribeUserCertificateDetail(query: {
        "RegionId"?: string;
        /**
        * 证书ID。调用**CreateUserCertificate**接口添加证书返回结果中的**CertId**。
        * @example `12345`
        */ "CertId": number;
        /**
        * 请求的来源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 提交DV订单。
    */ CreateDVOrderAudit(query: {
        "RegionId"?: string;
        /**
        *
        * 指定证书实例名称。
        * @example `cas-cn-1111`
        */ "InstanceId": string;
        /**
        * 指定域名。如果有多个域名，要用半角逗号分开。
        * @example `*.com`
        */ "Domain": string;
        /**
        * 指定域名授权验证类型。取值为FILE或DNS，注意是大写。
        * @example `DNS`
        */ "DomainVerifyType": string;
        /**
        *
        * 指定用户姓名。
        * @example `AXXX`
        */ "Username": string;
        /**
        *
        * 指定用户邮箱。
        * @example `*@xx.com`
        */ "Email": string;
        /**
        *
        * 指定手机号码。
        * @example `12345XXXXXX`
        */ "Mobile": string;
        /**
        *
        * 指定省份。建议用拼音。
        * @example `zhejiang`
        */ "Province": string;
        /**
        *
        * 指定城市。建议用拼音。
        * @example `hangzhou`
        */ "City": string;
        /**
        * 指定请求的来源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteUserCertificate接口删除用户的证书文件。
    */ DeleteUserCertificate(query: {
        "RegionId"?: string;
        /**
        * 指定证书ID。调用**CreateUserCertificate**接口添加证书返回结果中的**CertId**。
        * @example `111111`
        */ "CertId": number;
        /**
        * 指定请求的来源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeUserCertificateList接口查询证书列表信息。
    */ DescribeUserCertificateList(query: {
        "RegionId"?: string;
        /**
        * 指定每页显示多少条记录。默认取值为50。
        * @example `50`
        */ "ShowSize": number;
        /**
        * 指定当前页码。默认取值为1。
        * @example `1`
        */ "CurrentPage": number;
        /**
        * 请求的来源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{}>;
    /**
    * 查询证书订单实例列表。
    */ DescribeOrderInstanceList(query: {
        "RegionId"?: string;
        /**
        * 开始索引号。指定从该索引号开始查询证书订单实例信息。
        * @example `1`
        */ "StartIndex": number;
        /**
        * 指定访问源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 请求字段的语言种类。
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{}>;
}
export default CAS;
