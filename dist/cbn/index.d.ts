interface CBN {
    /**
    * 调用DescribeCenPrivateZoneRoutes查询PrivateZone。
    */ DescribeCenPrivateZoneRoutes(query: {
        "RegionId"?: string;
        /**
        * 云企业网ID。
        * @example `cen-7qthudw0ll6jmc****	`
        */ "CenId": string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `10`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 访问所在地。
        * 访问所在地是指通过CEN访问PrivateZone服务的源地域。
        * @example `cn-hangzhou`
        */ "AccessRegionId"?: string;
        /**
        * 服务所在地。
        * 服务所在地是指通过CEN访问PrivateZone服务的目的地域。
        * @example `cn-hangzhou`
        */ "HostRegionId"?: string;
    }): Promise<{
        "PrivateZoneInfos": {
            "PrivateZoneInfo": {
                "Status": string;
                "HostVpcId": string;
                "AccessRegionId": string;
                "HostRegionId": string;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "PrivateZoneDnsServers": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeFlowlogs接口查询流日志。
    */ DescribeFlowlogs(query: {
        /**
        * 流日志的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 流日志名称。
        * @example `myFlowlog`
        */ "FlowLogName"?: string;
        /**
        * 流日志ID。
        * @example `flowlog-m5evbtbpt****`
        */ "FlowLogId"?: string;
        /**
        * 流日志描述。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `This is my Flowlog.`
        */ "Description"?: string;
        /**
        * 云企业网实例ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId"?: string;
        /**
        * 存储捕获流量的Project。
        * @example `Project`
        */ "ProjectName"?: string;
        /**
        * 存储捕获流量的LogStore。
        * @example `LogStore`
        */ "LogStoreName"?: string;
        /**
        * 流日志的状态，取值：
        * - **Active**：已启动。
        * - **InActive**：未启动。
        * @example `Active`
        */ "Status"?: string;
        /**
        * 当前页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页包含的条目数。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用WithdrawPublishedRouteEntries解除VPC或VBR网络实例中已发布到CEN的路由。
    */ WithdrawPublishedRouteEntries(query: {
        "RegionId"?: string;
        /**
        * 云企业网的ID。
        * @example `cen-sxjfjkjfkjfiein****`
        */ "CenId": string;
        /**
        * 加载的网络实例ID（VPC或VBR ID）。
        * @example `vpc-rj9gt5nll27onu7****`
        */ "ChildInstanceId": string;
        /**
        * 网络实例类型，取值：
        * - **VPC**：专有网络。
        * - **VBR**：边界路由器。
        * @example `VPC`
        */ "ChildInstanceType": string;
        /**
        * 加载的网络实例的地域ID。
        * @example `cn-hangzhou`
        */ "ChildInstanceRegionId": string;
        /**
        * 网络实例的路由表ID。
        * @example `vtb-bp174d1gje79u1g4t****`
        */ "ChildInstanceRouteTableId": string;
        /**
        * 要解除的路由的目标网段。
        * @example `172.16.xx.xx/24`
        */ "DestinationCidrBlock": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RoutePrivateZoneInCenToVpc设置PrivateZone。
    */ RoutePrivateZoneInCenToVpc(query: {
        "RegionId"?: string;
        /**
        * 云企业网ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 访问所在地。
        * 访问所在地是指通过CEN访问PrivateZone服务的源地域。
        * @example `cn-hangzhou`
        */ "AccessRegionId": string;
        /**
        * 服务所在地。
        * 服务所在地是指通过CEN访问PrivateZone服务的目的地域。
        * @example `cn-hangzhou`
        */ "HostRegionId": string;
        /**
        * 服务所在地的VPC。
        * @example `cn-hangzhou`
        */ "HostVpcId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateCenRouteMap接口创建路由策略。
    */ CreateCenRouteMap(query: {
        "RegionId"?: string;
        /**
        * 云企业网的ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 云企业网所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "CenRegionId": string;
        /**
        * 路由策略应用的方向，取值：
        * - **RegionIn**：路由传入云企业网地域网关的方向。
        *  例如路由从本地域网络实例发布到本地域网关，或其他地域的路由发布到本地域网关。
        * - **RegionOut**：路由传出云企业网地域网关的方向。
        *  例如路由从本地域网关发布到本地域下其他网络实例，或发布到其他地域网关。
        * @example `RegionIn`
        */ "TransmitDirection": string;
        /**
        * 路由策略的优先级，取值：**1**~**100**。优先级数字越小，优先级越高。
        * > 同地域同策略应用方向的路由策略优先级唯一。执行路由策略时，系统从优先级数字最小的路由策略开始匹配条件语句，因此在指定路由策略优先级时，要注意符合期望的匹配顺序。
        * @example `3`
        */ "Priority": number;
        /**
        * 所有匹配条件通过后的策略行为，取值：
        * - **Permit**：允许通过被匹配的路由。
        * - **Deny**：拒绝通过被匹配的路由。
        * @example `Permit`
        */ "MapResult": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 路由策略的描述。
        * @example `abc`
        */ "Description"?: string;
        /**
        * 关联的下一条路由策略的优先级，取值：**1**~**100**。
        * - 当未配置关联优先级时，路由策略无关联的下一条路由策略。
        * - 当关联优先级取值为1时，路由策略关联当前路由策略的下一条路由策略。
        * - 当关联优先级取值非1时，路由策略关联优先级必须大于当前路由策略的优先级。
        * 仅**MapResult**取值为**Permit**时，匹配通过的路由才会继续匹配关联的下一条路由策略。
        * @example `20`
        */ "NextPriority"?: number;
        "SourceInstanceIds"?: string[];
        "DestinationInstanceIds"?: string[];
        "SourceRouteTableIds"?: string[];
        "DestinationRouteTableIds"?: string[];
        "SourceRegionIds"?: string[];
        "SourceChildInstanceTypes"?: string[];
        "DestinationChildInstanceTypes"?: string[];
        "DestinationCidrBlocks"?: string[];
        /**
        * 匹配前缀模式，为match语句，取值：
        * - **Include**：模糊匹配。匹配条件中的路由前缀包含被匹配路由的路由前缀即判定为匹配成功。
        *  例如：定义1.1.0.0/16的策略可以模糊匹配到1.1.1.0/24的路由。
        * - **Complete**：精确匹配。匹配条件中的路由前缀必须与被匹配路由的路由前缀一致，才判定为匹配成功。
        *  例如：定义1.1.0.0/16的策略仅可以精确匹配到1.1.0.0/16的路由。
        * @example `Include `
        */ "CidrMatchMode"?: string;
        "RouteTypes"?: string[];
        "MatchAsns"?: number[];
        /**
        * 匹配as-path模式，为match语句，取值：
        * - **Include**：模糊匹配，匹配条件中的AS Path与被匹配路由的AS Path有重叠即判定为匹配成功。
        * - **Complete**：精确匹配，匹配条件中的AS Path必须与被匹配路由的AS Path一致，才判定为匹配成功。
        * @example `Include`
        */ "AsPathMatchMode"?: string;
        "MatchCommunitySet"?: string[];
        /**
        * 匹配community模式，为match语句，取值：
        * - **Include**：模糊匹配，匹配条件中的Community与被匹配路由的Community有重叠即判定为匹配成功。
        * - **Complete**：精确匹配，匹配条件中的Community必须与被匹配路由的Community一致，才判定为匹配成功。
        * @example `Include`
        */ "CommunityMatchMode"?: string;
        "OperateCommunitySet"?: string[];
        /**
        * 操作community的模式，为action语句，取值：
        * - **Additive**：添加。
        * - **Replace**：替换。
        * @example `Additive`
        */ "CommunityOperateMode"?: string;
        /**
        * 修改路由的优先级，为action语句，取值：**1**~**100**，路由默认优先级为**50**，取值越小优先级越高。
        * @example `22`
        */ "Preference"?: number;
        /**
        * 路由传递源实例ID列表排除匹配模式，取值：
        * - **false**（默认）：路由传递源实例ID在`SourceInstanceIds`中时，匹配通过。
        * - **true**：路由传递源实例ID不在`SourceInstanceIds`中时，匹配通过。
        * @example `false`
        */ "SourceInstanceIdsReverseMatch"?: boolean;
        /**
        * 路由传递目的实例ID列表排除匹配模式，取值：
        * - **false**（默认）：路由传递目的实例ID在`DestinationInstanceIds`中时，匹配通过。
        * - **true**：路由传递目的实例ID不在`DestinationInstanceIds`中时，匹配通过。
        * @example `false`
        */ "DestinationInstanceIdsReverseMatch"?: boolean;
    }): Promise<{
        "RequestId": string;
        "RouteMapId": string;
    }>;
    /**
    * 调用DisableCenVbrHealthCheck关闭指定边界路由器（VBR）的健康检查。
    */ DisableCenVbrHealthCheck(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例的ID。
        * @example `cen-sjfoejfghhjgghjghkg****`
        */ "CenId": string;
        /**
        * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口查询地域ID。
        * @example `cn-shenzhen`
        */ "VbrInstanceRegionId": string;
        /**
        * VBR的ID。
        * @example `vbr-wz95o9aylj181n5****`
        */ "VbrInstanceId": string;
        "OwnerId"?: number;
        /**
        * VBR所属账户的UID。
        * @example `12345656677888`
        */ "VbrInstanceOwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteCenRouteMap接口删除路由策略。
    */ DeleteCenRouteMap(query: {
        "RegionId"?: string;
        /**
        * 云企业网的ID。
        * @example `cen-7qthudw0ll6jm****`
        */ "CenId": string;
        /**
        * 云企业网所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "CenRegionId": string;
        /**
        * 路由策略的ID。
        * @example `cenrmap-abcdedfghij****`
        */ "RouteMapId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCenVbrHealthCheck查询指定地域内物理专线健康检查的状态。
    */ DescribeCenVbrHealthCheck(query: {
        "RegionId"?: string;
        /**
        * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口查询地域ID。
        * @example `cn-hangzhou`
        */ "VbrInstanceRegionId": string;
        "OwnerId"?: number;
        /**
        * 云企业网实例的ID。
        * @example `cen-kojok19x3j0q****`
        */ "CenId"?: string;
        /**
        * VBR的ID。
        * @example `vbr-wz95o9aylj181****`
        */ "VbrInstanceId"?: string;
        /**
        * VBR所属账户的UID。
        * @example `123465253556777`
        */ "VbrInstanceOwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `2`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `2`
        */ "PageSize"?: number;
    }): Promise<{
        "HealthChecks": {
            "HealthCheck": {
                "CenId": string;
                "VbrInstanceId": string;
                "HealthCheckSourceIp": string;
                "HealthCheckTargetIp": string;
                "Delay": string;
                "Packetloss": string;
            };
        };
        "PageNumber": string;
        "TotalCount": string;
        "PageSize": string;
        "RequestId": string;
    }>;
    /**
    * 调用EnableCenVbrHealthCheck开启边界路由器（VBR）的健康检查，确保及时发现出现故障的物理专线。
    */ EnableCenVbrHealthCheck(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例的ID。
        * @example `cen-hahhfskfkseig****`
        */ "CenId": string;
        /**
        * VBR所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口查询地域ID。
        * @example `cn-shenzhen`
        */ "VbrInstanceRegionId": string;
        /**
        * VBR的ID。
        * @example `vbr-wz95o9aylj181n5mzk****`
        */ "VbrInstanceId": string;
        /**
        * 健康检查的源IP地址。
        * @example `192.168.1.xx`
        */ "HealthCheckSourceIp": string;
        /**
        * 健康检查的目的IP地址。
        * @example `10.0.0.xx`
        */ "HealthCheckTargetIp": string;
        "OwnerId"?: number;
        /**
        * VBR所属账户的UID。
        * @example `1233233323445689999`
        */ "VbrInstanceOwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "CenId": string;
        "VbrId": string;
        "RegionId": string;
        "SourceIp": string;
        "TargetIp": string;
        "PacketNum": string;
        "Status": string;
    }>;
    /**
    * 调用ActiveFlowLog接口启动流日志，启动后开始捕获指定资源的流量。
    */ ActiveFlowLog(query: {
        /**
        * 流日志的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 流日志ID。
        * @example `flowlog-m5evbtbpt****`
        */ "FlowLogId": string;
        /**
        * 云企业网实例ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * @example `111`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UnroutePrivateZoneInCenToVpc删除PrivateZone。
    */ UnroutePrivateZoneInCenToVpc(query: {
        "RegionId"?: string;
        /**
        * 云企业网ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 访问所在地。
        * 访问所在地是指通过CEN访问PrivateZone服务的源地域。
        * @example `cn-hangzhou`
        */ "AccessRegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyFlowLogAttribute接口编辑流日志的名称和描述。
    */ ModifyFlowLogAttribute(query: {
        /**
        * 流日志的所属地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 流日志ID。
        * @example `flowlog-m5evbtbpt****`
        */ "FlowLogId": string;
        /**
        * 云企业网实例ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b	`
        */ "ClientToken"?: string;
        /**
        * 流日志名称。长度为2~128个字符，必须以字母或中文开头，可包含数字、点号（.）、下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `myFlowlog`
        */ "FlowLogName"?: string;
        /**
        * 流日志描述。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `This is my Flowlog.`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateFlowlog接口创建流日志。
    */ CreateFlowlog(query: {
        /**
        * 流日志的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 云企业网实例ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 存储捕获到的流量的Project。
        * @example `FlowLogProject`
        */ "ProjectName": string;
        /**
        * 存储捕获到的流量的LogStore。
        * @example `FlowLogStore`
        */ "LogStoreName": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * 流日志名称。长度为2~128个字符，必须以字母或中文开头，可包含数字、点号（.）、下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `myFlowlog`
        */ "FlowLogName"?: string;
        /**
        * 流日志的描述。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `This is my Flowlog.`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
        "FlowLogId": string;
    }>;
    /**
    * 调用DeactiveFlowLog接口停止流日志，停止后不再捕获指定资源的流量。
    */ DeactiveFlowLog(query: {
        /**
        * 流日志的所属地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 流日志ID。
        * @example `flowlog-m5evbtbpt****`
        */ "FlowLogId": string;
        /**
        * 云企业网实例ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * @example `111`
        */ "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCenRouteMaps接口查询路由策略。
    */ DescribeCenRouteMaps(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 路由策略的ID。
        * @example `cenrmap-abcdedfghij****`
        */ "RouteMapId"?: string;
        /**
        * 云企业网所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-beijing`
        */ "CenRegionId"?: string;
        /**
        * 路由策略应用的方向，取值：
        * - **RegionIn**：路由传入云企业网地域网关的方向。
        *  例如路由从本地域网络实例发布到本地域网关，或其他地域的路由发布到本地域网关。
        * - **RegionOut**：路由传出云企业网地域网关的方向。
        *  例如路由从本地域网关发布到本地域下其他网络实例，或发布到其他地域网关。
        * @example `RegionIn`
        */ "TransmitDirection"?: string;
    }): Promise<{
        "RouteMaps": {
            "RouteMap": {
                "Status": string;
                "CenRegionId": string;
                "RouteMapId": string;
                "MapResult": string;
                "TransmitDirection": string;
                "CenId": string;
                "Priority": number;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
    }>;
    /**
    * 调用CreateCenBandwidthPackage创建带宽包。
    */ CreateCenBandwidthPackage(query: {
        "RegionId"?: string;
        /**
        * 带宽包的带宽峰值，单位为Mbps，最小值为**2**。
        * @example `2`
        */ "Bandwidth": number;
        /**
        * 网络实例所属的区域，取值：
        * **China | North-America | Asia-Pacific | Europe | Australia**。
        * @example `China `
        */ "GeographicRegionAId": string;
        /**
        * 网络实例所属的区域，取值：
        * **China | North-America | Asia-Pacific | Europe | Australia**。
        * @example `China `
        */ "GeographicRegionBId": string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `SSJFLAFHHFHFF-SJSJJFBWHHE-SHHFJJDBD`
        */ "ClientToken"?: string;
        /**
        * 带宽包的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字、点号（.）、下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `cen`
        */ "Name"?: string;
        /**
        * 带宽包描述。
        * @example `带宽包`
        */ "Description"?: string;
        /**
        * 带宽包的付费类型，取值：
        * - **POSTPAY**：后付费。
        * - **PREPAY**：预付费。
        * > 国际站仅支持预付费。
        * @example `PREPAY`
        */ "BandwidthPackageChargeType"?: string;
        /**
        * 带宽包的购买时长，默认值为**1**。
        * @example `1`
        */ "Period"?: number;
        /**
        * 带宽包的计费周期，取值：
        * - **Month**（默认值）：按月计费。
        * - **Year**：按年计费。
        * @example `Month`
        */ "PricingCycle"?: string;
        /**
        * 是否自动支付账单，取值：
        * - **true**：自动支付。
        * - **false**（默认值）：不自动支付。
        * @example `true`
        */ "AutoPay"?: boolean;
    }): Promise<{
        "RequestId": string;
        "CenBandwidthPackageOrderId": string;
        "CenBandwidthPackageId": string;
    }>;
    /**
    * 调用ModifyCenRouteMap接口修改路由策略。
    */ ModifyCenRouteMap(query: {
        "RegionId"?: string;
        /**
        * 云企业网ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 云企业网所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
        * @example `cn-hangzhou`
        */ "CenRegionId": string;
        /**
        * 路由策略的ID。
        * @example `cenrmap-abcdedfghij****`
        */ "RouteMapId": string;
        /**
        * 所有匹配条件通过后的策略行为，取值：
        * - **Permit**：允许通过被匹配的路由。
        * - **Deny**：拒绝通过被匹配的路由。
        * @example `Permit`
        */ "MapResult": string;
        /**
        * 路由策略的优先级，取值：**1**~**100**。优先级数字越小，优先级越高。
        * > 同地域同策略应用方向的路由策略优先级唯一。执行路由策略时，系统从优先级数字最小的路由策略开始匹配条件语句，因此在指定路由策略优先级时，要注意符合期望的匹配顺序。
        * @example `10`
        */ "Priority": number;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 路由策略的描述。
        * @example `test`
        */ "Description"?: string;
        /**
        * 关联的下一条路由策略的优先级，取值：**1**~**100**。
        * - 当未配置关联优先级时，路由策略无关联的下一条路由策略。
        * - 当关联优先级取值为1时，路由策略关联当前路由策略的下一条路由策略。
        * - 当关联优先级取值非1时，路由策略关联优先级必须大于当前路由策略的优先级。
        * 仅**MapResult**取值为**Permit**时，匹配通过的路由才会继续匹配关联的下一条路由策略。
        * @example `20`
        */ "NextPriority"?: number;
        "SourceInstanceIds"?: string[];
        "DestinationInstanceIds"?: string[];
        "SourceRouteTableIds"?: string[];
        "DestinationRouteTableIds"?: string[];
        "SourceRegionIds"?: string[];
        "SourceChildInstanceTypes"?: string[];
        "DestinationChildInstanceTypes"?: string[];
        "DestinationCidrBlocks"?: string[];
        /**
        * 匹配前缀模式，为match语句，取值：
        * - **Include**：模糊匹配。匹配条件中的路由前缀包含被匹配路由的路由前缀即判定为匹配成功。
        *  例如：定义1.1.0.0/16的策略可以模糊匹配到1.1.1.0/24的路由。
        * - **Complete**：精确匹配。匹配条件中的路由前缀必须与被匹配路由的路由前缀一致，才判定为匹配成功。
        *  例如：定义1.1.0.0/16的策略仅可以精确匹配到1.1.0.0/16的路由。
        * @example `Include `
        */ "CidrMatchMode"?: string;
        "RouteTypes"?: string[];
        "MatchAsns"?: number[];
        /**
        * 匹配as-path模式，为match语句，取值：
        * - **Include**：模糊匹配，匹配条件中的AS Path与被匹配路由的AS Path有重叠即判定为匹配成功。
        * - **Complete**：精确匹配，匹配条件中的AS Path必须与被匹配路由的AS Path一致，才判定为匹配成功。
        * @example `Include`
        */ "AsPathMatchMode"?: string;
        "MatchCommunitySet"?: string[];
        /**
        * 匹配community模式，为match语句，取值：
        * - **Include**：模糊匹配，匹配条件中的Community与被匹配路由的Community有重叠即判定为匹配成功。
        * - **Complete**：精确匹配，匹配条件中的Community必须与被匹配路由的Community一致，才判定为匹配成功。
        * @example `Include`
        */ "CommunityMatchMode"?: string;
        "OperateCommunitySet"?: string[];
        /**
        * 操作community的模式，为action语句，取值：
        * - **Additive**：添加。
        * - **Replace**：替换。
        * @example `Additive`
        */ "CommunityOperateMode"?: string;
        /**
        * 修改路由的优先级，为action语句，取值：**1**~**100**，路由默认优先级为**50**，取值越小优先级越高。
        * @example `22`
        */ "Preference"?: number;
        /**
        * 路由传递源实例ID列表排除匹配模式，取值：
        * - **false**（默认）：路由传递源实例ID在`SourceInstanceIds`中时，匹配通过。
        * - **true**：路由传递源实例ID不在`SourceInstanceIds`中时，匹配通过。
        * @example `false`
        */ "SourceInstanceIdsReverseMatch"?: boolean;
        /**
        * 路由传递目的实例ID列表排除匹配模式，取值：
        * - **false**（默认）：路由传递目的实例ID在`DestinationInstanceIds`中时，匹配通过。
        * - **true**：路由传递目的实例ID不在`DestinationInstanceIds`中时，匹配通过。
        * @example `false`
        */ "DestinationInstanceIdsReverseMatch"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribePublishedRouteEntries查询已加载到CEN网络实例(VPC和VBR)的各条路由在CEN中的发布情况。
    */ DescribePublishedRouteEntries(query: {
        "RegionId"?: string;
        /**
        * 需要查询的云企业网ID。
        * @example `cen-7qthudw0ll6jm****`
        */ "CenId": string;
        /**
        * 网络实例ID。
        * @example `vpc-bp18sth14qii3pnv****`
        */ "ChildInstanceId": string;
        /**
        * 网络实例类型，取值：
        * - **VPC**：专有网络。
        * - **VBR**：边界路由器接口。
        * - **CCN**：云连接网。
        * @example `VPC`
        */ "ChildInstanceType": string;
        /**
        * 需要查询的地域ID。
        * @example `cn-hangzhou`
        */ "ChildInstanceRegionId": string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `2`
        */ "PageSize"?: number;
        /**
        * 网络实例的路由表ID。
        * @example `vtb-bp174d1gje79u1g4****`
        */ "ChildInstanceRouteTableId"?: string;
        /**
        * 要查询的网段。
        * @example `172.xx.xx.xx/24`
        */ "DestinationCidrBlock"?: string;
    }): Promise<{
        "TotalCount": number;
        "PublishRouteEntries": {
            "PublishRouteEntries": {
                "DestinationCidrBlock": string;
                "NextHopId": string;
                "NextHopType": string;
                "ChildInstanceRouteTableId": string;
                "PublishStatus": string;
                "RouteConflicts": {
                    "RouteConflicts": any[];
                };
                "RouteType": string;
            }[];
        };
        "PageNumber": number;
        "RequestId": string;
        "PageSize": number;
    }>;
    /**
    * 调用PublishRouteEntries将加载到CEN中的VPC或VBR的路由条目发布到CEN中。
    */ PublishRouteEntries(query: {
        "RegionId"?: string;
        /**
        * 云企业网的ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 加载的网络实例ID（VPC或VBR的ID）。
        * @example `vpc-rj9gt5nll27onu****`
        */ "ChildInstanceId": string;
        /**
        * 网络实例类型，取值： **VPC|VBR**。
        * @example `VPC`
        */ "ChildInstanceType": string;
        /**
        * 加载的网络实例的地域ID。
        * @example `us-west-1`
        */ "ChildInstanceRegionId": string;
        /**
        * 网络实例的路由表ID。
        * @example `vtb-bp174d1gje7****`
        */ "ChildInstanceRouteTableId": string;
        /**
        * 要发布的网段。
        * @example `172.16.xx.xx/24`
        */ "DestinationCidrBlock": string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeGeographicRegionMembership查看指定区域内所有的地域。
    */ DescribeGeographicRegionMembership(query: {
        "RegionId"?: string;
        /**
        * 指定区域的ID，取值：
        * - **china**：中国大陆。
        * - **asia-pacific** ：亚太。
        * - **europe**：欧洲。
        * - **australia**：澳洲。
        * - **north-america**：北美。
        * @example `china `
        */ "GeographicRegionId": string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `1`
        */ "PageSize"?: number;
    }): Promise<{
        "RegionIds": {
            "RegionId": {
                "RegionId": string;
            }[];
        };
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCenInterRegionBandwidthLimits查询各个地域之间的跨地域互通带宽。
    */ DescribeCenInterRegionBandwidthLimits(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `1`
        */ "PageSize"?: number;
        /**
        *  指定查询该云企业网实例内的跨地域互通带宽。
        * @example `cen-7qthudw0ll6jm****`
        */ "CenId"?: string;
    }): Promise<{
        "CenInterRegionBandwidthLimits": {
            "CenInterRegionBandwidthLimit": {
                "Status": string;
                "LocalRegionId": string;
                "CenId": string;
                "OppositeRegionId": string;
                "BandwidthLimit": string;
            };
        };
        "PageNumber": string;
        "TotalCount": string;
        "PageSize": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCenRegionDomainRouteEntries查询云企业网实例中某个地域内路由条目的详细信息。
    */ DescribeCenRegionDomainRouteEntries(query: {
        "RegionId"?: string;
        /**
        * 指定待查询的云企业网实例的ID。
        * @example `cen-7qthudw0ll6j****`
        */ "CenId": string;
        /**
        * 指定待查询的地域的ID。
        * @example `cn-hangzhou`
        */ "CenRegionId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `1`
        */ "PageSize"?: number;
        /**
        * @example `111`
        */ "Status"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "CenRouteEntries": {
            "CenRouteEntry": {
                "NextHopInstanceId": string;
                "Type": string;
                "NextHopRegionId": string;
                "NextHopType": string;
                "DestinationCidrBlock": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeRouteConflict查看指定路由器（VRouter或VBR）中存在冲突的路由条目。
    */ DescribeRouteConflict(query: {
        "RegionId"?: string;
        /**
        * 网络实例的ID。
        * @example `vpc-bp18sth14qii3pn****`
        */ "ChildInstanceId": string;
        /**
        * 指定路由器类型，取值：
        * - **VRouter**：虚拟路由器。
        * - **VBR**：边界路由器。
        * @example `VBR`
        */ "ChildInstanceType": string;
        /**
        * 指定地域的ID。
        * @example `cn-hangzhou`
        */ "ChildInstanceRegionId": string;
        /**
        * 路由表的ID。
        * @example `vtb-bp174d1gje79u1g4t****`
        */ "ChildInstanceRouteTableId": string;
        "OwnerId"?: number;
        /**
        * 当前页码。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页包含的条目数。
        * @example `2`
        */ "PageSize"?: number;
        /**
        * 目标网段的CIDR地址块。
        * @example `172.16.xx.xx/24`
        */ "DestinationCidrBlock"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "RouteConflicts": {
            "RouteConflict": any[];
        };
    }>;
    /**
    * 调用DeleteCenBandwidthPackage删除带宽包。
    */ DeleteCenBandwidthPackage(query: {
        "RegionId"?: string;
        /**
        * 要删除的带宽包的ID。
        * @example `cenbwp-4c2zaavbvh5f42****`
        */ "CenBandwidthPackageId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCenBandwidthPackage查看账户下所有带宽包的详细信息。
    */ DescribeCenBandwidthPackages(query: {
        "RegionId"?: string;
        "IncludeReservationData"?: boolean;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `2`
        */ "PageSize"?: number;
        "Filter"?: string[];
        /**
        * 过滤条件之间的关系，取值：
        * - **false**：过滤值之间是**与**关系。
        * - **true**：过滤值之间是**或**关系。
        * @example `false`
        */ "IsOrKey"?: boolean;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "CenBandwidthPackages": {
            "CenBandwidthPackage": {
                "CreationTime": string;
                "Status": string;
                "GeographicRegionBId": string;
                "BusinessStatus": string;
                "BandwidthPackageChargeType": string;
                "GeographicRegionAId": string;
                "CenBandwidthPackageId": string;
                "CenIds": {
                    "CenId": string[];
                };
                "ExpiredTime": string;
                "Bandwidth": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeCenGeographicSpanRemainingBandwidth查询指定带宽包的剩余可用带宽值。
    */ DescribeCenGeographicSpanRemainingBandwidth(query: {
        "RegionId"?: string;
        /**
        * 带宽包所属的CEN实例ID。
        * @example `cen-nh98vzx8gfhlwn****`
        */ "CenId": string;
        /**
        * 带宽包的互通区域，取值：**China**|**North-America**|**Asia-Pacific**|**Europe**|**Australia**。
        * @example `China`
        */ "GeographicRegionAId": string;
        /**
        * 带宽包的另一个互通区域，取值：**China**|**North-America**|**Asia-Pacific**|**Europe**|**Australia**。
        * @example `North-America`
        */ "GeographicRegionBId": string;
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "RequestId": string;
        "RemainingBandwidth": string;
    }>;
    /**
    * 调用SetCenInterRegionBandwidthLimit设置带宽包中两个地域间的跨地域互通带宽。
    */ SetCenInterRegionBandwidthLimit(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例的ID。
        * @example `cen-7qthudw0ll6jmx****`
        */ "CenId": string;
        /**
        * 本端地域的ID。
        * @example `cn-hangzhou`
        */ "LocalRegionId": string;
        /**
        * 对端地域的ID。
        * @example `us-west-1`
        */ "OppositeRegionId": string;
        /**
        * 两个地域之间的跨地域互通带宽。
        * @example `8`
        */ "BandwidthLimit": number;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用AssociateCenBandwidthPackage将带宽包绑定到指定的云企业网实例。
    */ AssociateCenBandwidthPackage(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例的ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 带宽包的ID。
        * @example `cenbwp-4c2zaavbvh5fx****`
        */ "CenBandwidthPackageId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyCenBandwidthPackageAttribute编辑带宽包的名称和描述信息。
    */ ModifyCenBandwidthPackageAttribute(query: {
        "RegionId"?: string;
        /**
        *  带宽包的ID。
        * @example `cenbwp-4c2zaavbvh5fx****`
        */ "CenBandwidthPackageId": string;
        "OwnerId"?: number;
        /**
        * 带宽包的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        *  带宽包的描述信息。  长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
        * @example `带宽包`
        */ "Description"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UnassociateCenBandwidthPackage将带宽包与云企业网实例之间的绑定取消。取消绑定后，该带宽包可以绑定至其他云企业网实例。
    */ UnassociateCenBandwidthPackage(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例的ID。
        * @example `cen-7qthudw0ll6j****`
        */ "CenId": string;
        /**
        * 带宽包的ID。
        * @example `cenbwp-4c2zaavbvh5****`
        */ "CenBandwidthPackageId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeGrantRulesToCen查看网络实例对云企业网实例的授权关系。
    */ DescribeGrantRulesToCen(query: {
        /**
        * 网络实例所在的地域。
        * @example `cn-hangzou`
        */ "RegionId": string;
        /**
        * 云企业网实例的ID。
        * @example `cen-7qthudw0ll6jmxx****`
        */ "CenId": string;
        /**
        * 产品类型。
        * @example `VPC`
        */ "ProductType": string;
        "OwnerId"?: number;
    }): Promise<{
        "TotalCount": number;
        "PageNumber": number;
        "CbnGrantRules": {
            "CbnGrantRule": {
                "CbnInstanceId": string;
                "CbnOwnerId": string;
                "CreationTime": string;
            }[];
        };
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCenAttachedChildInstances查看云企业网实例下已加载的网络实例。
    */ DescribeCenAttachedChildInstances(query: {
        "RegionId"?: string;
        /**
        *  指定云企业网实例的ID。
        * @example `cen-7qthudw0ll6jmcx****`
        */ "CenId": string;
        "OwnerId"?: number;
        /**
        *  列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 加载的网络实例类型，取值：
        * - **VPC**。
        * - **VBR**。
        * - **CCN**。
        * @example `VPC`
        */ "ChildInstanceType"?: string;
        /**
        * 网络实例的所属地域。
        * @example `us-west-1`
        */ "ChildInstanceRegionId"?: string;
    }): Promise<{
        "PageNumber": number;
        "ChildInstances": {
            "ChildInstance": {
                "Status": string;
                "ChildInstanceOwnerId": string;
                "ChildInstanceId": string;
                "ChildInstanceRegionId": string;
                "CenId": string;
                "ChildInstanceType": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用DetachCenChildInstance从云企业网实例中解绑指定的网络实例。
    */ DetachCenChildInstance(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例的ID。
        * @example `cen-7qthudw0ll6jmx****`
        */ "CenId": string;
        /**
        * 指定待解绑的网络实例ID。
        * @example `vpc-bp18sth14qii3pnvx****`
        */ "ChildInstanceId": string;
        /**
        * 网络实例的类型，取值：
        * - **VPC**。
        * - **VBR**。
        * - **CCN**。
        * @example `VPC`
        */ "ChildInstanceType": string;
        /**
        * 网络实例所在的地域。
        * @example `cn-hangzhou`
        */ "ChildInstanceRegionId": string;
        "OwnerId"?: number;
        /**
        * 网络实例所属账号的UID。
        * @example `1234567890`
        */ "ChildInstanceOwnerId"?: number;
        /**
        * CEN实例所属账号的UID。
        * @example `123456789`
        */ "CenOwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCenAttachedChildInstanceAttribute查看加载到CEN中的网络实例（VPC，VBR，CCN）的详细信息。
    */ DescribeCenAttachedChildInstanceAttribute(query: {
        "RegionId"?: string;
        /**
        * 指定云企业网实例的ID。
        * @example `cen-3cub0ges01xmvm****`
        */ "CenId": string;
        /**
        * 要查询的已加载网络实例的ID。
        * @example `vpc-sa17uy0itvgxiq9gb****`
        */ "ChildInstanceId": string;
        /**
        * 已加载的网络实例的类型。
        * @example `VPC`
        */ "ChildInstanceType": string;
        /**
        * 已加载网络实例的 Region ID。
        * @example `cn-hangzhou`
        */ "ChildInstanceRegionId": string;
        "OwnerId"?: number;
    }): Promise<{
        "Status": string;
        "ChildInstanceOwnerId": string;
        "ChildInstanceId": string;
        "RequestId": string;
        "ChildInstanceName": string;
        "ChildInstanceRegionId": string;
        "CenId": string;
        "ChildInstanceAttachTime": string;
        "ChildInstanceType": string;
    }>;
    /**
    * 调用AttachCenChildInstance将网络实例加载到云企业网实例中。
    */ AttachCenChildInstance(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例的ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 指定待加载的网络实例的ID。
        * @example `vpc-bp18sth14qii3pnvx****`
        */ "ChildInstanceId": string;
        /**
        * 网络实例的类型，取值：
        * - **VPC**。
        * - **VBR**。
        * - **CCN**。
        * @example `VPC`
        */ "ChildInstanceType": string;
        /**
        * 网络实例所在的地域。
        * @example `cn-hangzhou`
        */ "ChildInstanceRegionId": string;
        "OwnerId"?: number;
        /**
        * 跨账号加载网络实例场景下，网络实例所属账号的UID。
        * @example `1231579085529123`
        */ "ChildInstanceOwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyCenAttribute编辑云企业网实例的名称和描述信息。
    */ ModifyCenAttribute(query: {
        "RegionId"?: string;
        /**
        *  云企业网实例的ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        "OwnerId"?: number;
        /**
        * 云企业网实例的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        * 云企业网实例的描述信息。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `cen`
        */ "Description"?: string;
        /**
        * 设置网段重叠冲突的级别，取值：
        * - **FULL**：不能有网段重叠。
        * - **REDUCE**：可以有网段重叠，但是不能完全相等。
        * @example `FULL`
        */ "ProtectionLevel"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteCen删除指定的云企业网实例。
    */ DeleteCen(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例的ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateCen接口创建云企业网实例。
    */ CreateCen(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII 字符。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 云企业网实例的名称。长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://`或`https://`开头。
        * @example `test`
        */ "Name"?: string;
        /**
        * 云企业网实例的描述信息。长度为2~256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
        * @example `云企业网`
        */ "Description"?: string;
        /**
        * 设置网段重叠冲突的级别，取值：
        * - **FULL**：不能有网段重叠。
        * - **REDUCE**：可以有网段重叠，但是不能完全相等。
        * @example `FULL`
        */ "ProtectionLevel"?: string;
    }): Promise<{
        "CenId": string;
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCens查看账户下所有云企业网实例的详细信息。
    */ DescribeCens(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `1`
        */ "PageSize"?: number;
        "Filter"?: string[];
        "Tag"?: string[];
    }): Promise<{
        "PageNumber": number;
        "Cens": {
            "Cen": {
                "Name": string;
                "Status": string;
                "Description": string;
                "CenBandwidthPackageIds": {
                    "CenBandwidthPackageId": string[];
                };
                "CenId": string;
            }[];
        };
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyCenBandwidthPackageSpec更改带宽包的带宽值。
    */ ModifyCenBandwidthPackageSpec(query: {
        "RegionId"?: string;
        /**
        * 带宽包的ID。
        * @example `cenbwp-4c2zaavbvh5x****`
        */ "CenBandwidthPackageId": string;
        /**
        * 带宽包的带宽峰值，单位为Mbps，最小为**2**。
        * @example `2`
        */ "Bandwidth": number;
        "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ResolveAndRouteServiceInCen设置云服务。
    */ ResolveAndRouteServiceInCen(query: {
        "RegionId"?: string;
        /**
        * 云企业网ID。
        * @example `cen-ckwa2hhmuislse****`
        */ "CenId": string;
        /**
        * 服务域名或IP。
        * @example `100.64.1.0/24`
        */ "Host": string;
        /**
        * 云服务的服务所在地。
        * @example `cn-beijing`
        */ "HostRegionId": string;
        "AccessRegionIds": string[];
        /**
        * @example `111`
        */ "OwnerId"?: number;
        /**
        * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
        * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
        */ "ClientToken"?: string;
        /**
        * 更新间隔，默认值为**5**，不支持修改。
        * @example `5`
        */ "UpdateInterval"?: number;
        /**
        * 服务关联的VPC。
        * @example `vpc-o6woh5s494zueq40v****`
        */ "HostVpcId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeCenGeographicSpans查询互通区域信息。
    */ DescribeCenGeographicSpans(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 互通区域。
        * @example `china-china`
        */ "GeographicSpanId"?: string;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "GeographicSpanModels": {
            "GeographicSpanModel": {
                "OppositeGeoRegionId": string;
                "LocalGeoRegionId": string;
                "GeographicSpanId": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeRouteServicesInCen查询云服务。
    */ DescribeRouteServicesInCen(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 云企业网ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId"?: string;
        /**
        * 服务的域名或IP。
        * @example `100.64.0.0/24`
        */ "Host"?: string;
        /**
        * 云服务的服务所在地。
        * @example `cn-hangzhou`
        */ "HostRegionId"?: string;
        /**
        * 云服务的访问所在地。
        * @example `cn-beijing`
        */ "AccessRegionId"?: string;
        /**
        * 服务关联的VPC。
        * @example `vpc-bp1t36rn9l53iwbsf****`
        */ "HostVpcId"?: string;
    }): Promise<{
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "RouteServiceEntries": {
            "RouteServiceEntry": {
                "Status": string;
                "CenId": string;
                "Cidrs": {
                    "Cidr": string[];
                };
                "HostRegionId": string;
                "AccessRegionId": string;
                "Host": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeChildInstanceRegions查询支持加载到云企业网中的网络实例的地域。
    */ DescribeChildInstanceRegions(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        /**
        * 实例类型，取值：
        * - **VPC**：专有网络。
        * - **VBR**：边界路由器。
        * - **CCN**：云连接网。
        * @example `VPC`
        */ "ProductType"?: string;
    }): Promise<{
        "RequestId": string;
        "Regions": {
            "Region": {
                "RegionId": string;
                "LocalName": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeCenChildInstanceRouteEntries查询云企业网的网络实例路由条目。
    */ DescribeCenChildInstanceRouteEntries(query: {
        "RegionId"?: string;
        /**
        * 云企业网ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 网络实例ID。
        * @example `vpc-bp18sth14qii3pnvo****`
        */ "ChildInstanceId": string;
        /**
        * 网络实例的类型，取值：
        * - **VPC**：专有网络。
        * - **VBR**：边界路由器。
        * - **CCN**：云连接网。
        * @example `vpc`
        */ "ChildInstanceType": string;
        /**
        * 网络实例所在的地域。
        * @example `cn-hangzhou`
        */ "ChildInstanceRegionId": string;
        "OwnerId"?: number;
        /**
        * 路由的状态，取值：
        * - **Active**：可用。
        * - **Backup**：备份。
        * - **Rejected**：拒绝。
        * - **Prohibited**：禁止。
        * - **All**：所有状态。
        * @example `Active`
        */ "Status"?: string;
        /**
        * 列表的页码，默认值为**1**。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{
        "PageNumber": number;
        "TotalCount": number;
        "PageSize": number;
        "RequestId": string;
        "CenRouteEntries": {
            "CenRouteEntry": {
                "NextHopInstanceId": string;
                "CenRouteMapRecords": {
                    "CenRouteMapRecord": {
                        "RouteMapId": string;
                        "RegionId": string;
                    }[];
                };
                "OperationalMode": boolean;
                "Status": string;
                "AsPaths": {
                    "AsPath": any[];
                };
                "Communities": {
                    "Community": any[];
                };
                "Type": string;
                "RouteTableId": string;
                "NextHopRegionId": string;
                "NextHopType": string;
                "Conflicts": {
                    "Conflict": any[];
                };
                "DestinationCidrBlock": string;
            }[];
        };
    }>;
    /**
    * 调用DeleteRouteServiceInCen删除云服务。
    */ DeleteRouteServiceInCen(query: {
        "RegionId"?: string;
        /**
        * 云企业网实例ID。
        * @example `cen-7qthudw0ll6jmc****`
        */ "CenId": string;
        /**
        * 云服务的IP地址或域名。
        * @example `100.64.0.0/8`
        */ "Host": string;
        /**
        * 云服务的服务所在地。
        * @example `cn-shanghai`
        */ "HostRegionId": string;
        /**
        * 云服务的访问所在地。
        * @example `cn-hangzhou`
        */ "AccessRegionId": string;
        "OwnerId"?: number;
        /**
        * 服务关联的VPC。
        * @example `vpc-bp1t36rn9l53iwbsf****`
        */ "HostVpcId"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用UntagResources为指定的资源列表统一解绑并删除标签。
    */ UntagResources(query: {
        "RegionId"?: string;
        /**
        * 资源类型，取值：**cen**。
        * @example `cen`
        */ "ResourceType": string;
        "ResourceId": string[];
        /**
        * @example `11`
        */ "OwnerId"?: number;
        "TagKey"?: string[];
    }): Promise<{
        "RequestId": string;
    }>;
    DeleteFlowlog(query: {
        "RegionId": string;
        "FlowLogId": string;
        "CenId": string;
        "OwnerId"?: number;
        "ClientToken"?: string;
    }): Promise<{}>;
}
export default CBN;
