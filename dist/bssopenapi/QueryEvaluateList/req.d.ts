export interface QueryEvaluateListRequest {
    /**
     * 类型，取值：
     * - 1：搜索可开票金额负值。
     * - 2：搜索可开票金额为正值。
     * - 3：搜索所有不为0代开票信息。
     * - 4：已开金额>0。
     * > 默认为空则搜索全部。
     * @example `1`
     */
    "Type"?: number;
    /**
     * 外部订单号。
     * @example `2387432832696`
     */
    "OutBizId"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询开始金额。
     * @example `100`
     */
    "StartAmount"?: number;
    /**
     * 查询终止金额。
     * @example `1000`
     */
    "EndAmount"?: number;
    /**
     * 支付成功时间开始区间。格式：yyyy-mm-dd hh:mm:ss。
     * @example `2020-02-02 12:00:00`
     */
    "StartBizTime"?: string;
    /**
     * 支付成功时间结束区间。格式：yyyy-mm-dd hh:mm:ss。
     * @example `2020-02-02 15:00:00`
     */
    "EndBizTime"?: string;
    /**
     * 排序类型，取值：
     * - 1：按ID进行倒排。
     * - 2：按代开票类型倒排，id倒序二排序。
     * - 3：按代开票类型顺排，id倒序二排序。
     * @example `1`
     */
    "SortType"?: number;
    /**
     * 搜索开始时间。
     * @example `2020-02-02 12:00:00`
     */
    "StartSearchTime"?: string;
    /**
     * 搜索结束时间。
     * @example `2020-03-02 12:00:00`
     */
    "EndSearchTime"?: string;
    /**
     * 账期。
     * @example `202003`
     */
    "BillCycle"?: string;
    /**
     * 发票市场类型列表。
     * > 默认为空表示全部类型。
     * @example `ALIYUN`
     */
    "BizTypeList"?: string[];
}
