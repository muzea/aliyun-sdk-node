export interface BatchResponse {
    /**
     * 子请求的响应合集
     */
    responses: {
        /**
         * 子请求 id，和request进行关联
         * @example `93433894994ad2e1`
         */
        id: string;
        /**
         * 子请求的返回状态码，可参考相应子请求API文档
         * @example `200`
         */
        status: number;
        /**
         * 子请求的响应结果，可参考相应子请求API文档
         */
        body: any;
    }[];
}
