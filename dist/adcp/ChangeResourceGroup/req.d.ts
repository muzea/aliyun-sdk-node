export interface ChangeResourceGroupRequest {
    /**
     * 资源类型的ID标识符。例如，当ResourceType=cluster时，则ResourceId可以理解为ClusterId。
     * @example `c9603ee23a84a41d6a1424619cb80****`
     */
    "ResourceId": string;
    /**
     * 资源类型，仅支持cluster。
     * @example `cluster`
     */
    "ResourceType"?: string;
    /**
     * 新的资源组ID，可在资源组控制台查看可用资源组。
     * @example `rg-aekzlvgbhaca***`
     */
    "NewResourceGroupId": string;
}
