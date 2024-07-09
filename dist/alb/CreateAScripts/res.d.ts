export interface CreateAScriptsResponse {
    /**
     * 异步任务ID。
     * @example `5c607642-535e-4e06-9d77-df53049b****`
     */
    JobId: string;
    /**
     * 请求ID。
     * @example `BF0FE763-9603-558F-A55B-0F4******`
     */
    RequestId: string;
    /**
     * 可编程脚本ID列表。
     */
    AScriptIds: {
        /**
         * 可编程脚本ID。
         * @example `as-xvq5igaa7uv6vr****`
         */
        AScriptId: string;
    }[];
}
