export interface DescribeExposedCheckWarningResponse {
    /**
     * 返回结果的数据条数。
     * @example `10`
     */
    Count: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6D9CDB47-6191-4415-BE63-7E8B12CD****`
     */
    RequestId: string;
    /**
     * 暴露资产的基线风险列表。
     */
    WarningList: {
        /**
         * 基线所属子分类显示名称。
         * @example `Redis DB login weak password baseline`
         */
        SubTypeAlias: string;
        /**
         * 服务器UUID。
         * @example `1d35b031-ee4e-4e53-8b53-465ab712****`
         */
        Uuid: string;
        /**
         * 基线所属分类显示名称
         * @example `Weak password`
         */
        TypeAlias: string;
        /**
         * 基线的名称。
         * @example `Weak password-Redis DB login weak password baseline`
         */
        RiskName: string;
        /**
         * 基线的ID。
         * > 您可调用[DescribeCheckWarningSummary](~~116179~~)接口获取基线ID。
         * @example `107`
         */
        RiskId: number;
    }[];
}
