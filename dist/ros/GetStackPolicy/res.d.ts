export interface GetStackPolicyResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 包含资源栈策略主体的结构，长度为1~16,384个字节。
     * @example `{"Statement": [{"Action": "Update:*", "Effect": "Allow","Principal": "*","Resource": "*"}]}`
     */
    StackPolicyBody: any;
}
