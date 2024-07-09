export interface UpdateK8sApplicationConfigRequest {
    /**
     * 应用ID，可以调用ListApplication接口获取，详情请参见[ListApplication](~~423162~~)。
     * @example `23bf94d9-****-4994-9917-616a827aa777`
     */
    "AppId": string;
    /**
     * 集群ID，可以调用ListCluster接口获取，详情请参见[ListCluster](~~411844~~)。
     * @example `9c28bbb9-****-44b3-b953-54ef8a2d0be2`
     */
    "ClusterId"?: string;
    /**
     * 应用运行过程中，应用实例的CPU限额，单位：核。设置为0表示不做限制。
     * @example `1`
     */
    "CpuLimit"?: string;
    /**
     * 应用运行过程中，应用实例的内存限额，单位：MB。设置为0表示不做限制。
     * @example `4`
     */
    "MemoryLimit"?: string;
    /**
     * CPU能使用的最大值，单位：核数。设置为0表示不做限制。
     * @example `1`
     */
    "McpuLimit"?: string;
    /**
     * 应用运行过程中，应用实例需要申请的CPU配额，推荐设置。单位：核数，设置为0表示不限制。
     * > 设置该参数时，还需要设置CpuLimit参数，且需要小于等于CpuLimit的参数值。
     * @example `1`
     */
    "CpuRequest"?: string;
    /**
     * CPU最小资源需求，单位：核数。设置为0表示不限制。
     * > 设置该参数时，还需要设置CpuLimit参数，且需要小于等于CpuLimit的参数值。
     * @example `1000`
     */
    "McpuRequest"?: string;
    /**
     * 应用运行过程中，应用实例需要申请的内存配额，推荐设置。单位：MB。设置为0表示不申请。
     * > 设置该参数时，还需要设置MemoryLimit参数，且需要小于等于MemoryLimit的参数值。
     * @example `400`
     */
    "MemoryRequest"?: string;
    /**
     * 变更流程超时时间，单位：秒。取值范围1~1800秒，默认值为600秒。
     * @example `60`
     */
    "Timeout"?: number;
    /**
     * 临时存储最小资源需求，单位：GB。设置0表示不限制。
     * > 设置该参数时，还需要设置EphemeralStorageLimit参数，且需要小于等于EphemeralStorageLimit的参数值。
     * @example `2`
     */
    "EphemeralStorageRequest"?: string;
    /**
     * 临时存储资源需求上限，单位：GB。设置0表示不限制。
     * @example `4`
     */
    "EphemeralStorageLimit"?: string;
}
