interface CLOUDFW {
    /**
    * 调用AddAddressBook接口添加访问控制地址簿。
    */ AddAddressBook(query: {
        "RegionId"?: string;
        /**
        * 地址簿描述信息。
        * @example `DEMO地址簿`
        */ "Description": string;
        /**
        * 地址簿名称。
        * @example `demo_address_book`
        */ "GroupName": string;
        /**
        * 地址簿类型, 可选值包括：
        * - **ip**：IP地址簿
        * - **domain**：域名地址簿
        * - **port**：端口地址簿
        * - **tag**：ECS标签地址簿
        * @example `ip`
        */ "GroupType": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定返回结果语言环境。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 地址列表，多个地址间用英文逗号分隔。
        * > 当GroupType为ip、port或domain时必须设置。
        * - 当GroupType为ip时，地址列表中填写IP地址。例如：1.2.3.4/32, 1.2.3.0/24
        * - 当GroupType为port时，地址列表中填写端口或端口范围。例如：100/200, 80
        * - 当GroupType为domain时，地址列表中填写域名。例如：demo1.aliyun.com, demo2.aliyun.com
        * @example `1.2.3.4/32, 1.2.3.0/24`
        */ "AddressList"?: string;
        /**
        * 是否自动添加新匹配标签的ECS公网IP到地址簿。
        * - **1**：表示自动添加
        * - **0**：表示不自动添加
        * @example `1`
        */ "AutoAddTagEcs"?: string;
        /**
        * 多个标签间的关系。
        * - **and**：多个标签间为“与”关系，即同时匹配多个标签的ECS公网IP才会被加入地址簿。
        * - **or**：多个标签间为“或”关系，即只要匹配一个标签的ECS公网IP就会被加入地址簿。
        * @example `and`
        */ "TagRelation"?: string;
        "TagList"?: string[];
    }): Promise<{
        "RequestId": string;
        "GroupUuid": string;
    }>;
    /**
    * 调用DescribePolicyPriorUsed接口查询访问控制策略优先级使用范围。
    */ DescribePolicyPriorUsed(query: {
        "RegionId"?: string;
        /**
        * 访问控制策略的流量方向。
        * - **in**：外对内流量访问控制
        * - **out**：内对外流量访问控制
        * @example `in`
        */ "Direction": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
        "Start": number;
        "End": number;
    }>;
    /**
    * 调用ModifyControlPolicyPosition接口修改访问控制策略的优先级。
    */ ModifyControlPolicyPosition(query: {
        "RegionId"?: string;
        /**
        * 访问控制策略的流量方向。
        * - **in**：外对内流量访问控制
        * - **out**：内对外流量访问控制
        * @example `in`
        */ "Direction": string;
        /**
        * 新优先级。修改访问控制策略优先级为新设置的优先级。
        * @example `1`
        */ "NewOrder": string;
        /**
        * 老优先级。待修改访问控制策略的优先级。
        * @example `5`
        */ "OldOrder": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeControlPolicy接口获取访问控制策略列表。
    */ DescribeControlPolicy(query: {
        "RegionId"?: string;
        /**
        * 访问控制策略的流量方向。
        * - **in**：外对内流量访问控制
        * - **out**：内对外流量访问控制
        * @example `in`
        */ "Direction": string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage": string;
        /**
        * 指定列表每页显示数据条数。可设置值最大为50。
        * @example `10`
        */ "PageSize": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 访问控制源地址。
        * 对于不同SourceType的策略，支持以下几种模糊查询的方式：
        * - 当SourceType为net时，Source为源CIDR。例如：1.2.3.4/24
        * - 当SourceType为group时，Source为源地址簿名称。例如：db_group
        * - 当SourceType为location时，Source为源区域，支持中文或英文的查询。例如：北京或beijing
        * > 访问控制源支持模糊查询，不填表示查询所有访问控制源。
        * @example `1.2.3.5`
        */ "Source"?: string;
        /**
        * 访问控制目的地址。
        * 对于不同DestinationType的策略，支持以下几种模糊查询的方式：
        * - 当DestinationType为net时，Destination为目的CIDR。例如：1.2.3.0/24
        * - 当DestinationType为domain时，Destination为目的CIDR。例如：aliyun
        * - 当DestinationType为group时，Destination为目的地址簿名称。例如：db_group
        * - 当DestinationType为location时，Destination为目的区域，支持中文或英文的模糊查询。例如北京或beijing
        * > 访问控制目的支持模糊查询，不填表示查询所有访问控制目的。
        * @example `1.2.3.0`
        */ "Destination"?: string;
        /**
        * 待查询策略的描述信息。
        * > 支持模糊查询，不填表示查询所有策略的描述信息。
        * @example `test`
        */ "Description"?: string;
        /**
        * 策略的安全协议，不填表示查询所有协议。
        * - ANY
        * - TCP
        * - UDP
        * - ICMP
        * @example `TCP`
        */ "Proto"?: string;
        /**
        * 安全策略的流量通过云防火墙的方式。不填表示查询所有流量访问方式的策略。
        * - **accept**：放行
        * - **drop**：拒绝
        * - **log**：观察
        * @example `accept`
        */ "AclAction"?: string;
    }): Promise<{
        "TotalCount": number;
        "RequestId": string;
        "Policys": {
            "DestinationGroupCidrs": any[];
            "SourceGroupCidrs": any[];
            "ApplicationName": string;
            "Description": string;
            "HitTimes": number;
            "DestinationType": string;
            "SourceType": string;
            "Proto": string;
            "Order": number;
            "DestinationGroupType": string;
            "SourceGroupType": string;
            "ApplicationId": string;
            "Direction": string;
            "DestPortType": string;
            "Source": string;
            "DestPortGroup": string;
            "DestPort": string;
            "AclAction": string;
            "DestPortGroupPorts": any[];
            "AclUuid": string;
            "Destination": string;
        }[];
    }>;
    /**
    * 调用AddControlPolicy接口添加访问控制策略。
    */ AddControlPolicy(query: {
        "RegionId"?: string;
        /**
        * 安全策略的流量通过云防火墙的方式。
        * - **accept**：放行
        * - **drop**：拒绝
        * - **log**：观察
        * @example `accept`
        */ "AclAction": string;
        /**
        * 安全策略支持的应用类型。
        * 支持的应用类型有以下几种:：
        * - **ANY**
        * - **HTTP**
        * - **HTTPS**
        * - **MySQL**
        * - **SMTP**
        * - **SMTPS**
        * - **RDP**
        * - **VNC**
        * - **SSH**
        * - **Redis**
        * - **MQTT**
        * - **MongoDB**
        * - **Memcache**
        * - **SSL**
        * > **ANY**表示策略应用在所有类型的应用中。
        * @example `HTTP`
        */ "ApplicationName": string;
        /**
        * 安全访问控制策略的描述信息。
        * @example `test`
        */ "Description": string;
        /**
        * 访问控制目的地址。
        * - 当DestinationType为net时，Destination为目的CIDR。例如：1.2.3.4/24
        * - 当DestinationType为group时，Destination为目的地址簿名称。例如：db_group
        * - 当DestinationType为domain时，Destination为目的域名。例如：*.aliyuncs.com
        * - 当DestinationType为location时，Destination为目的区域（具体区域位置编码见后文）。例如： \["BJ11", "ZB"\]
        * @example `1.2.3.4/24`
        */ "Destination": string;
        /**
        * 目的地址类型。
        * - net：目的网段(CIDR)
        * - group：目的地址簿
        * - domain：目的域名
        * - location：目的区域
        * @example `net`
        */ "DestinationType": string;
        /**
        * 访问控制策略的流量方向。
        * - **in**：外对内流量访问控制
        * - **out**：内对外流量访问控制
        * @example `in`
        */ "Direction": string;
        /**
        * 策略的安全协议。
        * - ANY
        * - TCP
        * - UDP
        * - ICMP
        * @example `TCP`
        */ "Proto": string;
        /**
        * 访问控制源地址。
        * - 当SourceType为net时，Source为源CIDR。例如：1.2.3.0/24
        * - 当SourceType为group时，Source为源地址簿名称。例如：db_group
        * - 当SourceType为location时，Source为源区域（具体区域位置编码见后文）。例如\["BJ11", "ZB"\]
        * @example `1.2.3.0/24`
        */ "Source": string;
        /**
        * 源地址类型。
        * - net：源网段(CIDR)
        * - group：源地址簿
        * - location：源区域
        * @example `net`
        */ "SourceType": string;
        /**
        * 策略优先级。优先级数字从1开始顺序递增，优先级数字越小，优先级越高。
        * > **－1**表示优先级最低。
        * @example `-1`
        */ "NewOrder": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.5`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 控制访问策略中流量访问的目的端口。
        * @example `80`
        */ "DestPort"?: string;
        /**
        * 目的端口类型。
        * - **port**：端口
        * - **group**：端口地址簿
        * @example `port`
        */ "DestPortType"?: string;
        /**
        * 流量访问的目的端口地址簿名称。
        * @example `my_port_group`
        */ "DestPortGroup"?: string;
    }): Promise<{
        "RequestId": string;
        "AclUuid": string;
    }>;
    /**
    * 调用DeleteControlPolicy接口删除访问控制策略。
    */ DeleteControlPolicy(query: {
        "RegionId"?: string;
        /**
        * 访问控制策略唯一ID。
        * @example `00281255-d220-4db1-8f4f-c4df221ad84c`
        */ "AclUuid": string;
        /**
        * 访问控制策略的流量方向。
        * - **in**：外对内流量访问控制
        * - **out**：内对外流量访问控制
        * @example `in`
        */ "Direction": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyControlPolicy接口修改访问控制策略。
    */ ModifyControlPolicy(query: {
        "RegionId"?: string;
        /**
        * 安全策略的流量通过云防火墙的方式。
        * - **accept**：放行
        * - **drop**：拒绝
        * - **log**：观察
        * @example `accept`
        */ "AclAction": string;
        /**
        * 安全策略支持的应用类型。
        * 支持的应用类型有以下几种:：
        * - **ANY**
        * - **HTTP**
        * - **HTTPS**
        * - **MySQL**
        * - **SMTP**
        * - **SMTPS**
        * - **RDP**
        * - **VNC**
        * - **SSH**
        * - **Redis**
        * - **MQTT**
        * - **MongoDB**
        * - **Memcache**
        * - **SSL**
        * > **ANY**表示策略应用在所有类型的应用中。
        * @example `HTTP`
        */ "ApplicationName": string;
        /**
        * 安全访问控制策略的描述信息。
        * @example `test`
        */ "Description": string;
        /**
        * 访问控制目的地址。
        * - 当DestinationType为net时，Destination为目的CIDR。例如：1.2.3.4/24
        * - 当DestinationType为group时，Destination为目的地址簿名称。例如：db_group
        * - 当DestinationType为domain时，Destination为目的域名。例如：*.aliyuncs.com
        * - 当DestinationType为location时，Destination为目的区域（具体区域位置编码见后文）。例如： \["BJ11", "ZB"\]
        * @example `1.2.3.4/24`
        */ "Destination": string;
        /**
        * 目的地址类型。
        * - net：目的网段(CIDR)
        * - group：目的地址簿
        * - domain：目的域名
        * - location：目的区域
        * @example `net`
        */ "DestinationType": string;
        /**
        * 访问控制策略的流量方向。
        * - **in**：外对内流量访问控制
        * - **out**：内对外流量访问控制
        * @example `in`
        */ "Direction": string;
        /**
        * 策略的安全协议。
        * - ANY
        * - TCP
        * - UDP
        * - ICMP
        * @example `TCP`
        */ "Proto": string;
        /**
        * 访问控制源地址。
        * - 当SourceType为net时，Source为源CIDR。例如：1.2.3.0/24
        * - 当SourceType为group时，Source为源地址簿名称。例如：db_group
        * - 当SourceType为location时，Source为源区域（具体区域位置编码见后文）。例如\["BJ11", "ZB"\]
        * @example `1.2.3.0/24`
        */ "Source": string;
        /**
        * 访问控制策略唯一ID。
        * @example `00281255-d220-4db1-8f4f-c4df221ad84c`
        */ "AclUuid": string;
        /**
        * 源地址类型。
        * - net：源网段(CIDR)
        * - group：源地址簿
        * - location：源区域
        * @example `net`
        */ "SourceType": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.5`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 控制访问策略中流量访问的目的端口。
        * @example `80`
        */ "DestPort"?: string;
        /**
        * 目的端口类型。
        * - **port**：端口
        * - **group**：端口地址簿
        * @example `port`
        */ "DestPortType"?: string;
        /**
        * 流量访问的目的端口地址簿名称。
        * @example `my_port_group`
        */ "DestPortGroup"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteAddressBook接口删除访问控制地址簿。
    */ DeleteAddressBook(query: {
        "RegionId"?: string;
        /**
        * 地址簿唯一ID。指定待删除地址簿的ID。
        * @example `0657ab9d-fe8b-4174-b2a6-6baf358ea4ad`
        */ "GroupUuid": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyAddressBook接口修改访问控制的地址簿。
    */ ModifyAddressBook(query: {
        "RegionId"?: string;
        /**
        * 地址簿的描述信息。
        * @example `DEMO地址簿`
        */ "Description": string;
        /**
        * 地址簿名称。
        * @example `demo_address_book`
        */ "GroupName": string;
        /**
        * 地址簿唯一ID。
        * @example `0657ab9d-fe8b-4174-b2a6-6baf358ea4ad`
        */ "GroupUuid": string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 地址列表，多个地址间用英文逗号分隔。
        * > 当GroupType为ip、port或domain时必须设置。
        * - 当GroupType为ip时，地址列表中填写IP地址。例如：1.2.3.4/32, 1.2.3.0/24
        * - 当GroupType为port时，地址列表中填写端口或端口范围。例如：100/200, 80
        * - 当GroupType为domain时，地址列表中填写域名。例如：demo1.aliyun.com, demo2.aliyun.com
        * @example `1.1.1.1/32, 2.2.2.0/24`
        */ "AddressList"?: string;
        /**
        * 是否自动添加新匹配标签的ECS公网IP到地址簿。
        * - **1**：表示自动添加
        * - **0**：表示不自动添加
        * @example `1`
        */ "AutoAddTagEcs"?: string;
        /**
        * 多个标签间的关系。
        * - **and**：多个标签间为“与”关系，即同时匹配多个标签的ECS公网IP才会被加入地址簿。
        * - **or**：多个标签间为“或”关系，即只要匹配一个标签的ECS公网IP就会被加入地址簿。
        * @example `and`
        */ "TagRelation"?: string;
        "TagList"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeAddressBook接口查询访问控制地址簿的详细信息。
    */ DescribeAddressBook(query: {
        "RegionId"?: string;
        /**
        * 访问者源IP地址。
        * @example `1.2.3.4`
        */ "SourceIp"?: string;
        /**
        * 指定请求和接收消息的语言类型。
        * - **zh**：中文
        * - **en**：英文
        * @example `zh`
        */ "Lang"?: string;
        /**
        * 指定返回结果的当前页码。默认值为1。
        * @example `1`
        */ "CurrentPage"?: string;
        /**
        * 指定列表每页显示数据条数。可设置值最大为50。
        * @example `50`
        */ "PageSize"?: string;
        /**
        * 搜索条件，指定待搜索地址簿信息。
        * @example `1.2.3.0`
        */ "Query"?: string;
        /**
        * 待查询地址簿类型, 可选值包括：
        * - **ip**：IP地址簿
        * - **domain**：域名地址簿
        * - **port**：端口地址簿
        * - **tag**：ECS标签地址簿
        * @example `ip`
        */ "GroupType"?: string;
        /**
        * 查询包含指定端口的地址簿, 仅当**GroupType**为**port**时有效。
        * @example `80`
        */ "ContainPort"?: string;
    }): Promise<{
        "TotalCount": number;
        "PageSiNo": number;
        "PageSize": number;
        "RequestId": string;
        "Acls": {
            "Description": string;
            "GroupType": string;
            "AddressList": string[];
            "GroupName": string;
            "AutoAddTagEcs": number;
            "TagValue": string;
            "TagRelation": string;
            "TagList": any[];
            "ReferenceCount": number;
            "TagKey": string;
            "AddressListCount": number;
            "GroupUuid": string;
            "Global": number;
        }[];
    }>;
}
export default CLOUDFW;
