interface DescribeLiveDomainOnlineUserNumRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 您的播流域名。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 查询的时间UTC 格式，精确到秒。
    * @example `2018-12-27T13:09:21Z`
    */ "QueryTime"?: string;
}
export { DescribeLiveDomainOnlineUserNumRequest };