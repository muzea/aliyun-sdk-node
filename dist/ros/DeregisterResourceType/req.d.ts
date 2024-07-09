export interface DeregisterResourceTypeRequest {
    /**
     * 资源类型。
     * @example `MODULE::MyOrganization::MyService::MyUsecase`
     */
    "ResourceType": string;
    /**
     * 版本ID。如果要删除资源类型某个版本，请指定该参数。
     * @example `v1`
     */
    "VersionId"?: string;
}
