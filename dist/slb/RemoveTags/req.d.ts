interface RemoveTagsRequest {
    /**
    * 负载均衡实例的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 负载均衡实例ID。
    * @example `139a00604ad-cn-east-hangzhou-01`
    */ "LoadBalancerId": string;
    /**
    * 需要解绑的Tag列表。
    * @example `[{"TagKey":"Key1","TagValue":"Value1"}{"TagKey":"Key2","TagValue":"Value2"}]`
    */ "Tags": string;
    "OwnerId"?: number;
    "access_key_id"?: string;
}
export { RemoveTagsRequest };