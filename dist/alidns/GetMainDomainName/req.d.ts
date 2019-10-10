interface GetMainDomainNameRequest {
    "RegionId"?: string;
    /**
    * 字符串，最长不超过128个字符。
    * @example `www.example.com`
    */ "InputString": string;
    /**
    * 用户语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户端IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { GetMainDomainNameRequest };