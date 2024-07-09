export interface QueryPictureSearchAppsResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Specified parameter CurrentPage is not valid.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `2C794BB1-0494-4E4E-AACF-174F04CD1F10`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         *  当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中，每页显示的记录数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 已创建的以图搜图应用实例总数量。
         * @example `2`
         */
        Total: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 以图搜图应用实例列表。
         */
        PageData: {
            /**
             * 以图搜图应用实例ID。
             * @example `3e429560124b44b685095df81a27****`
             */
            AppInstanceId: string;
            /**
             * 修改以图搜图应用实例的13位时间戳，单位为毫秒。
             * @example `1614328081000`
             */
            ModifiedTime: number;
            /**
             * 以图搜图应用实例的描述信息。
             * @example `以图搜图Demo2`
             */
            Description: string;
            /**
             * 以图搜图应用实例模板的版本号。
             * @example `1.0.0`
             */
            Version: string;
            /**
             * 创建以图搜图应用实例的13位时间戳，单位为毫秒。
             * @example `1614327915000`
             */
            CreateTime: number;
            /**
             * 以图搜图应用实例模板ID。
             * @example `7b50e7acb2574a789226099300cc****`
             */
            AppTemplateId: string;
            /**
             * 以图搜图应用实例的名称。
             * @example `新以图搜图`
             */
            Name: string;
        }[];
    };
}
