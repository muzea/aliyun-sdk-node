export interface ListUsageResponse {
    /**
     * 请求ID。
     * @example `89164E78-FC82-4684-BE97-DCDD85D26546`
     */
    RequestId: string;
    /**
     * 指定地域权益配额的已使用量和使用上限的信息集合。包含以下几项：
     * - UsedCpu：已有vCPU数。
     * - MaxCpu：vCPU上限。
     * - MaxImageCacheCount：手动创建的镜像缓存数量上限。
     * - UsedImageCacheCount：已有的手动创建的镜像缓存数量。
     * - MaxAutoImageCacheCount：自动创建的镜像缓存数量上限。
     * - UsedAutoImageCacheCount：已有的自动创建的镜像缓存数量。
     * - MaxDataCacheCount：数据缓存数量上限。
     * - UsedDataCacheCount：已有的数据缓存数量。
     * @example `{
        "UsedAutoImageCacheCount": 4,
        "UsedDataCacheCount": 3,
        "MaxDataCacheCount": 100,
        "UsedCpu": 16.5,
        "MaxCpu": 1000,
        "MaxAutoImageCacheCount": 25,
        "MaxImageCacheCount": 500,
        "UsedImageCacheCount": 0
      }`
     */
    Attributes: any;
}
