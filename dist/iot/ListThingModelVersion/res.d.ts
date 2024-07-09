export interface ListThingModelVersionResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 物模型版本列表。按照物模型发布时间倒序排列。第一个为当前使用的版本。
         */
        ModelVersions: {
            /**
             * 该版本物模型发布时的时间戳，格式为GMT毫秒值。
             * @example `1579235657535`
             */
            GmtCreate: number;
            /**
             * 物模型版本的描述。
             * @example `增加一个light属性`
             */
            Description: string;
            /**
             * 物模型版本号。
             * @example `V1.0.0`
             */
            ModelVersion: string;
        }[];
    };
}
