export interface SetResourceTypeRequest {
    /**
     * 资源类型。
     * @example `MODULE::MyOrganization::MyService::MyUsecase`
     */
    "ResourceType": string;
    /**
     * 版本ID。如果要修改资源类型某个版本，请指定该参数。否则，修改资源类型。
     * > 您仅能指定VersionId、DefaultVersionId其中一个参数。
     * @example `v1`
     */
    "VersionId"?: string;
    /**
     * 默认版本ID。指定该参数设置资源类型的默认版本。
     * > 您仅能指定VersionId、DefaultVersionId其中一个参数。
     * @example `v1`
     */
    "DefaultVersionId"?: string;
    /**
     * 资源类型或资源类型版本的描述。最大长度为512个字符。
     * @example `It is a demo.`
     */
    "Description"?: string;
}
