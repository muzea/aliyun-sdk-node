export interface ListServiceUsagesResponse {
    /**
     * 请求ID。
     * @example `18AD0960-A9FE-1AC8-ADF8-22131Fxxxxxx`
     */
    RequestId: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAYChudnQUoBH+mGWFpb6oP0=`
     */
    NextToken: string;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 服务使用情况。
     */
    ServiceUsages: {
        /**
         * 用户阿里云Uid。
         * @example `127383705958xxxx`
         */
        UserAliUid: number;
        /**
         * 服务ID。
         * @example `service-c9f36ec6d19b4exxxxxx`
         */
        ServiceId: string;
        /**
         * 服务名称。
         * @example `部署链接权限申请`
         */
        ServiceName: string;
        /**
         * 服务商名称。
         * @example `验收测试`
         */
        SupplierName: string;
        /**
         * 服务状态。可能值：
         * - Submitted：已提交（待审批）。
         * - Approved：已通过。
         * - Rejected：已拒绝。
         * - Canceled：已取消。
         * @example `Submitted`
         */
        Status: string;
        /**
         * 审批的备注信息。
         * @example `审核通过。`
         */
        Comments: string;
        /**
         * 创建时间。
         * @example `2022-05-25T02:02:02Z`
         */
        CreateTime: string;
        /**
         * 更新时间。
         * @example `2022-05-25T02:02:02Z`
         */
        UpdateTime: string;
        /**
         * 用户信息。
         */
        UserInformation: any;
    }[];
}
