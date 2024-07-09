export interface ListDoNotCallNumbersResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 禁止外呼号码列表。
         */
        List: {
            /**
             * 电话号码。
             * @example `1900000****`
             */
            Number: string;
            /**
             * 应用范围。
             * @example `INSTANCE`
             */
            Scope: string;
            /**
             * 备注。
             * @example `测试`
             */
            Remark: string;
            /**
             * 禁止外呼号码配置的创建时间，格式为Unix时间戳，单位毫秒。
             * @example `1626962425000`
             */
            CreateTime: number;
            /**
             * 创建人，创建该记录的坐席的坐席登录名。
             * @example `agent`
             */
            Creator: string;
            CreatedTime: number;
        }[];
    };
    /**
     * 响应参数列表。
     */
    Params: string[];
}
