export interface MoveResourceGroupRequest {
    /**
     * 资源类型，取值：
     * - stack：资源栈。
     * - stackgroup：资源栈组。
     * - template：模板。
     * @example `stack`
     */
    "ResourceType": string;
    /**
     * 资源ID。
     * @example `4e8611cb-251e-42b7-b9cb-3496362c****`
     */
    "ResourceId": string;
    /**
     * 新资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfm3peow3k****`
     */
    "NewResourceGroupId": string;
    /**
     * 资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~131035~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
