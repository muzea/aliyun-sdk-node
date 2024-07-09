export interface BindAuthToMachineResponse {
    /**
     * 绑定结果状态码。取值：
     * - **0**：成功
     * - **1**：参数错误
     * - **2**：缺少服务器授权数
     * - **3**：缺少服务器授权核数
     * @example `2`
     */
    ResultCode: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `23AD0BD2-8771-5647-819E-6BA51E212F80`
     */
    RequestId: string;
    /**
     * 成功解绑服务器数。
     * @example `1`
     */
    UnBindCount: number;
    /**
     * 成功绑定服务器数。
     * @example `1`
     */
    BindCount: number;
    /**
     * 授权服务器授权数不足的数量。
     * @example `1`
     */
    InsufficientEcsCount: number;
    /**
     * 授权核数授权数不足的数量。
     * @example `1`
     */
    InsufficientCoreCount: number;
}
