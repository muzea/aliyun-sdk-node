export interface ChangeResourceGroupRequest {
    /**
     * 资源所属的Project名称。
     * @example `ali-test-project`
     */
    "project"?: string;
    /**
     * 请求结构体。
     * @example `ali-test-project`
     */
    "body"?: {
        /**
         * 资源的类型。只支持PROJECT，固定填写为PROJECT。
         * @example `PROJECT`
         */
        resourceType: string;
        /**
         * Project名称。
         * @example `ali-test-project`
         */
        resourceId: string;
        /**
         * [资源组ID](~~151181~~)
         * @example `rg-ae******ey`
         */
        resourceGroupId: string;
    };
}
