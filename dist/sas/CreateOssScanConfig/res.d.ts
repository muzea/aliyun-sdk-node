export interface CreateOssScanConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5DFD6277-CC36-57F7-ACE6-F5952123****`
     */
    RequestId: string;
    /**
     * 策略ID。
     * @example `210****`
     */
    Id: number;
}
