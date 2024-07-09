export interface CreateSimpleOfficeSiteRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 办公网络VPC包含的IPv4网段。系统将根据输入的IPv4网段，自动创建一个专有网络VPC。建议您使用以下网段及其子网作为IPv4网段：
     * - `10.0.0.0/12`（掩码有效范围为12\~24位）
     * - `172.16.0.0/12`（掩码有效范围为12\~24位）
     * - `192.168.0.0/16`（掩码有效范围为16\~24位）
     * @example `172.16.0.0/12`
     */
    "CidrBlock"?: string;
    /**
     * 云企业网CEN实例ID。
     * > 如果想要通过VPC连接的方式接入云电脑，可以将办公网络加入到云企业网实例中。该云企业网实例为本地网络通过VPN或者专线接入的云企业网实例。
     * @example `cen-3gwy16dojz1m65****`
     */
    "CenId"?: string;
    /**
     * 云企业网实例所属的阿里云账号ID。
     * - 如果未配置CenId，或者配置的CenId属于本阿里云账号，该参数无需配置。
     * - 如果配置的CenId属于其他阿里云账号，请填写所属阿里云账号的ID。
     * @example `118272523431****`
     */
    "CenOwnerId"?: number;
    /**
     * 验证码。如果配置的CenId属于其他阿里云账号，必须先调用[SendVerifyCode](~~335132~~)获取验证码。
     * @example `123456`
     */
    "VerifyCode"?: string;
    /**
     * 公网带宽峰值。取值范围：10~200。带宽单位为 Mbps。
     * 当`EnableInternetAccess`配置为`true`时可以设置该参数。
     * @example `10`
     */
    "Bandwidth"?: number;
    /**
     * 办公网络名称。长度为2~255个英文或中文字符。必须以大小字母或中文开头，不能以`http:/`/和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `TestOfficeSite_Simple`
     */
    "OfficeSiteName"?: string;
    /**
     * 是否开通公网访问功能。
     * @example `false`
     */
    "EnableInternetAccess"?: boolean;
    /**
     * 是否为使用云电脑的用户赋予本地管理员权限。
     * @example `true`
     */
    "EnableAdminAccess"?: boolean;
    /**
     * 连接云电脑时允许使用的接入方式。
     * > VPC连接方式依赖于阿里云私网连接PrivateLink服务，该服务不收取费用。该参数设置为`VPC`或者`Any`时，系统将自动为您开通私网连接服务。
     * @example `Internet`
     */
    "DesktopAccessType"?: string;
    /**
     * 是否开启可信设备校验。
     * @example `true`
     */
    "NeedVerifyZeroDevice"?: boolean;
    /**
     * 专有网络VPC中的交换机ID，创建云盒办公网络时需要填写。
     */
    "VSwitchId"?: string[];
    /**
     * 是否为云盒办公网络。
     * @example `false`
     */
    "CloudBoxOfficeSite"?: boolean;
    /**
     * 办公网络的类型。
     * @example `standard`
     */
    "VpcType"?: string;
}
