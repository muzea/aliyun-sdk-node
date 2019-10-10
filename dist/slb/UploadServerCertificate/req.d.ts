interface UploadServerCertificateRequest {
    /**
    * 服务器证书的地域。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 阿里云的云上证书ID。
    *
    *  使用阿里云的云上证书，该参数必选。
    * @example `730912673xxxxxx_15d97e7709a_71445759hr_789289731`
    */ "AliCloudCertificateId"?: string;
    /**
    * 阿里云的云上证书名称。
    * @example `testcertkey`
    */ "AliCloudCertificateName"?: string;
    /**
    * 要上传的公钥证书。
    * @example `test`
    */ "ServerCertificate"?: string;
    /**
    * 需要上传的私钥。
    * @example `wmsad!q23`
    */ "PrivateKey"?: string;
    /**
    * 要上传的服务器证书的名称。
    * 名称长度为 1~80 个英文或中文字符，必须以大小字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
    * @example `mycert01`
    */ "ServerCertificateName"?: string;
    "access_key_id"?: string;
    "Tags"?: string;
    /**
    * 企业资源组ID。
    * @example `rg-atstuj3rto****`
    */ "ResourceGroupId"?: string;
}
export { UploadServerCertificateRequest };