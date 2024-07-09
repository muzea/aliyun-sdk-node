export interface DescribeDdosOriginInstanceBillRequest {
    /**
     * 账单类型。取值：
     * - **flow_cn**：表示干净流量-DDoS防护增强版EIP中国内地账单。
     * - **flow_ov**：表示干净流量-DDoS防护增强版EIP国际和港澳台账单。
     * - **standard_assets_flow_cn**：表示干净流量-标准云产品中国内地账单。
     * - **standard_assets_flow_ov**：表示干净流量-标准云产品国际和港澳台账单。
     * - **function**：表示功能开通账单。
     * - **ip_count**：表示防护IP数账单。
     * @example `function`
     */
    "Type"?: string;
    /**
     * 查询开始时间戳，单位为毫秒。
     * @example `1711209600410`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间戳，单位为毫秒。时间跨度不能超过30天。
     * @example `1711382399410`
     */
    "EndTime"?: number;
    /**
     * 是否展示账单详情。  取值：
     * - **true**：展示账单信息。
     * - **false**：只展示全局实例信息不展示账单详情。
     * @example `false`
     */
    "IsShowList"?: boolean;
}
