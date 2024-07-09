export interface ModifyEnsEipAddressAttributeRequest {
    /**
     * EIP的ID。
     * @example `eip-5sw5dxzgi6umq4uexxkt8wpma`
     */
    "AllocationId": string;
    /**
     * 需要修改的EIP的名称。长度为2~128个字符，不能以http://或https://开头。
     * @example `test-api-modify`
     */
    "Name"?: string;
    /**
     * 需要修改的EIP描述信息。长度为2~256个字符，不能以http://或https://开头。
     * @example `abc`
     */
    "Description"?: string;
    /**
     * EIP的带宽峰值，默认值为5。取值范围：**5**~**10000**，单位：Mbps。
     * @example `50`
     */
    "Bandwidth"?: number;
}
