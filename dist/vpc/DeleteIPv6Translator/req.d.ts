interface DeleteIPv6TranslatorRequest {
    /**
    * IPv6转换服务实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * IPv6转换服务实例ID。
    * @example `ipv6trans-bp1i8ahxut1iexxxx`
    */ "Ipv6TranslatorId": string;
    "OwnerId"?: number;
    /**
    * 客户端token用于保证请求的幂等性。要保证Client Token在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `ClientToken`
    */ "ClientToken"?: string;
}
export { DeleteIPv6TranslatorRequest };