export interface PutDcdnKvNamespaceResponse {
    /**
     * Namespace状态，取值：
     * - **online**：正常。
     * - **delete**：待删除。
     * - **deleting**：删除中。
     * - **deleted**：已删除。
     * @example `online`
     */
    Status: string;
    /**
     * Namespace名称。
     * @example `ns1`
     */
    Namespace: string;
    /**
     * Namespace ID。
     * @example `12423131231****`
     */
    NamespaceId: string;
    /**
     * 请求ID。
     * @example `D61E4801-EAFF-4A63-AAE1-FBF6CE1CFD1C`
     */
    RequestId: string;
    /**
     * Namespace描述信息，最大长度为1024个字符。
     * @example `the first namespace`
     */
    Description: string;
}
