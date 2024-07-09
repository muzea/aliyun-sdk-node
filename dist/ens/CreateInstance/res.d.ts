export interface CreateInstanceResponse {
    /**
     * 请求ID。
     * @example `4A431388-2D4B-46F4-A96B-D4E6BD0688C1`
     */
    RequestId: string;
    InstanceIds: {
        /**
         * 实例ID列表。
         */
        InstanceId: string[];
    };
    /**
     * 返回码，成功返回0。
     * > 如果您通过SDK方式调用该API会返回Integer类型，通用方式或者HTTP方式调用会返回字符串类型。
     * @example `0`
     */
    Code: number;
}
