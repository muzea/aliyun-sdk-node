export interface ChangeResourceGroupRequest {
    /**
     * 实例id。
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId"?: string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 新资源组id
         * @example `rg-acfmxr3gs*****`
         */
        newResourceGroupId: string;
        /**
         * 资源类型
         * @example `instance`
         */
        resourceType: string;
    };
}
