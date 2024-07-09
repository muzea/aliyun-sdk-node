export interface ChangeResourceGroupRequest {
    /**
     * 资源类型，取值：
     * - **vault**：备份库。
     * - **client**：备份客户端。
     * - **hanainstance**：SAP HANA实例。
     * @example `vault`
     */
    "ResourceType": string;
    /**
     * 资源类型的ID标识符。例如，当ResourceType=vault时，则ResourceId可以理解为备份库ID。
     * @example `v-0002vido6j5zyh5k****`
     */
    "ResourceId": string;
    /**
     * 新的资源组ID，可在资源组控制台查看可用资源组。
     * @example `rg-bp67acfmxazb4p****	`
     */
    "NewResourceGroupId": string;
}
