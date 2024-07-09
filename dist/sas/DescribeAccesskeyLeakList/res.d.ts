export interface DescribeAccesskeyLeakListResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `B37C9052-A73E-4707-A024-9247702852BE`
     */
    RequestId: string;
    /**
     * 该参数已废弃，无需关注。
     * @example `1612357897000`
     */
    GmtLast: number;
    /**
     * 未处理的AccessKey泄露信息的数量。
     * @example `1`
     */
    AkLeakCount: number;
    /**
     * 分页查询时，每页最多显示的数据条数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 查询到的AccessKey泄露信息的总条数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * AccessKey泄露的详细信息列表。
     */
    AccessKeyLeakList: {
        /**
         * AccessKey泄露信息的处理时间。
         * @example `2020-12-03 21:23:38`
         */
        DealTime: string;
        /**
         * 泄露的AccessKey信息的处理状态。取值：
         * - **pending**：未处理
         * - **dealed**：已处理
         * @example `pending`
         */
        Status: string;
        /**
         * 泄露信息的类型，固定取值为**AccessKey**。
         * @example `AccessKey`
         */
        Type: string;
        /**
         * 泄露AK的账号类型。取值：
         * - **master**：阿里云账号
         * - **ram**：RAM用户
         * @example `master`
         */
        UserType: string;
        /**
         * 泄露的AccessKey ID。
         * @example `LTAI4Fytv7ALKzkNVBV6****`
         */
        AccesskeyId: string;
        /**
         * 受影响的阿里云账号名称。
         * @example `testAccountName`
         */
        AliUserName: string;
        /**
         * AccessKey泄露信息的处理方式。取值：
         * - **pending**：未处理
         * - **manual**：手动处理
         * - **disable**：禁用
         * - **add-whitelist**：加入白名单
         * @example `pending`
         */
        DealType: string;
        /**
         * 发现AccessKey泄露信息的外部平台链接。
         * @example `https://github.com/hht312/test-ak/blob/0e466d2ecce55b4c924d773a058e5dc602d8****​/1001`
         */
        Url: string;
        /**
         * AccessKey泄露的首次发现时间。该参数为时间戳格式，单位为毫秒。
         * @example `1612357897000`
         */
        GmtModified: number;
        /**
         * 资产所在的平台，取值固定为**云平台**。
         * @example `云平台`
         */
        Asset: string;
        /**
         * 数据库主键ID。
         * @example `389357`
         */
        Id: number;
    }[];
}
