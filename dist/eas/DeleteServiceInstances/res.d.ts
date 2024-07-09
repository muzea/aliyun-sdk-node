export interface DeleteServiceInstancesResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 请求返回信息。
     * @example `Instance(s) [foo-rdsb,foo-rdsa]  for service [foo] in region [cn-shanghai] was deleted successfully`
     */
    Message: string;
}
