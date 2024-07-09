export interface CreateCloudConnectNetworkRequest {
    /**
     *  云连接网实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 云连接网实例的名称。
     * 名称长度为2~100个字符，以大小写字母或中文开头，可包含数字、下划线（_）、半角句号（.）和短划线（-）。
     * @example `ccnname`
     */
    "Name"?: string;
    /**
     * 云连接网实例的描述。
     * 描述长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `ccndesc`
     */
    "Description"?: string;
    /**
     * 私网网段。
     * @example `172.XX.XX.0/24`
     */
    "CidrBlock"?: string;
    /**
     * SNAT私网网段。
     * @example `172.XX.XX.0/25`
     */
    "SnatCidrBlock"?: string;
}
