export interface SendVerifyCodeRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 验证码对应的动作。
     * @example `eds_cenID_securityverification`
     */
    "VerifyCodeAction": string;
    /**
     * 发送验证码所需的相关信息，为JSON格式。验证云企业网CEN时，需提供云企业实例ID及其所属的阿里云账号ID。
     * - CenId：云企业网实例ID。
     * - CenOwnerId：云企业网实例所属的阿里云账号ID。
     * > 如果配置的CenId属于本阿里云账号，该参数无需配置。 如果配置的CenId属于其他阿里云账号，请填写所属阿里云账号的ID。
     * @example `{"cenOwnerId": 1234567890******,"cenId": "cen-3weq30r6t0s7t4****"}`
     */
    "ExtraInfo"?: string;
}
