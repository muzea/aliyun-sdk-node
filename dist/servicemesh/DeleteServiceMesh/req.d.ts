export interface DeleteServiceMeshRequest {
    /**
     * 服务网格ID
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * 是否强制删除ASM实例，取值：
     * - ` true`：强制删除ASM实例
     * - `false`：不强制删除ASM实例
     * 默认值： false
     * @example `false`
     */
    "Force"?: boolean;
    /**
     * json格式的字符串，可以被解析为一个字符串数组。指定在删除网格时、需要保留的网格相关资源的列表，数组内的值是需要保留的资源的实例ID。
     * @example `[" lb-bp1fxvl3q8akbj6m*****", "lb-bp1hoxkolggdw0y3*****"]`
     */
    "RetainResources"?: string;
}
