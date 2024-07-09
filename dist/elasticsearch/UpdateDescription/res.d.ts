export interface UpdateDescriptionResponse {
    /**
     * 请求ID。
     * @example `FDF34727-1664-44C1-A8DA-3EB72D60****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 修改后的实例名称。
         * @example `aliyunes_test_name`
         */
        description: string;
    };
}
