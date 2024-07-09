export interface DeleteInstanceRequest {
    /**
     * 待释放的实例ID。
     * @example `hb-bp16o0pd52e3y****`
     */
    "ClusterId": string;
    /**
     * 是否立即释放实例。
     * - **true**：立即释放。
     * - **false**：不立即释放，存储在回收站， 默认值。
     * @example `false`
     */
    "ImmediateDeleteFlag"?: boolean;
}
