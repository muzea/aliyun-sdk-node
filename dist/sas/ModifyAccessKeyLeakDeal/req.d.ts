export interface ModifyAccessKeyLeakDealRequest {
    /**
     * AccessKey泄露记录ID。
     * >调用[DescribeAccesskeyLeakList](~~DescribeAccesskeyLeakList~~)接口可以获取该参数，与**IdList**参数不能同时为空。
     * @example `123`
     */
    "Id"?: number;
    /**
     * AccessKey泄露信息的处理方式。取值：
     * - **manual**：手动处理
     * - **disable**：禁用
     * - **add-whitelist**：加入白名单
     * @example `disable`
     */
    "Type": string;
    /**
     * AccessKey泄露记录处理的备注信息。
     * @example `disabled.`
     */
    "Remark"?: string;
    /**
     * AccessKey泄露记录ID集合。
     */
    "IdList"?: number[];
}
