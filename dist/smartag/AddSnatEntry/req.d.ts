export interface AddSnatEntryRequest {
    /**
     * 智能接入网关实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-jf5w9a8k5mhi5h****`
     */
    "SmartAGId": string;
    /**
     * 目标网段。
     * @example `192.168.1.0/24`
     */
    "CidrBlock": string;
    /**
     * 公网IP地址。
     * @example `11.0.XX.XX`
     */
    "SnatIp": string;
}
