export interface AttachCenRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云企业网实例ID。
     * @example `cen-3gwy16dojz1m65****`
     */
    "CenId": string;
    /**
     * 云企业网实例所属的阿里云账号ID。
     * - 如果配置的CenId属于本阿里云账号，该参数无需配置。
     * - 如果配置的CenId属于其他阿里云账号，请填写所属阿里云账号的ID。
     * @example `102681951715****`
     */
    "CenOwnerId"?: number;
    /**
     * 验证码。如果配置的CenId属于其他阿里云账号，必须先调用[SendVerifyCode](~~436847~~)获取验证码。
     * @example `12****`
     */
    "VerifyCode"?: string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId": string;
}
