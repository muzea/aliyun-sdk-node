export interface RenamePlaybookNodeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1E1EC464-3BD7-518F-9937-BCC12E6855FE`
     */
    RequestId: string;
    /**
     * 返回的新节点名称。
     * @example `waf_process`
     */
    RenameResult: string;
}
