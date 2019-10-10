interface ConfigLayer7CertRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    "SourceIp"?: string;
    /**
    * 要操作的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 资源组ID。
    * @example `xx`
    */ "ResourceGroupId"?: string;
    /**
    * 证书ID。
    * > 若传入此参数，则无需传入**CertName**、**Cert**、**Key**。
    * @example `1234`
    */ "CertId"?: number;
    /**
    * 证书名称。
    * > 若传入此参数，则必须同时传入**Cert**和**Key**。若传入**CertName**、**Cert**、**Key**组合，则无需传入**CertId**。
    * @example `testCertName`
    */ "CertName"?: string;
    /**
    * 证书公钥。
    * > 若传入此参数，则必须同时传入**CertName**和**Key**。若传入**CertName**、**Cert**、**Key**组合，则无需传入**CertId**。
    * @example `xx`
    */ "Cert"?: string;
    /**
    * 证书私钥。
    * > 若传入此参数，则必须同时传入**CertName**和**Cert**。若传入**CertName**、**Cert**、**Key**组合，则无需传入**CertId**。
    * @example `xx`
    */ "Key"?: string;
}
export { ConfigLayer7CertRequest };