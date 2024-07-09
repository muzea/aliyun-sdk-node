export interface GetCheckProcessResponse {
    /**
     * 检查资产总数。
     * @example `113`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D18B5DAD-BA97-5552-AE48-83F59D5F****`
     */
    RequestId: string;
    /**
     * 已检查资产总数。
     * @example `80`
     */
    FinishCount: number;
}
