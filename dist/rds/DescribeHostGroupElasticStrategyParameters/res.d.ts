export interface DescribeHostGroupElasticStrategyParametersResponse {
    /**
     * 请求id。
     * @example `60F9A12A-16B8-4728-B099-4CA38D32C31C`
     */
    RequestId: string;
    /**
     * 实例的当前cpu使用率。单位：%。
     * @example `20`
     */
    CpuShar: number;
    /**
     * io请求次数。
     * @example `10`
     */
    IopsZoom: number;
    /**
     * 实例规格的最大并发连接数。
     * @example `30`
     */
    MaxConnZoom: number;
    /**
     * 实例的cpu使用量。单位：核
     * @example `4`
     */
    CpuZoom: number;
    /**
     * 当前专属集群中实例的内存总量。单位：mb。
     * @example `1000`
     */
    MemoryZoom: number;
}
