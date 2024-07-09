export interface ChangeResourceGroupRequest {
    /**
     * 资源ID，即云消息队列 RocketMQ 版实例的ID。表示需要为哪个实例修改所属的资源组。
     * @example `c2c5d1274a8d4317a13bc5b0d4******`
     */
    "resourceId": string;
    /**
     * 实例所属的地域ID。
     * @example `cn-hangzhou`
     */
    "regionId": string;
    /**
     * 资源类型。
     * 该参数固定取值为**instance**，表述资源的类型为实例。
     * @example `instance`
     */
    "resourceType": string;
    /**
     * 资源组ID，表示需要将指定实例转入到哪个资源组下。
     * 您可以通过<props="china">[ListResourceGroups](https://help.aliyun.com/document_detail/158855.html)</props><props="intl">[ListResourceGroups](https://www.alibabacloud.com/help/resource-management/latest/listresourcegroups)</props>接口查询已有资源组。
     * @example `rg-9gLOoK****`
     */
    "resourceGroupId": string;
}
