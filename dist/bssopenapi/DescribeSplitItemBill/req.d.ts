export interface DescribeSplitItemBillRequest {
    /**
     * 账单日期，YYYY－MM。
     * @example `2020-03`
     */
    "BillingCycle": string;
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode"?: string;
    /**
     * 产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 订阅类型。取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * > 必须和ProductCode参数一起使用。
     * @example `PayAsYouGo`
     */
    "SubscriptionType"?: string;
    /**
     * 用来表示当前调用开始读取的位置，参数值必须为空或者使用返回结果中的NextToken设值，否则会报错。空代表从头开始读取。
     * @example `CAESEgoQCg4KCmd`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。默认值：20，最大值：300。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 资源归属账号的ID，资源归属账号是实际使用资源的账号。
     * @example `123`
     */
    "BillOwnerId"?: number;
    /**
     * 实例ID。
     * @example `i-kjhdskjgshfdlkjfdh`
     */
    "InstanceID"?: string;
    /**
     * 分拆项ID。
     * @example `i-kjhdskjgshfdlkjfdh`
     */
    "SplitItemID"?: string;
    /**
     * 查询账单的颗粒度。取值：
     * - MONTHLY：月。与用户中心-分账账单-账期账单一致。
     * - DAILY：日。与用户中心-分账账单-按天账单一致。
     * > 选择DAILY需指定BillingDate。
     * @example `Monthly`
     */
    "Granularity"?: string;
    /**
     * 账单日期，仅当Granularity为DAILY时必填，格式为YYYY-MM-DD。
     * @example `2020-03-02`
     */
    "BillingDate"?: string;
    /**
     * 标签过滤条件，支持多组标签查询条件TagValues。多组TagValues条件之间为或关系。
     */
    "TagFilter"?: {
        /**
         * TagValues.N用于查找符合指定标签值的账单，由字符串列表组成。标签值长度的取值范围：1~128。N的取值范围：1~20。
         * - 指定TagValues.N时，需同时指定TagFilter.N.TagKey，否则报错InvalidParameter.TagValues。
         * - 指定多个标签值时，则满足任一标签值的账单都会被查询到。
         * @example `TestValue`
         */
        TagValues: string[];
        /**
         * TagFilter.N用于查找符合指定标签的账单，由一个键值对组成。标签键长度的取值范围：1~128。N的取值范围：1~20
         * - 仅指定TagFilter.N.TagKey时，则返回关联该标签键的所有账单。
         * - 同时指定多个标签键值对时，满足任一标签键值对的账单被查找到。
         * - 如果资源上的标签发生变动，仅能查询标签存续期间的账单。
         * @example `TestKey`
         */
        TagKey: string;
    }[];
    /**
     * 根据原价（PretaxGrossAmount）和应付（PretaxAmount）是否都为0做过滤。取值：
     * - false。
     * - true。
     * @example `false`
     */
    "IsHideZeroCharge"?: boolean;
    "PipCode"?: string;
}
