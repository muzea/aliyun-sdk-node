export interface ModifyActionEventPolicyResponse {
    /**
     * 历史事件功能的启用情况。
     * @example `True`
     */
    EnableEventLog: string;
    /**
     * 请求ID。
     * @example `BAC0952C-0EB3-4DE7-A567-B83269BFE43F`
     */
    RequestId: string;
    /**
     * 开启或关闭历史事件功能的地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
