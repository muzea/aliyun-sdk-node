export interface BatchDeleteDcdnKvWithHighCapacityRequest {
    /**
     * 调用[PutDcdnKvNamespace](~~PutDcdnKvNamespace~~)时指定的名称。
     * @example `test_namespace
    `
     */
    "Namespace": string;
    /**
     * 存储有需要批量删除键值对的下载链接，此参数由调用SDK时自动生成，请使用SDK进行调用。
     * @example `https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7`
     */
    "Url": string;
}
