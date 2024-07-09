export interface ModifyCenAttributeRequest {
    /**
     *  云企业网实例的ID。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "CenId": string;
    /**
     * 云企业网实例的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 云企业网实例的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `cen`
     */
    "Description"?: string;
    /**
     * 设置网段重叠的级别。
     * 取值：**REDUCED**（默认值），表示网段可以有重叠，但是不能完全相同。
     * @example `REDUCED`
     */
    "ProtectionLevel"?: string;
}
