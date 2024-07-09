export interface ConfigAppResponse {
    /**
     * 操作是否成功或者目标应用的Agent总开关状态。
     * 操作是否成功：
     * 成功- success
     * 失败- failed
     * Agent总开关状态:
     * 开：true
     * 关：false
     * @example `abc@def success\nghi@jkl success\n`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `16AF921B-8187-489F-9913-43C808B4****`
     */
    RequestId: string;
}
