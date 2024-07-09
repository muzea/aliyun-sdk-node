export interface ModifyInstanceConfigRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 需修改的实例参数，格式为JSON，修改后的值会覆盖原来的值。例如您只希望修改**maxmemory-policy**参数为**noeviction**，您可以传入`{"maxmemory-policy":"noeviction"}`。
     * > 关于各参数的详细说明，请参见[参数说明](~~259681~~)。
     * @example `{"maxmemory-policy":"volatile-lru","zset-max-ziplist-entries":128,"zset-max-ziplist-value":64,"hash-max-ziplist-entries":512,"set-max-intset-entries":512}`
     */
    "Config": string;
}
