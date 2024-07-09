export interface GetTemplateViewResponse {
    /**
     * 本次请求条件下的数据总量，此参数为可选参数，默认可不返回
     * @example `0`
     */
    Code: number;
    /**
     * 请求的返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求id
     * @example `90ABA848-AD74-1F6E-84BC-4182A7F1F29E`
     */
    RequestId: string;
    /**
     * 详情
     * @example `""`
     */
    Details: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据展示配置
     */
    ViewConfigs: {
        /**
         * 数据展示配置插件列表
         */
        ViewPlugins: any[];
    };
    /**
     * 错误码
     * @example `""`
     */
    ErrorCode: string;
}
