export interface StopAppSessionBatchRequest {
    /**
     * 批量操作ID。
     * > 支持ASCII字符，且不能超过64个字符。
     * @example `6d4d****`
     */
    "BatchId": string;
    /**
     * 项目ID。
     * @example `d9a8****`
     */
    "ProjectId"?: string;
    /**
     * 应用ID。
     * @example `13027****`
     */
    "AppId"?: string;
    /**
     * 应用版本ID。
     * @example `35067****`
     */
    "AppVersion"?: string;
    /**
     * 自定义标签。
     */
    "Tags"?: {
        /**
         * 标签键。最长64个字符。
         * @example `exampleTag`
         */
        Key: string;
        /**
         * Key对应的取值。
         * @example `exampleValue`
         */
        Value: string;
    }[];
    /**
     * 停止容器参数。
     */
    "StopParam"?: {
        /**
         * 目前支持的枚举值。取值为reason ，表示停止原因。
         * @example `reason`
         */
        Key: string;
        /**
         * Key对应的取值。
         * @example `exampleValue`
         */
        Value: any;
    }[];
}
