interface SetStackPolicyRequest {
    /**
    * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源栈ID。
    * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
    */ "StackId": string;
    /**
    * 包含资源栈策略主体的结构，最小长度为1个字节，最大长度为16384个字节。
    * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
    * @example `{"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}`
    */ "StackPolicyBody"?: string;
    /**
    * 包含资源栈策略的文件的位置。 URL必须指向位于Web服务器（http，https）中的策略（最大大小：16384字节），或阿里云OSS存储桶（例如oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）。
    * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
    * URL最大长度为1350字节。
    * @example `oss://ros/stack-policy/demo`
    */ "StackPolicyURL"?: string;
}
export { SetStackPolicyRequest };