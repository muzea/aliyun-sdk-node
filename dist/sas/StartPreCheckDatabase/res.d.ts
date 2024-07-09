export interface StartPreCheckDatabaseResponse {
    /**
     * 数据库预检任务ID。
     * @example `t-0006d4pydyir6l1k****`
     */
    CreateMark: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F6DC2DFF-AB3A-563A-8FC2-3D0D991E****`
     */
    RequestId: string;
}
