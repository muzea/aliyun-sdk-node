export interface CreateCustomerResponse {
    /**
     * 告知调用是否成功的代码
     * @example `200`
     */
    Code: string;
    /**
     * 同Code参数
     * @example `12345`
     */
    Message: string;
    /**
     * 告知是否成功创建客户，如果为true，则Message中为CID
     * @example `true`
     */
    Data: boolean;
    /**
     * request ID，阿里云会根据这个进行错误跟踪
     * @example `A9B725C7-3DBD-576B-AC91-F6F22AB99A77`
     */
    RequestId: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功的。不代表后 续业务操作的成功。
     * @example `true`
     */
    Success: boolean;
}
