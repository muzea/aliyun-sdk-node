export interface RemoveRecycleBinTableResponse {
    /**
     * 回收站中的表是否被清除。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `A3140FC7-B78B-4D8E-B0C8-926D28******`
     */
    RequestId: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: boolean;
}
