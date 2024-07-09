export interface CreateInstanceRequest {
    /**
     * 实例名称
     * @example `导航实例`
     */
    "Name": string;
    /**
     * 实例描述
     * @example `第一个导航实例`
     */
    "Description"?: string;
    /**
     * 并发数量
     * @example `10`
     */
    "Concurrency": number;
    "UnionSource"?: string;
    "UnionInstanceId"?: string;
    "NluServiceParamsJson"?: string;
}
