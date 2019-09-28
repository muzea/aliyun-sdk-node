interface ROS {
    /**
    * 创建更改集。
    */ CreateChangeSet(query: {
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
    }): Promise<{}>;
    /**
    * 设置资源栈策略。
    */ SetStackPolicy(query: {
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
    }): Promise<{}>;
    /**
    * 查询资源类型的详细信息。
    */ GetResourceType(query: {
        "RegionId"?: string;
        /**
        * 资源类型。
        * @example `ALIYUN::ROS::WaitConditionHandle`
        */ "ResourceType": string;
    }): Promise<{}>;
    /**
    * 取消更新资源栈。
    */ CancelUpdateStack(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
        /**
        * 取消更新资源栈类型，建议将DisableRollback设置为true。取值范围：
        * - Quick：尽快取消更新资源栈。
        * - Safe：尽可能安全地取消更新资源栈。
        * @example `Safe`
        */ "CancelType"?: string;
    }): Promise<{}>;
    /**
    * 查询更改集列表。
    */ ListChangeSets(query: {
        /**
        * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
        "Status"?: string[];
        "ChangeSetName"?: string[];
        /**
        * 分页查询时设置的每页行数。最小值1，最大值：50。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 更改集列表的页码，起始值为 1。
        * 默认值为 1。
        * @example `1`
        */ "PageNumber"?: number;
        "ExecutionStatus"?: string[];
    }): Promise<{}>;
    /**
    * 发送信号。
    */ SignalResource(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 信号的状态。故障信号会导致无法创建或更新堆栈。如果所有信号都是警告信号，也将无法创建或更新堆栈。可选值：
        * - SUCCESS
        * - FAILURE
        * - WARNING
        * @example `SUCCESS`
        */ "Status": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
        /**
        * 信号的唯一ID。如果向单个资源发送多个信号（例如发信号通知等待条件），则每个信号都需要不同的信息ID。
        * 长度限制：1~64
        * @example `27c7347b-352a-4377-accf-63d361c1ea60`
        */ "UniqueId": string;
        /**
        * 资源逻辑ID，模板定义的名称。
        * @example `WebServer`
        */ "LogicalResourceId": string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        "Data"?: string;
    }): Promise<{}>;
    /**
    * 执行更改集。
    */ ExecuteChangeSet(query: {
        /**
        * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 更改集ID。
        * @example `1f6521a4-05af-4975-afe9-bc4b45ad5bd5`
        */ "ChangeSetId": string;
    }): Promise<{}>;
    /**
    * 查询资源栈、更改集的详细信息。
    */ GetTemplate(query: {
        /**
        * 模板所属资源栈的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId"?: string;
        /**
        * 更改集ID。
        * @example `1f6521a4-05af-4975-afe9-bc4b45ad5bd5`
        */ "ChangeSetId"?: string;
    }): Promise<{}>;
    /**
    * 查询资源栈及其下面资源的事件。
    */ ListStackEvents(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
        "Status"?: string[];
        /**
        * 分页查询时设置的每页行数，最大值 100 行，默认为 10。
        * @example `10`
        */ "PageSize"?: number;
        "ResourceType"?: string[];
        /**
        * 事件列表的页码，起始值为 1，默认值为 1。
        * @example `1`
        */ "PageNumber"?: number;
        "LogicalResourceId"?: string[];
    }): Promise<{}>;
    /**
    * 根据资源类型查询该资源的模板。
    */ GetResourceTypeTemplate(query: {
        "RegionId"?: string;
        /**
        * 资源类型。
        * @example `ALIYUN::ECS::VPC`
        */ "ResourceType": string;
    }): Promise<{}>;
    /**
    * 查询更改集信息。
    */ GetChangeSet(query: {
        /**
        * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 更改集ID。
        * @example `1f6521a4-05af-4975-afe9-bc4b45ad5bd5`
        */ "ChangeSetId": string;
        /**
        * 是否获取模板，默认值为false。
        * @example `true`
        */ "ShowTemplate"?: boolean;
    }): Promise<{}>;
    /**
    * 查询某个资源栈的资源列表。
    */ GetStackResource(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
        /**
        * 资源逻辑ID，模板定义的名称。
        * @example `WebServer`
        */ "LogicalResourceId": string;
        /**
        * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。 仅允许使用字母数字字符（区分大小写），连字符和下划线。 它最多可包含64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 是否查询资源属性（输出）。
        * @example `true`
        */ "ShowResourceAttributes"?: boolean;
    }): Promise<{}>;
    /**
    * 验证将要创建资源栈的模板。
    */ ValidateTemplate(query: {
        /**
        * 资源栈模板所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 包含模板主体的文件的位置。 URL必须指向位于http Web服务器（http，https），或阿里云OSS存储桶（例如oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）中的模板（最大大小：524288字节）。
        * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
        * @example `oss://ros/template/demo`
        */ "TemplateURL"?: string;
        /**
        * 包含模板体的结构，最小长度为1个字节，最大长度为51,200个字节。
        * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
        * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
        */ "TemplateBody"?: string;
    }): Promise<{}>;
    /**
    * 查询支持的资源类型列表。
    */ ListResourceTypes(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 获取资源栈策略。
    */ GetStackPolicy(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
    }): Promise<{}>;
    /**
    * 删除更改集。
    */ DeleteChangeSet(query: {
        /**
        * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 更改集ID。
        * @example `1f6521a4-05af-4975-afe9-bc4b45ad5bd5`
        */ "ChangeSetId": string;
    }): Promise<{}>;
    /**
    * 查询地域列表。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        /**
        * 根据汉语、英语和日语筛选返回结果。更多详情，请参见RFC7231。
        * 取值范围：zh-CN, en-US, ja。
        * 默认值：zh-CN。
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
    }): Promise<{}>;
    /**
    * 查询某个资源栈的资源列表。
    */ ListStackResources(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
    }): Promise<{}>;
    /**
    * 在资源栈处于创建失败状态时可继续创建资源栈。
    */ ContinueCreateStack(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
        "RecreatingResources"?: string[];
    }): Promise<{}>;
    /**
    * 查询模板中要创建的资源的预估价格。
    */ GetTemplateEstimateCost(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-beijing`
        */ "RegionId": string;
        /**
        * 包含模板主体的文件的位置。 URL必须指向位于http Web服务器（http，https），或阿里云OSS存储桶（例如oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）中的模板（最大大小：524288字节）。
        * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
        * @example `oss://ros-template/demo`
        */ "TemplateURL"?: string;
        "Parameters"?: string[];
        /**
        * 包含模板体的结构，最小长度为1个字节，最大长度为51,200个字节。
        * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
        * @example `{   "ROSTemplateFormatVersion": "2015-09-01" }`
        */ "TemplateBody"?: string;
        /**
        * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。 仅允许使用字母数字字符（区分大小写），连字符和下划线。 它最多可包含64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{}>;
    /**
    * 创建资源栈。
    */ CreateStack(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈名称。资源栈名称可以包含数字、字母（大小写敏感）、连字符、下划线。必须以数字或字母开头，且长度不超过255个字符。
        * @example `MyStack`
        */ "StackName": string;
        /**
        * 创建资源栈的超时时间，以分钟为单位。
        * 默认值为 10。
        * @example `10`
        */ "TimeoutInMinutes": number;
        /**
        * 当创建资源栈失败时，是否禁用回滚策略，默认为 false。
        * - true 表示禁用回滚，即在创建资源栈失败时不会进行回滚；
        * - false 表示不禁用回滚，即在创建资源栈失败时会进行回滚。
        * @example `false`
        */ "DisableRollback"?: boolean;
        "ChannelId"?: string;
        /**
        * 包含模板体的结构，最小长度为1个字节，最大长度为51,200个字节。
        * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
        * @example `{   "ROSTemplateFormatVersion": "2015-09-01" }`
        */ "TemplateBody"?: string;
        "Parameters"?: string[];
        /**
        * 包含资源栈策略的文件的位置。 URL必须指向位于Web服务器（http，https）中的策略（最大大小：16384字节），或阿里云OSS存储桶（例如oss://ros/stack-policy/demo、oss://ros/stack-policy/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）。
        * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
        * URL最大长度为1350字节。
        * @example `oss://ros-stack-policy/demo`
        */ "StackPolicyURL"?: string;
        /**
        * 包含资源栈策略主体的结构，最小长度为1个字节，最大长度为16384个字节。
        * 您可以指定StackPolicyBody或StackPolicyURL参数，但不能同时指定两者。
        * @example `{"Statement": [{"Action": "Update:*", "Resource": "*", "Effect": "Allow", "Principal": "*"}]}`
        */ "StackPolicyBody"?: string;
        "ActivityId"?: string;
        "OrderSource"?: string;
        /**
        * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。 仅允许使用字母数字字符（区分大小写），连字符和下划线。 它最多可包含64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 包含模板主体的文件的位置。 URL必须指向位于http Web服务器（http，https），或阿里云OSS存储桶（例如oss://ros/template/demo、oss://ros/template/demo?RegionId=cn-hangzhou。oss地域如未指定，默认与接口参数RegionId相同。）中的模板（最大大小：524288字节）。
        * 您必须指定TemplateBody或TemplateURL参数，但不能同时指定两者。
        * @example `oss://ros-template/demo`
        */ "TemplateURL"?: string;
        "NotificationURLs"?: string[];
    }): Promise<{}>;
    /**
    * 查询资源栈信息。
    */ GetStack(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈 ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
        /**
        * 保证请求的幂等性。 该值由客户端生成，并且必须是全局唯一的。 仅允许使用字母数字字符（区分大小写），连字符和下划线。 它最多可包含64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
    }): Promise<{}>;
    /**
    * 删除资源栈，并可以删除该资源栈下所有的资源。
    */ DeleteStack(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 资源栈 ID。
        * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
        */ "StackId": string;
        /**
        * 是否保留该资源栈下的所有资源。
        * @example `false`
        */ "RetainAllResources"?: boolean;
    }): Promise<{}>;
    /**
    * 更新资源栈。
    */ UpdateStack(query: {
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
    }): Promise<{}>;
    /**
    * 查询资源栈列表。
    */ ListStacks(query: {
        /**
        * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        "Status"?: string[];
        /**
        * 分页查询时设置的每页行数，最大值 100。
        * 默认为 10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 父资源栈 ID。用于列出嵌套资源栈。
        * @example `xxxx`
        */ "ParentStackId"?: string;
        "StackName"?: string[];
        /**
        * 资源栈列表的页码，起始值为 1。
        * 默认值为 1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 是否列出嵌套资源栈。仅当指定ParentStackId时生效。
        * @example `true`
        */ "ShowNestedStack"?: boolean;
    }): Promise<{}>;
    /**
    * 预览指定模板将要创建的资源栈信息。
    */ PreviewStack(query: {
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
    }): Promise<{}>;
}
export default ROS;
