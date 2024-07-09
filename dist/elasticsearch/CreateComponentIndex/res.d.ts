export interface CreateComponentIndexResponse {
    /**
     * 请求ID。
     * @example `C20022BA-5382-4339-89FB-30AF48A05431`
     */
    RequestId: string;
    /**
     * 返回结果：
     * - true：创建成功
     * - false：创建失败
     * @example `true`
     */
    Result: boolean;
}
