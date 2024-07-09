export interface MoveResourcesRequest {
    /**
     * 将要转入的目标资源组ID。
     * @example `rg-aekzmeobk5w****`
     */
    "ResourceGroupId": string;
    /**
     * 将要转移的资源列表。
     * > 每次最多转移10个资源。多个资源请分批转移。
     */
    "Resources": {
        /**
         * 资源ID。
         * @example `i-23v38****`
         */
        ResourceId: string;
        /**
         * 资源类型。
         * 您可以从[支持资源组的云服务](~~94479~~)的**资源类型**列获取。
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 资源所属的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 云服务代码。
         * 您可以从[支持资源组的云服务](~~94479~~)的**云服务代码**列获取。
         * @example `ecs`
         */
        Service: string;
    }[];
}
