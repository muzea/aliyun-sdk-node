export interface DeleteResourceInstancesRequest {
    /**
     * 资源组所在的地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-asdasdasd****`
     */
    "ResourceId": string;
    /**
     * 实例列表，多个实例之间以半角逗号（,）分割。例如：`instanceId1,instanceId2`。如何获取实例列表，请参见[ListResourceInstances](~~412129~~)。
     * @example `eas-i-xxxxxxx,eas-i-xxxxxxx`
     */
    "InstanceList"?: string;
    /**
     * 是否删除全部创建失败实例。
     * - true：表示删除全部失败实例。
     * - false：表示不删除失败实例。
     * @example `true`
     */
    "AllFailed"?: boolean;
}
