export interface GetResourceTypeTemplateRequest {
    /**
     * 资源类型。
     * 您可以调用[ListResourceTypes](~~133957~~)接口获取资源类型。
     * @example `ALIYUN::ECS::VPC`
     */
    "ResourceType": string;
    /**
     * 版本ID。如果要查询资源类型某个版本，请指定该参数。否则，查询资源类型。
     * > 当前仅模块支持版本。
     * @example `v1`
     */
    "VersionId"?: string;
}
