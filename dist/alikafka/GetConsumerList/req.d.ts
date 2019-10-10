interface GetConsumerListRequest {
    /**
    * 地域 ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例 ID。
    * @example `alikafka_post-cn-v0h18sav****`
    */ "InstanceId": string;
    "PageSize"?: string;
    "CurrentPage"?: string;
}
export { GetConsumerListRequest };