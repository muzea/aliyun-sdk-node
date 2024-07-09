export interface BindZoneVpcRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * zone ID。
     * @example `34d4031b63c527358b710a61346a1df5`
     */
    "ZoneId": string;
    /**
     * 用户Ip。
     * @example `1.1.1.1`
     */
    "UserClientIp"?: string;
    /**
     * vpc列表信息。
     */
    "Vpcs"?: {
        /**
         * VPC ID。当Zone已经绑定VPC，此时不传入此参数，表示将Zone和VPC解绑。
         * @example `vpc-xxxxxxxxx`
         */
        VpcId: string;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * VPC类型。
         * - **STANDARD**：标准VPC。
         * - **EDS**：无影工作区VPC。
         * @example `STANDARD`
         */
        VpcType: string;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * @example `6447728c8578e66aacf062d2df4446dc`
     */
    "ClientToken"?: string;
}
