export interface AddZoneRecordResponse {
    /**
     * 请求ID。
     * @example `0B7AD377-7E86-44A8-B9A8-53E8666E72FE`
     */
    RequestId: string;
    /**
     * 解析记录ID。
     * @example `5808`
     */
    RecordId: number;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
