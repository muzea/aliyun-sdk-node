export interface CreateGatewayRequest {
    /**
     * 资源组ID。如何获取资源组，请参见[ListResources](~~412133~~)接口返回结果中的ResourceId字段。
     * @example `eas-r-4gt8twzwllfo******`
     */
    "ResourceName"?: string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 私有网关使用的机型。取值如下：
         * - ecs.r7.8xlarge：旗舰版内存型r7（32核256 GB）。
         * - ecs.r7.4xlarge：专业版内存型r7（16核128 GB）。
         * @example `ecs.r7.4xlarge`
         */
        InstanceType: string;
        /**
         * 开启内网访问（默认值为true）。
         * @example `true`
         */
        EnableIntranet: boolean;
        /**
         * 开启公网访问（默认值为false）。
         * @example `false`
         */
        EnableInternet: boolean;
        /**
         * 私有网关别名。
         * @example `mygateway1`
         */
        Name: string;
    };
}
