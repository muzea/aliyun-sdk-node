export interface SynchronizeResourceRequest {
    /**
     * 同步的资源类型，该参数可选的参数值为：`ecs、slb、vpc、all`其中的一个，不支持其他格式的参数值。
     * @example `ecs`
     */
    "Type": string;
    /**
     * 指定的资源ID，仅当Type为`ecs`时支持填写此参数，如有多个ID，需要以逗号分隔，一次最多同步50个资源。
     * @example `i-bp17c***5q8x,i-bp1**5q8x`
     */
    "ResourceIds"?: string;
}
