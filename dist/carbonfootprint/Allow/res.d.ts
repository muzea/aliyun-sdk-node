export interface AllowResponse {
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `A009DA1A-46BD-5C72-A713-EEB82249120D`
     */
    RequestId: string;
    /**
     * 请求成功返回true
     * @example `true`
     */
    Data: boolean;
}
