export interface DescribeHoneyPotAuthResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0F5023B6-9C1F-459F-ACCC-8B4636804037`
     */
    RequestId: string;
    /**
     * 已消耗的授权数。
     * @example `4`
     */
    HoneyPotCount: number;
    /**
     * 总授权数。
     * @example `10`
     */
    HoneyPotAuthCount: number;
}
