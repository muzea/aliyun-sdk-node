interface AddCasterEpisodeGroupRequest {
    "RegionId"?: string;
    /**
    * 域名。
    * @example `XXXXX.XXX.XXX`
    */ "DomainName": string;
    "Item": string[];
    /**
    * 起始时间。
    * UTC格式，例如：`2016-06-29T19:00:00Z `。
    * @example `2018-03-06T19:00:00Z`
    */ "StartTime": string;
    /**
    * 重复次数。其中。**0**表示不循环，**-1**表示无限循环。
    * @example `3`
    */ "RepeatNum": number;
    /**
    * 用户自定义旁路输出地址。
    * @example `http://XXXX/XXXX`
    */ "SideOutputUrl": string;
    /**
    * 用户回调地址。
    * @example `http://XXXXXX/XXXXXXX`
    */ "CallbackUrl": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `8751ad99-2ddb-4aac-ad44-84b211021c04`
    */ "ClientToken": string;
}
export { AddCasterEpisodeGroupRequest };