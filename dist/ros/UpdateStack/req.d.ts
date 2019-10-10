interface UpdateStackRequest {
    /**
    * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-beijing`
    */ "RegionId": string;
    /**
    * 资源栈 ID。
    * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
    */ "StackId": string;
    /**
    * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。 仅允许使用字母数字字符（区分大小写），连字符和下划线。 它最多可包含64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 包含临时覆盖资源栈策略主体的结构。最小长度为1个字节，最大长度为16384个字节。
    * 如果要更新受保护资源，请在此更新期间指定临时覆盖资源栈策略。 如果未指定资源栈策略，则将使用与资源栈关联的当前策略。
    * 仅在更改集类型为UPDATE时生效。您只能指定以下参数之一：
    * - StackPolicyBody
    * - StackPolicyURL
    * - StackPolicyDuringUpdateBody
    * - StackPolicyDuringUpdateURL
    * @example `{"Statement":[{"Effect": "Allow", "Action": "Update:*", "Principal": "*", "Resource": "*"}]}`
    */ "StackPolicyDuringUpdateBody"?: string;
    /**
    * 更新资源栈的超时时间，以分钟为单位。
    * 默认值为 10。
    * @example `10`
    */ "TimeoutInMinutes"?: number;
    /**
    * 包含模板体的结构，最小长度为1个字节，最大长度为51,200个字节。
    * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
    * @example `{   "ROSTemplateFormatVersion": "2015-09-01" }`
    */ "TemplateBody"?: string;
    "Parameters"?: string[];
    /**
    * 包含资源栈策略的文件的位置。 URL必须指向位于Web服务器（http，https）中的策略（最大大小：16384字节）,或阿里云OSS存储桶（例如oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）。URL最大长度为1350字节。
    * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
    * @example `oss://ros-stack-policy/demo`
    */ "StackPolicyURL"?: string;
    "UpdateAllowPolicy"?: string;
    /**
    * 包含更新资源栈策略的文件的位置。 URL必须指向位于Web服务器（http，https）中的策略（最大大小：16384字节）,或阿里云OSS存储桶（例如oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）。URL最大长度为1350字节。
    * 如果要更新受保护资源，请在此更新期间指定临时覆盖资源栈策略。 如果未指定资源栈策略，则将使用与资源栈关联的当前策略。
    * 仅在更改集类型为UPDATE时生效。您只能指定以下参数之一：StackPolicyBody，StackPolicyURL，StackPolicyDuringUpdateBody，StackPolicyDuringUpdateURL。
    * @example `oss://ros-stack-policy/demo`
    */ "StackPolicyDuringUpdateURL"?: string;
    /**
    * 包含资源栈策略主体的结构，最小长度为1个字节，最大长度为16384个字节。
    * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
    * @example `{"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}`
    */ "StackPolicyBody"?: string;
    /**
    * 对于未传递的参数，是否使用上次传递的值。
    * @example `true`
    */ "UsePreviousParameters"?: boolean;
    /**
    * 当更新资源栈失败时，是否禁用回滚策略，默认为 false。
    * - true 表示禁用回滚，即在更新资源栈失败时不会进行回滚；
    * - false 表示不禁用回滚，即在更新资源栈失败时会进行回滚。
    * @example `false`
    */ "DisableRollback"?: boolean;
    "EnableRecover"?: boolean;
    /**
    * 包含模板主体的文件的位置。 URL必须指向位于http Web服务器（http，https），或阿里云OSS存储桶（例如oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）中的模板（最大大小：524288字节）。
    * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
    * @example `oss://ros-template/demo`
    */ "TemplateURL"?: string;
}
export { UpdateStackRequest };