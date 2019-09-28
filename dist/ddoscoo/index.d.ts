interface DDOSCOO {
    /**
    * 调用DeleteLayer7CCRule删除7层CC规则。
    */ DeleteLayer7CCRule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 要删除的CC自定义规则名。
        * @example `testCcRule1`
        */ "Name": string;
        "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用ConfigLayer7CCRule编辑7层CC规则。
    */ ConfigLayer7CCRule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * CC自定义规则名。
        * @example `testCcRule1`
        */ "Name": string;
        /**
        * 规则触发后的操作，取值：
        * - **close**：封禁
        * - **captcha**：人机识别
        * @example `close`
        */ "Act": string;
        /**
        * 访问次数，与**Interval**结和使用。当同一个IP在Interval指定的间隔时间内连续访问Count中指定的访问次数，则触发规则。取值范围为2~2,000。
        * @example `2`
        */ "Count": number;
        /**
        * 间隔时间，与**Count**结和使用。当同一个IP在Interval指定的间隔时间内连续访问Count中指定的访问次数，则触发规则。取值范围为5~10,800。
        * @example `5`
        */ "Interval": number;
        /**
        * URI匹配模式，取值：
        * - **match**：完全匹配。访问请求的URI与指定的Uri完全相同，才计入访问次数。
        * - **prefix**：前缀匹配。访问请求的URI包含指定的Uri，则计入访问次数。
        * @example `match`
        */ "Mode": string;
        /**
        * 若规则触发后动作指定为封禁，设置封禁时间，单位为秒，取值范围为60~86,400。
        * @example `60`
        */ "Ttl": number;
        /**
        * 被防护的URI。
        * @example `/a/b/c`
        */ "Uri": string;
        "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用EnableLayer7CC为指定域名启用7层CC防护。
    */ EnableLayer7CC(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用ConfigLayer7CCTemplate为指定域名设置7层CC防护模式。
    */ ConfigLayer7CCTemplate(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 要应用的CC防护模式，取值：
        * - **default**：正常
        * - **gf_under_attack**：攻击紧急
        * - **gf_sos_verify**：严格
        * - **gf_sos_enhance**：超级严格
        * @example `default`
        */ "Template": string;
        "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeLayer7CCRules查询7层CC规则。
    */ DescribeLayer7CCRules(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 开始索引位置，即从第几个结果开始返回。
        * > 若不传入该参数，则从第0个结果开始返回。
        * @example `0`
        */ "Offset": number;
        /**
        * 分页大小，即每页显示过少个结果。最大值**10**。
        * @example `10`
        */ "PageSize": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要查询的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用ModifyElasticBandWidth修改指定实例的弹性防护带宽。
    */ ModifyElasticBandWidth(query: {
        "RegionId"?: string;
        /**
        * 要操作的实例ID。单次请求只支持修改1个实例的弹性防护带宽，且目标实例必须是正常状态。
        * @example `ddoscoo-cn-XXXXX`
        */ "InstanceId": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 新的弹性带宽值。
        * @example `30`
        */ "ElasticBandwidth": number;
    }): Promise<{}>;
    /**
    * 调用DescribeInstanceStatistics查询指定实例的统计信息。
    */ DescribeInstanceStatistics(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要查询的实例ID数组（JSON字符串）。
        * @example `[{"InstanceId":"ddoscoo-cn-XXXXX","InstanceId":"ddoscoo-cn-YYYYY"}]`
        */ "InstanceIds": string;
    }): Promise<{}>;
    /**
    * 调用DeleteLayer4Rule删除4层转发规则。
    */ DeleteLayer4Rule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 传入要操作的Listeners的JSON数组串，每个Listener的具体结构描述如下：
        * > 目前不支持批量删除，每次只允许删除一个对象。
        * - **InstanceId**，String类型，必选，实例ID。
        * - **Protocol**，String类型，必选，协议类型。
        * - **FrontendPort**，Integer类型，必选，前端使用的端口，取值范围：0-65535。
        * @example `{"InstanceId":"0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc","Protocol":"tcp","FrontendPort":80}`
        */ "Listeners": string;
    }): Promise<{}>;
    /**
    * 调用DescribeDomainAccessMode查询域名的接入模式。
    */ DescribeDomainAccessMode(query: {
        "RegionId"?: string;
        "DomainList": string[];
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
    }): Promise<{}>;
    /**
    * 调用ConfigDomainAccessMode设置域名接入模式。
    */ ConfigDomainAccessMode(query: {
        "RegionId"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 接入模式，取值：
        * - **0**：A记录
        * - **1**：高防
        * - **2**：回源
        * @example `2`
        */ "AccessMode": number;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeElasticBandwidthSpec查询指定实例的弹性带宽规格。
    */ DescribeElasticBandwidthSpec(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要查询的实例ID。单次请求只支持查询1个实例。
        * @example `ddoscoo-cn-XXXXX`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用ConfigLayer7BlackWhiteList为指定域名设置7层防护黑白名单。
    */ ConfigLayer7BlackWhiteList(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 要配置的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
        "BlackList"?: string[];
        "WhiteList"?: string[];
    }): Promise<{}>;
    /**
    * 调用ConfigLayer4RuleAttribute配置4层转发规则属性，包括会话保持和DDoS防护策略。
    */ ConfigLayer4RuleAttribute(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 转发协议，取值：**TCP**、**UDP**。
        * @example `TCP`
        */ "ForwardProtocol": string;
        /**
        * 前端端口。
        * @example `233`
        */ "FrontendPort": number;
        /**
        * 配置信息，传入**TcpConfig**或**UdpConfig**对象JSON串。
        * **TcpConfig**的具体结构描述见如下：
        * - **PersistenceTimeout**，Integer类型，必选，会话保持的超时时间，单位为秒。默认为**0**，表示关闭。
        * - **Synproxy**，String类型，必选，DDoS防护策略的虚假源，取值：**off**、**on**。
        * - **NodataConn**，String类型，必选，DDoS防护策略的空连接，取值：**off**、**on**。
        * - **Sla**，Struct类型，必选，目的限制配置。具体结构描述见**Sla**。
        * - **Slimit**，Struct类型，必选，源限制配置。具体结构描述见**Slimit**。
        * - **PayloadLen**，Struct类型，必选，包过滤配置。具体结构描述见**PayloadLen**。
        * **UdpConfig**的具体结构描述如下：
        * - **PersistenceTimeout**，Integer类型，必选，会话保持的超时时间，单位为秒。默认为**0**，表示关闭。
        * - **Synproxy**，String类型，必选，DDoS防护策略的虚假源，取值：**off**、**on**。
        * - **NodataConn**，String类型，必选，DDoS防护策略的空连接，取值：**off**、**on**。
        * - **Sla**，Struct类型，必选，目的限制配置。具体结构描述见**Sla**。
        * - **Slimit**，Struct类型，必选，源限制配置。具体结构描述见**Slimit**。
        * - **PayloadLen**，Struct类型，必选，包过滤配置。具体结构描述见**PayloadLen**。
        * **Sla**的具体结构描述如下：
        * - **Cps**，Integer类型，必选，DDoS防护策略/目的新建连接限速，取值范围：100~100,000。
        * - **Maxconn**，Integer类型，必选，DDoS防护策略/目的并发连接限速，取值范围：1,000~1,000,000。
        * - **CpsEnable**，Integer类型，必选，是否开启Cps，取值：**0**（禁用cps）、**1**（默认，启用cps）。
        * - **MaxconnEnable**，Integer类型，必选，是否开启Maxconnection，取值：**0**（禁用maxconn）、**1**（默认，启用maxconn）。
        * **Slimit**的具体结构描述如下：
        * - **Cps**，Integer类型，必选，DDoS防护策略/源新建连接限速，取值范围：100~100,000。
        * - **Maxconn**，Integer类型，必选，DDoS防护策略/源并发连接限速，取值范围：1,000~1,000,000。
        * - **CpsEnable**，Integer类型，必选，是否开启Cps，取值：**0**（禁用cps）、**1**（默认，启用cps）。
        * - **MaxconnEnable**，Integer类型，必选，是否开启Maxconnection，取值：**0**（禁用maxconn）、**1**（默认，启用maxconn）。
        * - **CpsMode**，Integer类型，必选，源新建连接限速开关，取值：**1**（关闭）、**2**（自动）。
        * **PayloadLen**的具体结构描述如下：
        * - **Min**，Integer类型，必选，DDoS防护策略/包长度过滤，包长度的最小值，取值范围为0~6,000。
        * - **Max**，Integer类型，必选，DDoS防护策略/包长度过滤，包长度的最大值，取值范围为0~6,000。
        * @example `{"Slimit":{"CpsEnable":1,"MaxconnEnable":1,"Cps":1,"Maxconn":1},"Sla":{"CpsEnable":1,"MaxconnEnable":1,"Cps":100,"Maxconn":1000},"PayloadLen":{"Min":0,"Max":6000}}`
        */ "Config": string;
        "SourceIp"?: string;
        /**
        * 要操作的实例ID。
        * @example `ddoscoo-cn-XXXXX`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用EnableLayer7CCRule为指定域名启用7层CC规则。
    */ EnableLayer7CCRule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用AddLayer7CCRule为指定域名添加7层CC规则。
    */ AddLayer7CCRule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * CC自定义规则名。
        * @example `testCcRule1`
        */ "Name": string;
        /**
        * 规则触发后的操作，取值：
        * - **close**：封禁
        * - **captcha**：人机识别
        * @example `close`
        */ "Act": string;
        /**
        * 访问次数，与**Interval**结和使用。当同一个IP在Interval指定的间隔时间内连续访问Count中指定的访问次数，则触发规则。取值范围为2~2,000。
        * @example `2`
        */ "Count": number;
        /**
        * 间隔时间，与**Count**结和使用。当同一个IP在Interval指定的间隔时间内连续访问Count中指定的访问次数，则触发规则。取值范围为5~10,800。
        * @example `5`
        */ "Interval": number;
        /**
        * URI匹配模式，取值：
        * - **match**：完全匹配。访问请求的URI与指定的Uri完全相同，才计入访问次数。
        * - **prefix**：前缀匹配。访问请求的URI包含指定的Uri，则计入访问次数。
        * @example `match`
        */ "Mode": string;
        /**
        * 若规则触发后动作指定为封禁，设置封禁时间，单位为秒，取值范围为60~86,400。
        * @example `60`
        */ "Ttl": number;
        /**
        * 被防护的URI。
        * @example `/a/b/c`
        */ "Uri": string;
        "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用ConfigLayer4Rule编辑4层转发规则。
    */ ConfigLayer4Rule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 传入要操作的Listeners的JSON数组串，每个Listener的具体结构描述如下。
        * - **InstanceId**，String类型，必选，实例ID。
        * - **Protocol**，String类型，必选，协议类型。
        * - **FrontendPort**，Integer类型，必选，前端使用的端口，取值范围：0-65535。
        * - **BackendPort**，Integer类型，必选，后端使用的端口，取值范围：0-65535。
        * - **RealServers**，Json数组类型，必选，源站IP地址。
        * @example `[{"InstanceId":"xxxxxx-xxxxxx-xxxxxx-xxxxxxx","Protocol":"tcp","FrontendPort":80,"BackendPort":5,"RealServers":"1.1.1.1","2.2.2.2"}]`
        */ "Listeners": string;
    }): Promise<{}>;
    /**
    * 调用CreateLayer7Rule创建7层转发规则。
    */ CreateLayer7Rule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 源站类型，取值：
        * - **0**：IP
        * - **1**：域名
        * @example `0`
        */ "RsType": number;
        /**
        * 传入7层规则Layer7Rule数组JSON串。具体结构描述如下：
        * - **ProxyRules**，数组类型，必选，规则对象数组，包含以下元素：
        *     - **ProxyPort**，Integer类型，必选，协议端口，取值：**80**、**443**。
        *     - **RealServers**，[]String类型，必选，用户源站。例如，1.1.1.1:443。
        * - **ProxyType**，String类型，必选，协议类型，取值：**http**、**https**、**websocket**、**websockets**。
        * @example `[{"ProxyRules":[{"ProxyPort":443,"RealServers":["1.1.1.1:443"]}],"ProxyType":"https"},{"ProxyRules":[{"ProxyPort":80,"RealServers":["1.1.1.1:80"]}],"ProxyType":"http"}]`
        */ "Rules": string;
        "SourceIp"?: string;
        /**
        * 要添加的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
        "InstanceIds"?: string[];
    }): Promise<{}>;
    /**
    * 调用DeleteAsyncTask删除指定的异步任务。
    */ DeleteAsyncTask(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        "SourceIp"?: string;
        "Lang"?: string;
        /**
        * 要删除的任务ID。
        * @example `123`
        */ "TaskId": number;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用ConfigHealthCheck配置四层或七层健康检查。
    */ ConfigHealthCheck(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 转发协议，取值：
        * - **TCP**（四层）
        * - **UDP**（四层）
        * -  **HTTP**（七层）
        * @example `tcp`
        */ "ForwardProtocol": string;
        /**
        * 前端端口。
        * @example `233`
        */ "FrontendPort": number;
        /**
        * 传入HealthCheck对象JSON串，具体结构描述如下：
        * - **Type**，String类型，必选，协议类型。取值：**TCP**（四层）、**HTTP**（七层）。
        * - **Domain**，String类型，可选，健康检查/七层健康检查/域名。
        * - **Uri**，String类型，可选，健康检查/七层健康检查/检查路径。
        * - **Timeout**，Integer类型，可选，健康检查/四层健康检查/响应超时时间。
        * - **Port**，Integer类型，可选，健康检查/四层健康检查/检查端口。
        * - **Interval**，Integer类型，可选，健康检查/四层健康检查/检查间隔。
        * - **Up**，Integer类型，可选，健康检查/四层健康检查/健康阈值。
        * - **Down**，Integer类型，可选，健康检查/四层健康检查/不健康阈值。
        * @example `{"Type":"tcp","Timeout":10,"Port":80,"Interval":10,"Up":10,"Down":40}"}`
        */ "HealthCheck": string;
        "SourceIp"?: string;
        /**
        * 要操作的实例ID。
        * @example `ddoscoo-cn-XXXXXX`
        */ "InstanceId": string;
    }): Promise<{}>;
    /**
    * 调用DescribleLayer7InstanceRelations查询七层防护实例和EIP的对应关系。
    */ DescribleLayer7InstanceRelations(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        "DomainList": string[];
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeOpEntities查询操作日志。
    */ DescribeOpEntities(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 结束时间时间戳，单位：毫秒。
        * @example `1536715558000`
        */ "EndTime": number;
        /**
        * 页号，即从第几页开始显示。
        * @example `1`
        */ "PageNo": number;
        /**
        * 分页大小，即每页显示多少条结果。最大值50。
        * @example `10`
        */ "PageSize": number;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 开始时间时间戳，单位：毫秒。
        * @example `1534123558000`
        */ "StartTime": number;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
        /**
        * @example `1`
        */ "EntityType"?: number;
        /**
        * @example `xx`
        */ "EntityObject"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeBackSourceCidr查询回源网段。
    */ DescribeBackSourceCidr(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
        /**
        * 要查询的防护线路。
        * @example `coop-line-001`
        */ "Line"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateLayer4Rule创建4层转发规则。
    */ CreateLayer4Rule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 传入要操作的Listeners的JSON数组串，每个Listener的具体结构描述如下：
        * - **InstanceId**，String类型，必选，实例ID。
        * - **Protocol**，String类型，必选，协议类型。
        * - **FrontendPort**，Integer类型，必选，前端使用的端口，取值范围：0-65535。
        * - **BackendPort**，Integer类型，必选，后端使用的端口，取值范围：0-65535。
        * - **RealServers**，Json数组类型，必选，源站IP地址。
        * @example `[{"InstanceId":"xxxxxx-xxxxxx-xxxxxx-xxxxxxx","Protocol":"tcp","FrontendPort":80,"BackendPort":5,"RealServers":"1.1.1.1","2.2.2.2"}]`
        */ "Listeners": string;
    }): Promise<{}>;
    /**
    * 调用ConfigLayer7Cert为指定域名配置7层证书。
    */ ConfigLayer7Cert(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `xx`
        */ "ResourceGroupId"?: string;
        /**
        * 证书ID。
        * > 若传入此参数，则无需传入**CertName**、**Cert**、**Key**。
        * @example `1234`
        */ "CertId"?: number;
        /**
        * 证书名称。
        * > 若传入此参数，则必须同时传入**Cert**和**Key**。若传入**CertName**、**Cert**、**Key**组合，则无需传入**CertId**。
        * @example `testCertName`
        */ "CertName"?: string;
        /**
        * 证书公钥。
        * > 若传入此参数，则必须同时传入**CertName**和**Key**。若传入**CertName**、**Cert**、**Key**组合，则无需传入**CertId**。
        * @example `xx`
        */ "Cert"?: string;
        /**
        * 证书私钥。
        * > 若传入此参数，则必须同时传入**CertName**和**Cert**。若传入**CertName**、**Cert**、**Key**组合，则无需传入**CertId**。
        * @example `xx`
        */ "Key"?: string;
    }): Promise<{}>;
    /**
    * 调用DisableLayer7CC为指定域名禁用7层CC防护。
    */ DisableLayer7CC(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeInstanceSpecs查询指定实例的规格。
    */ DescribeInstanceSpecs(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要查询的实例ID数组（JSON字符串）。
        * @example `["ddoscoo-cn-XXXXX"]`
        */ "InstanceIds": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLayer4RuleAttributes查询四层转发属性，包括会话保持和DDoS防护策略。
    */ DescribeLayer4RuleAttributes(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 传入要查询的Listener数组JSON串，每个Listener的具体结构描述如下：
        * - **InstanceId**，String类型，必选，实例ID。
        * - **Protocol**，String类型，必选，协议类型。
        * - **FrontendPort**，Integer类型，必选，前端使用的端口，取值范围：0-65535。
        * - **BackendPort**，Integer类型，可选，后端使用的端口，取值范围：0-65535。
        * - **RealServers**，Json数组类型，可选，源站IP地址。
        * - **IsAutoCreate**，Boolean类型，可选，是否自动创建。如果是，则不允许删除和修改。
        * @example `[{"InstanceId":"ddoscoo-cn-XXXXX","Protocol":"tcp","FrontendPort":80}]`
        */ "Listeners": string;
    }): Promise<{}>;
    /**
    * 调用DescribeLayer4Rules查询指定实例的四层转发规则。
    */ DescribeLayer4Rules(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 开始索引位置，即从第几个结果开始返回。
        * > 如果不传入该参数，则从第0个结果开始返回。
        * @example `0`
        */ "Offset": number;
        /**
        * 分页大小，即每页显示多少个结果。最大值**50**。
        * @example `50`
        */ "PageSize": string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要查询的实例ID。
        * @example `ddoscoo-cn-XXXXX`
        */ "InstanceId": string;
        /**
        * 转发协议，取值：**TCP**。
        * @example `tcp`
        */ "ForwardProtocol"?: string;
        /**
        * 前端端口。
        * @example `233`
        */ "FrontendPort"?: number;
    }): Promise<{}>;
    /**
    * 调用DescribeInstances分页查询新BGP高防实例信息列表。
    */ DescribeInstances(query: {
        /**
        * 地域ID。
        * @example `xx`
        */ "RegionId"?: string;
        /**
        * 分页大小，即每页显示多少条结果。最大值是**50**。
        * @example `10`
        */ "PageSize": string;
        /**
        * 源IP。
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 分页页号，即从几页开始显示。最小值是**1**。
        * @example `1`
        */ "PageNo": string;
        /**
        * 资源组ID。
        * @example `xx`
        */ "ResourceGroupId"?: string;
        /**
        * 通过实例Id查询实例信息，传入要查询的实例Id数组（JSON字符串）。支持精确匹配。例如，\["ddoscoo-cn-XXXX1", "ddoscoo-cn-XXXX2"]。
        * >  若传入该参数，则无需传入**Ip**和**Remark**。
        * @example `["ddoscoo-cn-XXXXX"]`
        */ "InstanceIds"?: string;
        /**
        * 通过实例Ip查询实例信息，传入要查询的实例Ip地址。支持精确匹配查询。
        * > 若传入该参数，则无需传入**InstanceIds**和**Remark**。
        * @example `1.1.1.1`
        */ "Ip"?: string;
        /**
        * 通过实例备注查询实例信息，传入要查询的实例的备注信息。支持模糊查询。
        * > 若传入该参数，则无需传入**InstanceIds**和**Ip**。
        * @example ` testRemark`
        */ "Remark"?: string;
        "Edition"?: number;
        "Tag"?: string[];
    }): Promise<{}>;
    /**
    * 调用DisableLayer7CCRule为指定域名禁用7层CC规则。
    */ DisableLayer7CCRule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用DescribeHealthCheckStatusList查询健康检查状态。
    */ DescribeHealthCheckStatusList(query: {
        "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 要查询的转发规则Listeners数组（JSON字符串），每个Listener的具体结构描述如下：
        * - **InstanceId**，String类型，必选，实例ID。
        * - **Protocol**，String类型，必选，协议类型。
        * - **FrontendPort**，Integer类型，必选，前端使用的端口，取值范围：0-65535。
        * - **BackendPort**，Integer类型，可选，后端使用的端口，取值范围：0-65535。
        * - **RealServers**，Json数组类型，可选，源站IP地址。
        * - **IsAutoCreate**，Boolean类型，可选，是否自动创建。如果是，则不允许删除和修改。
        * @example `[{"InstanceId":"ddoscoo-cn-XXXXX","Protocol":"tcp","FrontendPort":80}]`
        */ "Listeners": string;
    }): Promise<{}>;
    /**
    * 调用DescribleCertList查询所有证书列表。
    */ DescribleCertList(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * @example `1.1.1.1`
        */ "SourceIp"?: string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
    }): Promise<{}>;
    /**
    * 调用ConfigLayer7Rule编辑7层转发规则。
    */ ConfigLayer7Rule(query: {
        /**
        * @example `cn`
        */ "RegionId"?: string;
        /**
        * 源站类型，取值：
        * - **0**：IP
        * - **1**：域名
        * @example `0`
        */ "RsType": number;
        "RealServers": string[];
        "SourceIp"?: string;
        /**
        * 要操作的域名。
        * @example `www.aliyun.com`
        */ "Domain": string;
        /**
        * 资源组ID。
        * @example `test`
        */ "ResourceGroupId"?: string;
        /**
        * 协议数组。具体结构描述如下：
        * - **ProxyType**，String类型，必选，协议类型，取值：**http**、**https**、**websocket**、**websockets**。
        * - **ProxyPorts**，Integer类型，必选，协议端口。
        * @example `[{"ProxyPorts":[80,8080],"ProxyType":"http"},{"ProxyPorts":[443],"ProxyType":"https"}]rts\":[443],\"ProxyType\":\"https\"}]`
        */ "ProxyTypeList"?: string;
        "ProxyTypes"?: string[];
        "InstanceIds"?: string[];
    }): Promise<{}>;
    DescribeHealthCheckList(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Listeners": string;
    }): Promise<{}>;
    DescribeIpTraffic(query: {
        "RegionId"?: string;
        "Interval": number;
        "EndTime": number;
        "Eip": string;
        "SourceIp"?: string;
        "StartTime": number;
        "ResourceGroupId"?: string;
        "Port"?: number;
        "QueryProtocol"?: string;
    }): Promise<{}>;
    DescribeDDoSEvents(query: {
        "RegionId"?: string;
        "EndTime": number;
        "Eip": string;
        "Offset": number;
        "PageSize": string;
        "SourceIp"?: string;
        "StartTime": number;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    DescribeDDoSTraffic(query: {
        "RegionId"?: string;
        "Interval": number;
        "EndTime": number;
        "Eip": string;
        "SourceIp"?: string;
        "StartTime": number;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    DescribeDomainAttackEvents(query: {
        "RegionId"?: string;
        "EndTime": number;
        "Domain": string;
        "Offset": number;
        "PageSize": string;
        "SourceIp"?: string;
        "StartTime": number;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    DescribeDomainQpsWithCache(query: {
        "RegionId"?: string;
        "EndTime": number;
        "SourceIp"?: string;
        "StartTime": number;
        "ResourceGroupId"?: string;
        "Domain"?: string;
    }): Promise<{}>;
    ListLayer7CustomPorts(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "SourceIp"?: string;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    ListValueAdded(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    CreateAsyncTask(query: {
        "RegionId"?: string;
        "TaskParams": string;
        "SourceIp"?: string;
        "Lang"?: string;
        "TaskType": number;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    DeleteLayer7Rule(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "Domain": string;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    DescribeDefenseCountStatistics(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    DescribeDomainQps(query: {
        "RegionId"?: string;
        "StartTime": number;
        "EndTime": number;
        "SourceIp"?: string;
        "Domain": string;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    DescribeDomains(query: {
        "RegionId"?: string;
        "PageSize": string;
        "SourceIp"?: string;
        "Offset": number;
        "ResourceGroupId"?: string;
        "Domain"?: string;
        "QueryDomainPattern"?: string;
    }): Promise<{}>;
    DescribeInstanceDetails(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "InstanceIds": string;
    }): Promise<{}>;
    DescribeSimpleDomains(query: {
        "RegionId"?: string;
        "Lang"?: string;
        "SourceIp"?: string;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    ListAsyncTask(query: {
        "RegionId"?: string;
        "PageSize": number;
        "SourceIp"?: string;
        "Lang"?: string;
        "PageNo": number;
        "ResourceGroupId"?: string;
    }): Promise<{}>;
    ModifyInstanceRemark(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "InstanceId"?: string;
        "Remark"?: string;
    }): Promise<{}>;
    ReleaseInstance(query: {
        "RegionId"?: string;
        "SourceIp"?: string;
        "InstanceId"?: string;
    }): Promise<{}>;
    ReleaseValueAdded(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "SourceIp"?: string;
    }): Promise<{}>;
}
export default DDOSCOO;
