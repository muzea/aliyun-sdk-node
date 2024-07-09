export interface RefreshDrdsAtomUrlResponse {
    /**
     * 请求ID。
     * @example `B12FC174-D5CE-4A6E-83C1-0F8F86******`
     */
    RequestId: string;
    /**
     * 刷新分库连接结果。
     * @example `true`
     */
    Result: boolean;
    /**
     * 当前API是否请求成功。
     * @example `true`
     */
    Success: boolean;
}
