export interface GetConnectionPoolIpOperationResultResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA651`
     */
    RequestId: string;
    /**
     * 绑定与解绑的执行结果文件地址，即调用[AssociateIpWithConnectionPool](~~313334~~)或[DissociateIpFromConnectionPool](~~313335~~)接口执行结果文件下载地址。格式为`https://<BucketName.oss域名>/ipma/<执行结果文件>?<超期信息>&<临时AK/SK信息>&<签名信息>`。
     * 文件内容为绑定和解绑的错误IP地址或错误原因列表，如果该字段为空，代表没有失败记录。
     */
    ResultFilePaths: string[];
}
