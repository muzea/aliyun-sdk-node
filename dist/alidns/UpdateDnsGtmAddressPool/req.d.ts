export interface UpdateDnsGtmAddressPoolRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 地址池id。
     * @example `testpool1`
     */
    "AddrPoolId": string;
    /**
     * 地址池名称。
     * @example `testpoolname`
     */
    "Name"?: string;
    /**
     * 负载均衡策略：
     * - ALL_RR: 返回全部地址
     * - RATIO：按权重返回地址
     * @example `ALL_RR`
     */
    "LbaStrategy": string;
    /**
     * 地址池列表。
     */
    "Addr": {
        /**
         * 地址归属信息，JSON化字符串格式。
         * - LineCode：归属线路Code（已废弃，以lineCodes数据为准）
         * - lineCodes：归属线路Code列表
         * - lineCodeRectifyType：归属线路订正类型，默认：自动订正
         *     - NO_NEED 不订正
         *     - RECTIFIED 已订正
         *     - AUTO 自动订正
         *
         * @example `Linecode: default
        lineCodes： ["default"]
        lineCodeRectifyType: AUTO`
         */
        AttributeInfo: string;
        /**
         * 备注。
         * @example `test`
         */
        Remark: string;
        /**
         * 权重。
         * @example `1`
         */
        LbaWeight: number;
        /**
         * 地址。
         * @example `1.1.XX.XX`
         */
        Addr: string;
        /**
         * 模式：
         * - SMART：智能返回
         * - ONLINE：永远在线
         * - OFFLINE：永远离线
         * @example `SMART`
         */
        Mode: string;
    }[];
}
