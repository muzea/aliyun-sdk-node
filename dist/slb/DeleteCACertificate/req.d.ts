interface DeleteCACertificateRequest {
    /**
    * CA证书的地域。
    * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * CA证书ID。
    * @example `123157908xxxxxxx_15c73d77203_-986300114_-2110544xxx`
    */ "CACertificateId": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
}
export { DeleteCACertificateRequest };