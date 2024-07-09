export interface CreateTicket4CopilotResponse {
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 开通嵌入的智能小Q 模块 ID。
     * @example `f5eeb52e-d9c2-4a8b-80e3-47ab55c2****`
     */
    Result: string;
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
