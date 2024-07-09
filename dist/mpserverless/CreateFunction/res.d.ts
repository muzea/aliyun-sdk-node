export interface CreateFunctionResponse {
    /**
     * 请求ID。
     * @example `E63E7F4F-8538-5B0E-8712-78F92B6DCB9C`
     */
    RequestId: string;
    /**
     * 创建时间。
     * @example `2021-11-18T08:02:33.954Z`
     */
    CreatedAt: string;
    /**
     * 函数名称。
     * @example `demoFunction`
     */
    Name: string;
    /**
     * 修改时间。
     * @example `021-11-18T08:02:33.954Z`
     */
    ModifiedAt: string;
    /**
     * 函数描述。
     * @example `测试函数`
     */
    Desc: string;
    /**
     * 云函数运行参数。
     */
    Spec: {
        /**
         * 超时时间。
         * @example `5s`
         */
        Timeout: string;
        /**
         * 运行环境。
         * @example `Node.js 12`
         */
        Runtime: string;
        /**
         * 单实例允许的最大并发度
         * @example `1`
         */
        InstanceConcurrency: string;
        /**
         * 内存大小。
         * @example `512 MB`
         */
        Memory: string;
    };
}
