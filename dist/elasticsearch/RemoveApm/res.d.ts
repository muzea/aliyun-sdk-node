export interface RemoveApmResponse {
    /**
     * 请求ID。
     * @example `29A879FB-86BF-54CA-9426-B769A099E1A1`
     */
    RequestId: string;
    /**
     * 删除是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Result: boolean;
}
