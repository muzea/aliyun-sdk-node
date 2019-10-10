interface ModifyInstanceConfigRequest {
    "RegionId"?: string;
    /**
    * 实例的配置参数（JSON String），详情请参见[实例规格表](~~107984~~)。
    * @example `{"EvictionPolicy":"volatile-lru","list-max-ziplist-entries":512,"zset-max-ziplist-entries":128,"hash-max-ziplist-entries":512,"hash-max-ziplist-value":64,"list-max-ziplist-value":64,"set-max-intset-entries":512,"zset-max-ziplist-value":64}`
    */ "Config": string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { ModifyInstanceConfigRequest };