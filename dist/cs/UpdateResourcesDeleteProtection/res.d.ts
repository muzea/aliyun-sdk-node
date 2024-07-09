export interface UpdateResourcesDeleteProtectionResponse {
    /**
     * Id of the request
     * @example `0527ac9a-c899-4341-a21a-xxxxxxxxx`
     */
    requestId: string;
    /**
     * 资源所在的namespace。
     * @example `default`
     */
    namespace: string;
    /**
     * 删除保护的资源类型。
     * @example `namespaces或services`
     */
    resource_type: string;
    /**
     * 删除保护状态变更的资源列表。
     */
    resources: string[];
    /**
     * 是否开启删除保护：开启为enable，关闭为disable。
     * @example `enable或disable`
     */
    protection: string;
}
