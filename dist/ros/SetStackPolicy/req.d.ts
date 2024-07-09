export interface SetStackPolicyRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 包含资源栈策略主体的结构，长度为1~16,384个字节。
     * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
     * @example `{"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}`
     */
    "StackPolicyBody"?: string;
    /**
     * 包含资源栈策略主体的文件的位置。URL必须指向位于Web服务器（HTTP或HTTPS）或阿里云OSS存储桶（例如：oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou）中的模板，模板最大为16,384个字节。
     * > 如果OSS地域未指定，默认与接口参数RegionId相同。
     *
     * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
     * URL最大长度为1350字节。
     * @example `oss://ros/stack-policy/demo`
     */
    "StackPolicyURL"?: string;
}
