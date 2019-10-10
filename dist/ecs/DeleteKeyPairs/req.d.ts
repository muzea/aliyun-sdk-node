interface DeleteKeyPairsRequest {
    /**
    * SSH 密钥对所在的地域。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * SSH 密钥对名称。取值可以由多个 SSH 密钥对名称组成一个 JSON 数组，最多支持 100 对 SSH 密钥对，名称之间用半角逗号（,）隔开。
    * @example `["key-xxxxxxxxx", "key-yyyyyyyyy", … "key-zzzzzzzzz"]`
    */ "KeyPairNames": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { DeleteKeyPairsRequest };