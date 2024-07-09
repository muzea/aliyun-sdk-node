export interface GetLayerVersionRequest {
    /**
     * 层的名称。
     * @example `MyLayer`
     */
    "layerName": string;
    /**
     * 层的版本。
     * @example `1`
     */
    "version": string;
    /**
     * 您的阿里云账号（主账号）ID。
     * @example `188077086902****`
     */
    "X-Fc-Account-Id"?: string;
    /**
     * 函数的调用开始日期，格式为**EEE,d MMM yyyy HH:mm:ss GMT**。
     * @example `Wed, 11 May 2022 09:00:00 GMT`
     */
    "X-Fc-Date"?: string;
    /**
     * 请求的调用链ID。
     * @example `asdf****`
     */
    "X-Fc-Trace-Id"?: string;
}
