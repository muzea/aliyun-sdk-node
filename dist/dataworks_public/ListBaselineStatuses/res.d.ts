export interface ListBaselineStatusesResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的基线实例列表。
     */
    Data: {
        /**
         * 当前的页数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页的大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 基线实例的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 基线实例列表。
         */
        BaselineStatuses: {
            /**
             * 基线的状态，包括ERROR（异常）、SAFE（安全）、DANGEROUS（预警）和OVER（破线）。
             * @example `SAFE`
             */
            Status: string;
            /**
             * 基线责任人的阿里云UID。多个责任人之间使用英文逗号（,）分隔。
             * @example `9527952795****`
             */
            Owner: string;
            /**
             * 当FinishStatus（基线实例完成状态）为FINISH（已完成）时，返回基线实例的完成时间戳。
             * @example `1553531400000`
             */
            FinishTime: number;
            /**
             * 基线所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
            /**
             * 基线的优先级，取值范围为{1,3,5,7,8}。
             * @example `1`
             */
            Priority: number;
            /**
             * 基线实例的预计完成时间。
             * @example `1553531400000`
             */
            EndCast: number;
            /**
             * 基线实例的周期号。天基线为1，小时基线的取值范围为\[1,24]。
             * @example `1`
             */
            InGroupId: number;
            /**
             * 基线的名称。
             * @example `基线名称`
             */
            BaselineName: string;
            /**
             * 基线的ID。
             * @example `1234`
             */
            BaselineId: number;
            /**
             * 基线实例是否完成，包括UNFINISH（未完成）和FINISH（已完成）。
             * @example `UNFINISH`
             */
            FinishStatus: string;
            /**
             * 业务日期时间戳。
             * @example `1553443200000`
             */
            Bizdate: number;
            /**
             * 基线实例的余量，单位为秒。
             * @example `1800`
             */
            Buffer: number;
            /**
             * 基线实例的实际完成时间。
             * @example `1553531400000`
             */
            SlaTime: number;
            /**
             * 基线实例的预警时间。
             * @example `1553531400000`
             */
            ExpTime: number;
        }[];
    };
}
