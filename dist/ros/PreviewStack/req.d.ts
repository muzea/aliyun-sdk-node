interface PreviewStackRequest {
    /**
    * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-beijing`
    */ "RegionId": string;
    /**
    * 资源栈的超时时间，以分钟为单位。
    * 默认值为 10。
    * @example `10`
    */ "TimeoutInMinutes": number;
    /**
    * 资源栈名称。资源栈名称可以包含数字、字母（大小写敏感）、连字符、下划线。必须以数字或字母开头，且长度不超过255个字符。
    * @example `MyStack`
    */ "StackName": string;
    /**
    * 当创建资源栈失败时，是否禁用回滚策略，默认为false。
    * - true 表示禁用回滚，即在创建资源栈失败时不会进行回滚；
    * - false 表示不禁用回滚，即在创建资源栈失败时会进行回滚。
    * @example `false`
    */ "DisableRollback"?: boolean;
    "Parameters"?: string[];
    /**
    * 包含模板体的结构，最小长度为1个字节，最大长度为51,200个字节。
    * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
    * @example `{   "ROSTemplateFormatVersion": "2015-09-01" }`
    */ "TemplateBody"?: string;
    /**
    * 包含资源栈策略的文件的位置。 URL必须指向位于Web服务器（http，https）中的策略（最大大小：16384字节）,或阿里云OSS存储桶（例如oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）。URL最大长度为1350字节。
    * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
    * @example `oss://ros-stack-policy/demo`
    */ "StackPolicyURL"?: string;
    /**
    * 包含资源栈策略主体的结构，最小长度为1个字节，最大长度为16384个字节。
    * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
    * @example `{"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}`
    */ "StackPolicyBody"?: string;
    /**
    * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。 仅允许使用字母数字字符（区分大小写），连字符和下划线。 它最多可包含64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 包含模板主体的文件的位置。 URL必须指向位于http Web服务器（http，https），或阿里云OSS存储桶（例如oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）中的模板（最大大小：524288字节）。
    * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
    * @example `oss://ros-template/demo`
    */ "TemplateURL"?: string;
}
export { PreviewStackRequest };