export interface PutLayerACLRequest {
    /**
     * 层的名称。
     * @example `MyLayer`
     */
    "layerName": string;
    /**
     * 是否公开。
     * - **true**：公开。
     * - **false**：不公开。
     * @example `true`
     */
    "public"?: boolean;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * API调用时间，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 请求的调用链ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
