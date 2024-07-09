export interface DeleteDcdnKvRequest {
    /**
     * 调用[PutDcdnKvNamespace](~~PutDcdnKvNamespace~~)时指定的名称。
     * @example `ns1`
     */
    "Namespace": string;
    /**
     * 要删除的Key名称。
     * @example `test_key_1`
     */
    "Key": string;
}
