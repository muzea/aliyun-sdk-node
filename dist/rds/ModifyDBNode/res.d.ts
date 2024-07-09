export interface ModifyDBNodeResponse {
    /**
     * 请求ID。
     * @example `5CD61041-35F7-10F7-BE94-33A48B221218`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 订单ID。
     * @example `20793850608****`
     */
    OrderId: number;
    /**
     * 表示请求是否成功，各取值含义如下：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
}
