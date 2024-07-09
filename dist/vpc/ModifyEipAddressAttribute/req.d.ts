export interface ModifyEipAddressAttributeRequest {
    /**
     * 需要修改的后付费类型EIP的ID。
     * @example `eip-2zeerraiwb7uj6i0d****`
     */
    "AllocationId": string;
    /**
     *  需要修改EIP的带宽峰值，取值：
     * - **1**~**200**，按使用流量计费，单位为Mbps。
     * - **1**~**500**，按固定带宽计费，单位为Mbps。
     * @example `100`
     */
    "Bandwidth"?: string;
    /**
     * EIP所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要修改的EIP的名称。
     * 长度为1~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `Test123`
     */
    "Name"?: string;
    /**
     * 需要修改的EIP描述信息。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "Description"?: string;
}
