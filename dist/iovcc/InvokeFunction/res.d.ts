export interface InvokeFunctionResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 函数执行时的标准输出
         * @example `hello, bla bla bla...`
         */
        Output: string;
        /**
         * 后端运行环境调用的请求ID
         * @example `54117932-59f1-4955-7a26-0c96962fd645`
         */
        BackEndRequestId: string;
    };
}
