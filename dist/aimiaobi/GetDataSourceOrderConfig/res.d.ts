export interface GetDataSourceOrderConfigResponse {
    /**
     * 请求唯一标识
     * @example `428DCC0D-3C63-5306-BD1B-124396AB97BE`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 错误说明
     * @example `successful`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 用户配置数据源权重列表
         */
        UserConfigDataSourceList: {
            /**
             * 数量
             * @example `20`
             */
            Number: number;
            /**
             * code描述
             * @example `QuarkCommonNews`
             */
            Code: string;
            /**
             * 显示名称
             * @example `夸克通用搜索`
             */
            Name: string;
            /**
             * type类型
             * @example `SystemSearch`
             */
            Type: string;
        }[];
    };
}
