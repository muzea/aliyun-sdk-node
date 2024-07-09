export interface StartDiscoverDatabaseTaskResponse {
    /**
     * 扫描任务标识。
     * @example `48bced6d-2aee-4fa2-9aba-b846b77b****`
     */
    CreateMark: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F46921AF-CC55-5971-92C9-7E09E160****`
     */
    RequestId: string;
}
