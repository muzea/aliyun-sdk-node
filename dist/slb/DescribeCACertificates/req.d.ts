interface DescribeCACertificatesRequest {
    /**
    * CA证书的地域。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    /**
    * CA证书ID。
    * @example `139a00604bd-cn-east-hangzhou-02`
    */ "CACertificateId"?: string;
    /**
    * 企业资源组ID。
    * @example `rg-atstuj3rtoptyui`
    */ "ResourceGroupId"?: string;
    "Tag"?: string[];
}
export { DescribeCACertificatesRequest };