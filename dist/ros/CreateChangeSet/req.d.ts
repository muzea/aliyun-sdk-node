interface CreateChangeSetRequest {
    /**
    * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 更改集的名称。 该名称在与指定资源栈关联的所有更改集中必须是唯一的。
    * 更改集名称只能包含字母数字字符（区分大小写），连字符和下划线。 它必须以字母字符开头，不能超过255个字符。
    * @example `MyChangeSet`
    */ "ChangeSetName": string;
    /**
    * 要为其创建更改集的现有资源栈的ID。 ROS通过将此资源栈的信息与您提交的信息（例如修改的模板或不同的参数输入值）进行比较来生成更改集。
    * 仅在更改集类型为UPDATE时生效，且必须指定。
    * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
    */ "StackId"?: string;
    "ChannelId"?: string;
    "Parameters"?: string[];
    /**
    * 包含更新资源栈策略的文件的位置。 URL必须指向位于Web服务器（http，https）中的策略（最大大小：16384字节）,或阿里云OSS存储桶（例如oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）。URL最大长度为1350字节。
    * 当更改集类型为CREATE时，您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
    * 当更改集类型为UPDATE时，您只能指定以下参数之一：StackPolicyBody，StackPolicyURL，StackPolicyDuringUpdateBody，StackPolicyDuringUpdateURL。
    * @example `oss://ros/stack-policy/demo`
    */ "StackPolicyURL"?: string;
    /**
    * 包含资源栈策略主体的结构，最小长度为1个字节，最大长度为16384个字节。
    * 当更改集类型为CREATE时，您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
    * 当更改集类型为UPDATE时，您只能指定以下参数之一：StackPolicyBody，StackPolicyURL，StackPolicyDuringUpdateBody，StackPolicyDuringUpdateURL。
    * @example `{"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}`
    */ "StackPolicyBody"?: string;
    /**
    * 要为其创建更改集的新资源栈的名称。资源栈名称可以包含数字、字母（大小写敏感）、连字符、下划线。必须以数字或字母开头，且长度不超过255个字符。
    * 仅在更改集类型为CREATE时生效，且必须指定。
    * @example `MyStack`
    */ "StackName"?: string;
    /**
    * 仅在更改集类型为UPDATE时生效。对于未传递的参数，是否使用上次传递的值。
    * 默认值：false。
    * @example `true`
    */ "UsePreviousParameters"?: boolean;
    /**
    * 更改集的类型。 要为新资源栈创建更改集，请指定CREATE。 要为现有资源栈创建更改集，请指定UPDATE。
    * 如果为新资源栈创建更改集，则ROS会创建具有唯一资源栈ID的资源栈。 资源栈将处于REVIEW_IN_PROGRESS状态，直到您执行更改集。
    * 默认情况下，ROS指定UPDATE。 您不能使用UPDATE类型为新资源栈创建更改集，也不能使用CREATE类型为现有资源栈创建更改集。
    * 可选值：
    * - CREATE
    * - UPDATE
    * 默认值：UPDATE。
    * @example `UPDATE`
    */ "ChangeSetType"?: string;
    /**
    * 帮助您识别此更改集的说明。
    * 最大长度1024字节。
    * @example `It is a demo.`
    */ "Description"?: string;
    /**
    * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。 仅允许使用字母数字字符（区分大小写），连字符和下划线。 它最多可包含64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 包含模板主体的文件的位置。 URL必须指向位于http Web服务器（http，https），或阿里云OSS存储桶（例如oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）中的模板（最大大小：524288字节）。
    * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
    * @example `oss://ros/template/demo`
    */ "TemplateURL"?: string;
    /**
    * 包含更新资源栈策略的文件的位置。 URL必须指向位于Web服务器（http，https）中的策略（最大大小：16384字节）,或阿里云OSS存储桶（例如oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）。URL最大长度为1350字节。
    * 如果要更新受保护资源，请在此更新期间指定临时覆盖资源栈策略。 如果未指定资源栈策略，则将使用与资源栈关联的当前策略。
    * 仅在更改集类型为UPDATE时生效。您只能指定以下参数之一：StackPolicyBody，StackPolicyURL，StackPolicyDuringUpdateBody，StackPolicyDuringUpdateURL。
    * @example `oss://ros/stack-policy/demo`
    */ "StackPolicyDuringUpdateURL"?: string;
    /**
    * 包含模板体的结构，最小长度为1个字节，最大长度为51,200个字节。
    * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
    * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
    */ "TemplateBody"?: string;
    "UpdateAllowPolicy"?: string;
    /**
    * 资源栈状态变为CREATE_FAILED或UPDATE_FAILED之前可以经过的时间量。
    * 当更改集类型为CREATE时，则该参数是必需的。当更改集类型为UPDATE时，则为可选参数。
    * 取值范围：10-1440。（分钟）
    * 默认值：10。（分钟）
    * @example `12`
    */ "TimeoutInMinutes"?: number;
    "ActivityId"?: string;
    "OrderSource"?: string;
    /**
    * 如果资源栈创建或更新失败，则设置为true以禁用资源栈回滚。 如果为新资源栈创建更改集，则默认为false，否则将使用先前的值。
    * @example `false`
    */ "DisableRollback"?: boolean;
    /**
    * 包含临时覆盖资源栈策略主体的结构。最小长度为1个字节，最大长度为16384个字节。
    * 如果要更新受保护资源，请在此更新期间指定临时覆盖资源栈策略。 如果未指定资源栈策略，则将使用与资源栈关联的当前策略。
    * 仅在更改集类型为UPDATE时生效。您只能指定以下参数之一：StackPolicyBody，StackPolicyURL，StackPolicyDuringUpdateBody，StackPolicyDuringUpdateURL。
    * @example `{"Statement":[{"Effect":"Allow","Action":"Update:*","Principal":"*","Resource":"*"}]}`
    */ "StackPolicyDuringUpdateBody"?: string;
    "NotificationURLs"?: string[];
}
export { CreateChangeSetRequest };