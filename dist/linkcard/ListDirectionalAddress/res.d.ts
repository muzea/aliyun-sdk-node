export interface ListDirectionalAddressResponse {
    /**
     * 接口返回码。
     * - 200：调用成功。
     * - 其他：调用失败。错误码详情，请参见[错误码](~~375339~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 返回的访问地址。
     */
    Data: {
        /**
         * 查询页数。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页的数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 列表总页数。
         * @example `9`
         */
        PageCount: number;
        /**
         * 列表总数量。
         * @example `90`
         */
        Total: number;
        /**
         * 访问地址。
         */
        List: {
            /**
             * 定向访问地址。
             * @example `*.aliyun.com`
             */
            Address: string;
            /**
             * 地址类型。
             * - **Ip**：IP地址。
             * - **Domain**：域名。
             * @example `Domain`
             */
            AddressType: string;
            /**
             * 地址来源。
             * - **user_defined**：用户配置。
             * - **aliyun_defined**：阿里云预配。
             * @example `user_defined`
             */
            Source: string;
            /**
             * 定向分组ID。
             * @example `5`
             */
            GroupId: string;
            /**
             * 地址状态。
             * - **100**：新增处理中。
             * - **200**：删除处理中。
             * - **300**：新增失败。
             * - **400**：删除失败。
             * - **500**：新增成功。
             * @example `500`
             */
            State: number;
        }[];
    };
}
