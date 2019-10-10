interface AddCasterEpisodeGroupContentRequest {
    "RegionId"?: string;
    /**
    * JSON字符串型的轮播单信息。参数采用首字母大写驼峰格式。
    * @example `{"CallbackUrl":"http://XXX:8000/","SideOutputUrl":"rtmp://YYY","DomainName":"ZZZ","StartTime":"2018-03-26T16:00:00Z","RepeatNum":-1,"Items":[{"ItemName":"节目1","VodUrl":"http://xxx-1.ts"},{"ItemName":"节目2","VodUrl":"http://xxx-2.ts"}]}`
    */ "Content": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `8751ad99-2ddb-4aac-ad44-84b211021c04`
    */ "ClientToken": string;
}
export { AddCasterEpisodeGroupContentRequest };