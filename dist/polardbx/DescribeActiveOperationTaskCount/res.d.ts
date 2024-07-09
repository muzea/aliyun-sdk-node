export interface DescribeActiveOperationTaskCountResponse {
    /**
     * 请求ID。
     * @example `EC7E27FC-58F8-4722-89BB-D1B6D0971956`
     */
    RequestId: string;
    /**
     * 是否需要弹窗：
     * - 1：需要
     * - 0：不需要
     * @example `1`
     */
    NeedPop: number;
    /**
     * 总数。
     * @example `20`
     */
    TaskCount: number;
}
