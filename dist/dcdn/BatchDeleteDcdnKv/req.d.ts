export interface BatchDeleteDcdnKvRequest {
    /**
     * 调用[PutDcdnKvNamespace](~~PutDcdnKvNamespace~~)时指定的名称。
     * @example `test_namespace`
     */
    "Namespace": string;
    /**
     * 要批量删除的键名称列表， 最多删除10000个键。
     */
    "Keys": string[];
}
