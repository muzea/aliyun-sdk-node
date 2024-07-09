export interface QueryUsageStatisticsByTagIdResponse {
    /**
     * 请求ID。
     * @example `D45CC751-34DF-5797-81FB-9A2ED6DC024B`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 授权码。
         * @example `g61I8UV5zd`
         */
        AuthorizationCode: string;
        /**
         * 查询成功号码数。
         * @example `93`
         */
        SuccessTotal: number;
        /**
         * 查询失败号码数。
         * @example `71`
         */
        FailTotal: number;
        /**
         * 标签名称。
         * @example `阿里云查询`
         */
        TagName: string;
        /**
         * 场景名称。
         * @example `电话回访1`
         */
        SceneName: string;
        /**
         * 查询总号码数。
         * @example `41`
         */
        Total: number;
        /**
         * 标签名称。
         * @example `69`
         */
        TagId: number;
        /**
         * 客户pid。
         * @example `10000013****071`
         */
        PartnerId: number;
        /**
         * 授权码使用记录ID。
         * @example `4d32c9ef-c8b0-4d69-a437-cca5****185d`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `20230312`
         */
        GmtDateStr: string;
        /**
         * 行业名称。
         * @example `家政安保`
         */
        IndustryName: string;
    }[];
    /**
     * 请求状态码。 **OK**为成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 表示是否调用成功。
     * - true：调用成功。
     *  - false：调用失败。
     * @example `true`
     */
    Success: boolean;
}
