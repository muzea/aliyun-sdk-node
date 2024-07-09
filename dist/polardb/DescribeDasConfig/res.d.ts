export interface DescribeDasConfigResponse {
    /**
     * 请求ID。
     * @example `593AE1C5-B70C-463F-9207-074639******`
     */
    RequestId: string;
    /**
     * 标准版集群是否开启存储自动扩容。取值范围如下：
     * - Enable：开启存储自动扩容。
     * - Disable：关闭存储自动扩容。
     * @example `Enable`
     */
    StorageAutoScale: string;
    /**
     * 标准版集群存储自动扩容上限。单位：GB。
     * > 该参数仅在StorageAutoScale参数值为Enable时有效。
     * @example `800`
     */
    StorageUpperBound: number;
}
