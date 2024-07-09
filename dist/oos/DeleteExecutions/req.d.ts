export interface DeleteExecutionsRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 执行ID（列表）。
     * 可以由多个ID组成一个JSON数组，格式为`["xxxxxxxxx", "yyyyyyyyy", … "zzzzzzzzz"]`，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["exec-xxx"]`
     */
    "ExecutionIds": string;
}
