export interface DescribeBatchResultDetailResponse {
    /**
     * 记录总数。
     * @example `1`
     */
    TotalCount: number;
    BatchResultDetails: {
        /**
         * 批量处理结果的详细信息。
         */
        BatchResultDetail: {
            /**
             * 执行结果。**true**代表成功，**false**代表失败。
             * @example `true`
             */
            Status: boolean;
            /**
             * 域名解析类型。
             * @example `A`
             */
            Type: string;
            /**
             * 域名。
             * @example `example.com`
             */
            Domain: string;
            /**
             * 解析记录备注。
             * @example `remark`
             */
            Remark: string;
            /**
             * 解析记录的ID。
             * @example `123456789`
             */
            RecordId: string;
            /**
             * 主机记录。
             * @example `www`
             */
            Rr: string;
            /**
             * MX优先级。
             * @example `10`
             */
            Priority: string;
            /**
             * 解析记录状态。
             * @example `暂停`
             */
            RrStatus: string;
            /**
             * 处理时间。
             * @example `2019-08-22 18:02:58`
             */
            OperateDateStr: string;
            /**
             * 新的记录值。
             * @example `192.0.2.254`
             */
            NewValue: string;
            /**
             * 记录值。
             * @example `192.0.2.0`
             */
            Value: string;
            /**
             * 生效时间。
             * @example `600`
             */
            Ttl: string;
            /**
             * 批量操作类型。
             * @example `DOMAIN_ADD`
             */
            BatchType: string;
            /**
             * 线路代码。
             * @example `default`
             */
            Line: string;
            /**
             * 新的主机记录。
             * @example `demo-batch-7`
             */
            NewRr: string;
            /**
             * 执行失败的原因。
             * @example `内部异常`
             */
            Reason: string;
        }[];
    };
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `75446CC1-FC9A-4595-8D96-089D73D7A63D`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
}
