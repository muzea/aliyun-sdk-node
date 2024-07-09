export interface ChangeResourceGroupRequest {
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 新资源组Id
         * @example `rg-acfmxwerqwerasfd`
         */
        newResourceGroupId: string;
        /**
         * 实例id。
         * @example `hgprecn-cn-zvp25ysv3006`
         */
        instanceId: string;
    };
}
