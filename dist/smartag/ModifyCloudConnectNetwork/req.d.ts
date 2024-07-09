export interface ModifyCloudConnectNetworkRequest {
    /**
     * 云连接网ID。
     * @example `ccn-l9340rlu5ens*****`
     */
    "CcnId": string;
    /**
     * 云连接网的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字，半角句号（.），下划线（_）和短划线（-），但不能以`http:// `或` https://`开头。
     * @example `ccn名称`
     */
    "Name"?: string;
    /**
     * 云连接网的描述。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http:// `或 `https://`开头。
     * @example `ccn描述`
     */
    "Description"?: string;
    /**
     * 云连接网的所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 私网网段。
     * @example `10.10.10.0/24`
     */
    "CidrBlock"?: string;
    /**
     * 是否允许绑定同一个云连接网的智能接入网关实例互通。
     * - **enable**：允许。
     * - **disable**：不允许。
     * @example `enable`
     */
    "InterworkingStatus"?: string;
}
