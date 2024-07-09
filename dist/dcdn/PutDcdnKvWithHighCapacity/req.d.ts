export interface PutDcdnKvWithHighCapacityRequest {
    /**
     * 调用[PutDcdnKvNamespace](~~PutDcdnKvNamespace~~)时指定的名称。
     * @example `test_namesapce`
     */
    "Namespace": string;
    /**
     * 需要设置的键名称，最长不超过512个字符，不能包含空格、反斜杠（/）。
     * @example `test_key`
     */
    "Key": string;
    /**
     * 存储有需要设置的键值对的下载链接，此参数由调用SDK时自动生成，请使用SDK进行调用。
     * @example `https://xxxobject.oss-cn-reginon.aliyuncs.com/9d91_xxxxxxxxxxx_158bb6e0f97c477791209bb46bd599f7`
     */
    "Url": string;
}
