export interface AcknowledgeTaskResultResponse {
    /**
     * 唯一请求识别码。
     * @example `D6CB3623-4726-4947-AC2B-2C6E673B447C`
     */
    RequestId: string;
    /**
     * 确认成功数量。
     * @example `1`
     */
    Result: number;
}
