export interface ChangeResourceManagerResourceGroupRequest {
    /**
     * 资源的类型，取值如下：
     * - project，工作空间。如果您需要修改的是DataWorks版本所归属的资源组信息时，请选择project。
     * - tenantresourcegroup，独享资源组。如果您需要修改的是DataWorks独享资源组所归属的资源组信息时，请选择tenantresourcegroup。
     * @example `project`
     */
    "ResourceType": string;
    /**
     * 资源类型的ID标识符，取值如下：
     * - 当ResourceType=project时，则ResourceId可以理解为通过[ListProjects](~~2780068~~)接口获取工作空间的名称（ProjectIdentifier）。
     * - 当ResourceType=tenantresourcegroup时，则ResourceId可以理解为通过[ListResourceGroups](~~2780075~~)接口获取独享资源组的标识（Identifier）, 仅限ResourceGroupType=7、8、9的类型。
     * @example `test_project`
     */
    "ResourceId": string;
    /**
     * 目标资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceManagerResourceGroupId": string;
}
