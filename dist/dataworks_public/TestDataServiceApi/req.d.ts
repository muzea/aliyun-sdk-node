export interface TestDataServiceApiRequest {
    /**
     * API Id
     * @example `12343`
     */
    "ApiId": number;
    /**
     * 放在Query里面的请求参数
     */
    "QueryParam"?: {
        /**
         * 参数名称
         * @example `name`
         */
        ParamKey: string;
        /**
         * 参数值
         * @example `test`
         */
        ParamValue: string;
    }[];
    /**
     * 放在请求Body的参数信息
     */
    "BodyParams"?: {
        /**
         * 参数名称
         * @example `name`
         */
        ParamKey: string;
        /**
         * 参数值
         * @example `test`
         */
        ParamValue: string;
    }[];
    /**
     * 放在Path里面的请求参数
     */
    "PathParams"?: {
        /**
         * 参数名称
         * @example `path1`
         */
        ParamKey: string;
        /**
         * 参数值
         * @example `api`
         */
        ParamValue: string;
    }[];
    /**
     * 放在Header里面的请求参数
     */
    "HeadParams"?: {
        /**
         * 参数名称
         * @example `requestId`
         */
        ParamKey: string;
        /**
         * 参数值
         * @example `abcd`
         */
        ParamValue: string;
    }[];
    /**
     * 请求body数据
     * @example `{"name":"test"}`
     */
    "BodyContent"?: string;
}
