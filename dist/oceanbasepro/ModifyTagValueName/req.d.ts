export interface ModifyTagValueNameRequest {
    /**
     * 标签组名称。
     * @example `标签组 1`
     */
    "Key": string;
    /**
     * 标签名称。
     * @example `标签 1`
     */
    "Value": string;
    /**
     * 标签新名称。
     * @example `标签 2`
     */
    "NewValue": string;
}
