interface UploadCACertificateRequest {
    /**
    * CA证书的地域。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 要上传CA证书的内容。
    * @example `test`
    */ "CACertificate": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    /**
    * CA证书名称。
    * @example `mycacert01`
    */ "CACertificateName"?: string;
    /**
    * 企业资源组ID。
    * @example `rg-atstuj3rtoptyui`
    */ "ResourceGroupId"?: string;
}
export { UploadCACertificateRequest };