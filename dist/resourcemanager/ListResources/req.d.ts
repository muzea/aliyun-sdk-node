export interface ListResourcesRequest {
    /**
     * 资源组ID。
     * @example `rg-uPJpP****`
     */
    "ResourceGroupId"?: string;
    /**
     * 云服务代码。
     * 您可以从[支持资源组的云服务](~~94479~~)的**云服务代码**列获取。
     * @example `ecs`
     */
    "Service"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 资源类型。
     * 您可以从[支持资源组的云服务](~~94479~~)的**资源类型**列获取。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 资源ID。
     * @example `i-23v38****`
     */
    "ResourceId"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据条数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源类型列表。最多支持50组。
     * > 如果您设置了`ResourceTypes`，则请求参数中单独设置的`Service`和`ResourceType`将不生效。
     */
    "ResourceTypes"?: {
        /**
         * 云服务代码。
         * N的取值范围：1~50。
         * 您可以从[支持资源组的云服务](~~94479~~)的**云服务代码**列获取。
         * > `ResourceTypes`中的`Service`和`ResourceType`参数必须同时设置，否则将不生效。
         * @example `ecs`
         */
        Service: string;
        /**
         * 资源类型。
         * N的取值范围：1~50。
         * 您可以从[支持资源组的云服务](~~94479~~)的**资源类型**列获取。
         * > `ResourceTypes`中的`Service`和`ResourceType`参数必须同时设置，否则将不生效。
         * @example `instance`
         */
        ResourceType: string;
    }[];
}
