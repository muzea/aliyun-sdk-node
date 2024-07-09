export interface CreateImageCacheResponse {
    /**
     * 请求ID，唯一标识。
     * @example `0E234675-3465-4CC3-9D0F-9A864BC391DD`
     */
    RequestId: string;
    /**
     * 镜像缓存ID。
     * @example `imc-2zebxkiifuyzzlhl****`
     */
    ImageCacheId: string;
    /**
     * 用于中转创建镜像缓存的ECI实例ID。
     * @example `eci-2zebxkiifuyzzlhl****`
     */
    ContainerGroupId: string;
}
