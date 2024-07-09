export interface ListCountriesResponse {
    /**
     * 错误代码:
     * - 200 OK
     * - 1109 系统错误
     * @example `200`
     */
    Code: string;
    /**
     * message信息
     * @example `成功`
     */
    Message: string;
    /**
     * request ID，阿里云会根据这个进行错误跟踪
     * @example `A747A00F-E096-5244-88B3-3E474BAE3AE4`
     */
    RequestId: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功的。不代表后 续业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 区域代码的列表
     */
    Data: string[];
}
