export interface DeleteSourceMapResponse {
    /**
     * 请求ID。
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
    /**
     * 执行结果。
     * - success：删除成功。
     * - false：删除失败。
     * @example `success`
     */
    Data: string;
}
