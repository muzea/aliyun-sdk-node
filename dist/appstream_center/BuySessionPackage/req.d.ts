export interface BuySessionPackageRequest {
    /**
     * 会话包对应的会话类型。
     * @example `Windows`
     */
    "SessionType": string;
    /**
     * 会话包对应的会话规格。
     * @example `appstreaming.general.entry`
     */
    "SessionSpec": string;
    /**
     * 时长包类型。
     * @example `0`
     */
    "SessionPackageType"?: string;
    /**
     * 会话包所属的地域ID。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 会话包名称。
     * @example `测试会话包`
     */
    "SessionPackageName"?: string;
    /**
     * 云Flow项目ID。
     * @example `p-xxxxxxxxxxxxx`
     */
    "ProjectId"?: string;
    /**
     * 购买会话包付费类型
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 购买时长
     * @example `1`
     */
    "Period"?: number;
    /**
     * 购买时长单位
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 最大并发数
     * @example `100`
     */
    "MaxSessions"?: number;
    /**
     * 是否自动支付
     * @example `0`
     */
    "AutoPay"?: boolean;
}
