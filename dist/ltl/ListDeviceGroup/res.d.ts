export interface ListDeviceGroupResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误消息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
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
     * 响应内容。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        Num: number;
        /**
         * 总条数。
         * @example `30`
         */
        Total: number;
        /**
         * 每页数量。
         * @example `2`
         */
        Size: number;
        /**
         * 数据项
         */
        PageData: {
            /**
             * IoT数据源组授权状态。
             * - **AUTHORIZED**：已授权。
             * - **UNAUTHORIZED**：未授权。
             * @example `AUTHORIZED`
             */
            Status: string;
            /**
             * IoT数据源组标识。
             * @example `577187700697****`
             */
            DeviceGroupId: string;
            /**
             * IoT数据源组ProductKey。
             * @example `hKpHMh2****`
             */
            ProductKey: string;
            /**
             * 备注信息。
             * @example `某业务某设备`
             */
            Remark: string;
            /**
             * IoT数据源组授权类型。
             * **ID2**：阿里云ID²认证。
             * @example `ID2`
             */
            AuthorizeType: string;
            /**
             * IoT数据源组所属成员名称。
             * @example `某公司`
             */
            OwnerName: string;
            /**
             * IoT数据源组所属成员账号UID。
             * @example `19720316234381****`
             */
            OwnerUid: string;
        }[];
    };
}
