export interface EnableDataReflowResponse {
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
         * @example `true`
         */
        EnableDataReflowFlag: boolean;
        /**
         * 数据回流率。
         * @example `100`
         */
        DataReflowRate: number;
        /**
         * 回流路径。
         * @example `oss://regen-test-bucket/jhdtest/检测/回流目录/`
         */
        DataReflowOssPath: string;
    };
}
