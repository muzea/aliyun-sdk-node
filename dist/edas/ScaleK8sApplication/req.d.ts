export interface ScaleK8sApplicationRequest {
    /**
     * 应用ID，可调用[ListApplication](~~149390~~)接口获取。
     * @example `23bf94d9-****-4994-****-616a827aa777`
     */
    "AppId": string;
    /**
     * 需要扩容或保留的应用实例数量，最小为 0。
     * @example `2`
     */
    "Replicas": number;
    /**
     * 变更流程超时时间，单位：秒。
     * @example `60`
     */
    "Timeout"?: number;
}
