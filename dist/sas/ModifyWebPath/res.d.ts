export interface ModifyWebPathResponse {
    /**
     * 操作是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `20623245-7E5E-52CA-9640-7502F119****`
     */
    RequestId: string;
}
