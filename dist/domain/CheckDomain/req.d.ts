export interface CheckDomainRequest {
    /**
     * 域名名称。
     * @example `test**.xin`
     */
    "DomainName": string;
    /**
     * 操作命令。取值：
     * - **create**：新购。
     * - **renew**：续费。
     * - **transfer**：转入。
     * - **restore**：赎回。
     *
     * @example `create`
     */
    "FeeCommand"?: string;
    /**
     * 货币类型。取值： **USD**（美元）。
     *
     * @example `USD`
     */
    "FeeCurrency"?: string;
    /**
     * 购买周期年限，单位为**年**。范围为**1**~**10**年。
     * @example `1`
     */
    "FeePeriod"?: number;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
}
