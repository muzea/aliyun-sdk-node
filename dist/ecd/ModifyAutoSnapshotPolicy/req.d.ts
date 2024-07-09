export interface ModifyAutoSnapshotPolicyRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自动快照策略ID。
     * @example `sp-itcmrhqt01tdo****`
     */
    "PolicyId": string;
    /**
     * 自动快照策略的名称。长度为2\~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（\_）或者短划线（-）。默认值：空。
     * @example `系统自动快照`
     */
    "PolicyName"?: string;
    /**
     * 自动快照的保留时间，单位为天。取值范围：1\~180。
     * @example `2`
     */
    "RetentionDays"?: number;
    /**
     * Cron表达式。
     * @example `0 20 16 ? * 1,2,3,4,5,6,7`
     */
    "CronExpression"?: string;
}
