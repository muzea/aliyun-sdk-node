export interface ListConversationsRequest {
    /**
     * 实例列表
     * @example `da37319b-6c83-4268-9f19-814aed62e401`
     */
    "InstanceId": string;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 个数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 主叫号码
     * @example `138106*****`
     */
    "CallingNumber"?: string;
    /**
     * 结果
     * @example `0`
     */
    "Result"?: number;
    /**
     * 查询条件
     * @example `13788914724`
     */
    "Query"?: string;
    /**
     * 开始日期范围左区间
     * @example `1638288000000`
     */
    "BeginTimeLeftRange"?: number;
    /**
     * 开始日期范围右区间
     * @example `1637547875311`
     */
    "BeginTimeRightRange"?: number;
    /**
     * 是否是沙箱
     * @example `false`
     */
    "IsSandBox"?: string;
    /**
     * 轮次查询范围左区间
     * @example `1`
     */
    "RoundsLeftRange"?: number;
    /**
     * 轮次查询范围右区间
     * @example `3`
     */
    "RoundsRightRange"?: number;
}
