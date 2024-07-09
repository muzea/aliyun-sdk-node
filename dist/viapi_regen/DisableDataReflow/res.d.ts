export interface DisableDataReflowResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `B44B8F1C-C97D-5C81-966A-5EE8D76F5CC9`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 服务ID。
         * @example `456`
         */
        ServiceId: number;
        /**
         * 数据回流开关标识。
         * @example `false`
         */
        EnableDataReflowFlag: boolean;
    };
}
