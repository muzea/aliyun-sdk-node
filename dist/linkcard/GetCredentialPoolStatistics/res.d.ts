export interface GetCredentialPoolStatisticsResponse {
    /**
     * 接口返回码。
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~375339~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 套餐流量使用详情。
     */
    Data: {
        /**
         * 当月已用流量。
         * @example `0KB`
         */
        PoolUsed: string;
        /**
         * 套餐凭证。
         * @example `CM-SF-M-2-12G`
         */
        CredentialNO: string;
        /**
         * 当月套餐外流量。
         * @example `0KB`
         */
        PoolOutUsed: string;
        /**
         * 套餐流量使用总量，仅统付池套餐显示该参数。
         * @example `6.00GB`
         */
        PoolGrandTotalUsed: string;
        /**
         * 套餐凭证类型。
         * - 单卡套餐示例：CT-SC-M-1-30M（运营商-套餐类型-套餐周期-资费版本-流量包档位）。
         * - 同档位池套餐示例：CM-SF-M-3-100M（运营商-套餐类型-套餐周期-资费版本-流量包档位）。
         * - 统付池套餐示例：CU-UPG-M-2-池编号（运营商-套餐类型-套餐周期-资费版本-池编号）。
         * @example `CT-SC-M-1-30M`
         */
        CredentialType: string;
        /**
         * 套餐内总卡数。
         * @example `20`
         */
        CardTotalNum: number;
        /**
         * 套餐总流量，仅统付池套餐显示该参数。
         * @example `12.00GB`
         */
        PoolGrandTotal: string;
        /**
         * 套餐内的生效卡数（已激活且未停机未销户）。
         * @example `10`
         */
        CardActiveNum: number;
        /**
         * 套餐总流量，仅同档位池套餐显示该参数。
         * @example `12.00GB`
         */
        EffectiveTotalFlow: string;
        /**
         * 套餐内可用余量，仅同档位池套餐显示该参数。
         * @example `6.00GB`
         */
        EffectiveAvailableFlow: string;
        /**
         * 套餐内可用余量，仅统付池套餐显示该参数。
         * @example `6.00GB`
         */
        PoolAvaiable: string;
        /**
         * 月功能费份数，仅统付池套餐显示该参数。
         * @example `100`
         */
        MonthFeatureFee: number;
        /**
         * 凭证实例ID。
         * @example `259****`
         */
        CredentialInstanceId: string;
        /**
         * 短信用量。
         * @example `0`
         */
        SmsUsed: number;
        /**
         * 月度流量使用总量。
         * @example `3.00GB`
         */
        MonthUsedAmount: number;
        /**
         * 当月功能费超套份数。
         * 大于0代表功能费已超套；等于0或null代表未超套。
         * @example `200`
         */
        MonthExceedFee: number;
    };
}
