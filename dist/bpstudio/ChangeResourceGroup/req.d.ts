export interface ChangeResourceGroupRequest {
    /**
     * CADT应用或模板ID
     * @example `P7RMVSVM9LOVYQOM`
     */
    "ResourceId": string;
    /**
     * 新资源组ID
     * @example `rg-aek2ajbjoloa23q`
     */
    "NewResourceGroupId": string;
    /**
     * 需要更换资源组的资源类型，这里指CADT应用（APPLICATION）或模板（TEMPLATE）。
     * @example `APPLICATION`
     */
    "ResourceType": string;
}
