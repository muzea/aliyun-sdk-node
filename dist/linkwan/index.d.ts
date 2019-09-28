interface LINKWAN {
    /**
    * 调用ListFreqBandPlanGroups获取频段列表。
    */ ListFreqBandPlanGroups(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    /**
    * 调用CountGateways统计当前用户账号名下符合过滤条件的网关数量。
    */ CountGateways(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 网关在离线状态过滤。
        * 若未传入此参数，则不限制在线状态。可取值为**ONLINE**和**OFFLINE**。
        * @example `ONLINE`
        */ "OnlineState"?: string;
        /**
        * GwEUI模糊过滤。
        * @example `123456`
        */ "FuzzyGwEui"?: string;
        /**
        * 城市名模糊过滤。
        * @example `杭州`
        */ "FuzzyCity"?: string;
        /**
        * 网关名称模糊过滤。
        * @example `name`
        */ "FuzzyName"?: string;
        /**
        * 网关频段ID过滤。
        * @example `123`
        */ "FreqBandPlanGroupId"?: number;
        /**
        * 网关启停用状态过滤。
        * 若未传入此参数，则不限制启停状态。
        * @example `false`
        */ "IsEnabled"?: boolean;
    }): Promise<{}>;
    /**
    * 调用CreateGateway录入网关。
    */ CreateGateway(query: {
        /**
        * 地域ID。
        * @example `cn-hangzhou`
        */ "RegionId"?: string;
        /**
        * 网关PinCode, 用于确保录入者拥有该网关。
        * @example `000000`
        */ "PinCode": string;
        /**
        * 自定义网关名称。
        * @example `vme`
        */ "Name": string;
        /**
        * 网关频段ID。
        * @example `123`
        */ "FreqBandPlanGroupId": number;
        /**
        * 网关通信模式。取值：**FULL_DUPLEX**(全双工）| **HALF_DUPLEX**(半双工)。
        * @example `HALF_DUPLEX`
        */ "CommunicationMode": string;
        /**
        * 网关所在城市名称。
        * @example `杭州`
        */ "City": string;
        /**
        * 网关所在城区名称。
        * @example `滨江区`
        */ "District": string;
        /**
        * 网关所在详细地址。
        * @example `详细地址`
        */ "Address": string;
        /**
        * 网关经纬度所采用的坐标系统，可取值为**WGS_84**, **GCJ_02**。
        * @example `GCJ-02`
        */ "GisCoordinateSystem": string;
        /**
        * 网关经度。
        * @example `123.45678`
        */ "Longitude": number;
        /**
        * 网关纬度。
        * @example `23.45678`
        */ "Latitude": number;
        /**
        * 网关所在地区ID, 由http://lbs.amap.com/api/javascript-api/download定义。
        * @example `123`
        */ "AddressCode": number;
        /**
        * 网关唯一标识。
        * @example `0000000000000000`
        */ "GwEui": string;
        /**
        * 自定义网关描述信息。
        * @example `my gateway`
        */ "Description"?: string;
    }): Promise<{}>;
    /**
    * 调用DeleteGateway删除已录入的网关。
    */ DeleteGateway(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        /**
        * 网关唯一标识。
        * @example `0000000000000000`
        */ "GwEui": string;
    }): Promise<{}>;
    /**
    * 调用GetGateway获取网关信息。
    */ GetGateway(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId": string;
        /**
        * 网关唯一标识。
        * @example `0000000000000000`
        */ "GwEui": string;
    }): Promise<{}>;
    /**
    * 调用ListGateways根据过滤条件查询当前用户账号名下的网关信息列表。
    */ ListGateways(query: {
        "RegionId"?: string;
        /**
        * 本次查询的起始位置，从0开始。
        * @example `0`
        */ "Offset": number;
        /**
        * 本次查询的网关数量上限，大于等于1。
        * @example `2`
        */ "Limit": number;
        /**
        * 网关在离线状态过滤。
        * 如未传入此参数，则不限制在线状态。可取值为：**ONLINE**, **OFFLINE**。
        * @example `ONLINE`
        */ "OnlineState"?: string;
        /**
        * GwEUI模糊过滤。
        * @example `123456`
        */ "FuzzyGwEui"?: string;
        /**
        * 城市名模糊过滤。
        * @example `CityName`
        */ "FuzzyCity"?: string;
        /**
        * 网关名称模糊过滤。
        * @example `GatewayName`
        */ "FuzzyName"?: string;
        /**
        * 网关频段ID过滤。
        * @example `123`
        */ "FreqBandPlanGroupId"?: number;
        /**
        * 网关启停用状态过滤。
        * 如未传入此参数，则不限制启停状态。
        * @example `true`
        */ "IsEnabled"?: boolean;
        /**
        * 指定排序字段，可取值为**ONLINE_STATE_CHANGED_MILLIS**。
        * @example `ONLINE_STATE_CHANGED_MILLIS`
        */ "SortingField"?: string;
        /**
        * 配合**SortingField**参数一起使用，**true**表示升序，**false**表示降序。
        * @example `true`
        */ "Ascending"?: boolean;
    }): Promise<{}>;
    /**
    * 调用UpdateGateway更新网关信息。
    */ UpdateGateway(query: {
        "RegionId"?: string;
        /**
        * 网关唯一标识。
        * @example `0000000000000000`
        */ "GwEui": string;
        /**
        * 自定义网关名称。
        * @example `网关名称`
        */ "Name"?: string;
        /**
        * 自定义网关描述。
        * @example `网关描述`
        */ "Description"?: string;
        /**
        * 网关频段ID。
        * @example `123`
        */ "FreqBandPlanGroupId"?: number;
        /**
        * 网关通信模式。可取值为**FULL_DUPLEX**(全双工）、**HALF_DUPLEX**(半双工)。
        * @example `HALF_DUPLEX`
        */ "CommunicationMode"?: string;
        /**
        * 网关所在地区ID，由http://lbs.amap.com/api/javascript-api/download定义。
        * @example `123`
        */ "AddressCode"?: number;
        /**
        * 网关所在城市名称。
        * @example `某某市`
        */ "City"?: string;
        /**
        * 网关所在城区名称。
        * @example `某某区`
        */ "District"?: string;
        /**
        * 网关所在详细地址。
        * @example `详细地址`
        */ "Address"?: string;
        /**
        * 网关经纬度所采用的坐标系统，可取值为**WGS_84**, **GCJ_02**。
        * @example `GCJ_02`
        */ "GisCoordinateSystem"?: string;
        /**
        * 网关经度。
        * @example `123.45678`
        */ "Longitude"?: number;
        /**
        * 网关纬度。
        * @example `23.45678`
        */ "Latitude"?: number;
    }): Promise<{}>;
    /**
    * 调用UpdateGatewayEnablingState启动、关闭网关。
    */ UpdateGatewayEnablingState(query: {
        "RegionId"?: string;
        /**
        * 网关唯一标识。
        * @example `0000000000000000`
        */ "GwEui": string;
        /**
        * 是否开启网关。
        * - **true**：表示启用该网关。
        * - **false**：表示关闭该网关。
        * @example `true`
        */ "Enabled": boolean;
    }): Promise<{}>;
    /**
    * 调用AcceptJoinPermissionAuthOrder接受专用入网凭证授权工单。
    */ AcceptJoinPermissionAuthOrder(query: {
        "RegionId"?: string;
        /**
        * 要接受的授权工单ID。
        * @example `123`
        */ "OrderId": string;
    }): Promise<{}>;
    /**
    * 调用CancelJoinPermissionAuthOrder取消专用入网凭证授权工单。
    */ CancelJoinPermissionAuthOrder(query: {
        "RegionId"?: string;
        /**
        * 要撤销的授权工单ID。
        * @example `123`
        */ "OrderId": string;
    }): Promise<{}>;
    /**
    * 调用CountOwnedJoinPermissions统计符合过滤条件的当前用户账号所拥有的入网凭证的数量。
    */ CountOwnedJoinPermissions(query: {
        "RegionId"?: string;
        /**
        * 模糊匹配入网凭证租户的阿里云账号ID。
        * @example `some-user`
        */ "FuzzyRenterAliyunId"?: string;
        /**
        * 模糊匹配入网凭证使用的JoinEUI。
        * @example `d896e0`
        */ "FuzzyJoinEui"?: string;
        /**
        * 按照凭证的启停用状态进行过滤。
        * **true**表示启用，**false**表示停用。
        * @example `true`
        */ "Enabled"?: boolean;
        /**
        * 模糊匹配入网凭证的名称。
        * @example `test`
        */ "FuzzyJoinPermissionName"?: string;
    }): Promise<{}>;
    /**
    * 调用CountRentedJoinPermissions统计当前用户账号所租用的且符合过滤条件的入网凭证数量。
    */ CountRentedJoinPermissions(query: {
        "RegionId"?: string;
        /**
        * 模糊匹配入网凭证拥有者的阿里云账号ID。
        * @example `some-user`
        */ "FuzzyOwnerAliyunId"?: string;
        /**
        * 模糊匹配入网凭证的JoinEUI。
        * @example `d896e0`
        */ "FuzzyJoinEui"?: string;
        /**
        * 按照凭证的启停用状态进行过滤。
        * @example `true`
        */ "Enabled"?: boolean;
        /**
        * 根据入网凭证是否关联到节点分组进行过滤。
        * **true**表示已关联，**false**表示未关联。
        * @example `true`
        */ "BoundNodeGroup"?: boolean;
        /**
        * 按照凭证的类型进行过滤。取值：
        * - **LOCAL**：专用凭证
        * - **ROAMING**：泛在凭证
        * @example `LOCAL`
        */ "Type"?: string;
        /**
        * 模糊匹配入网凭证的名称。
        * @example `test`
        */ "FuzzyJoinPermissionName"?: string;
    }): Promise<{}>;
    /**
    * 调用CreateLocalJoinPermission创建专用入网凭证。当前用户账号将成为该凭证的拥有者，拥有该凭证。
    */ CreateLocalJoinPermission(query: {
        "RegionId"?: string;
        /**
        * 专用入网凭证所采用的频段的频段ID。
        * @example `101`
        */ "FreqBandPlanGroupId": number;
        /**
        * 专用入网凭证采用的LoRaWAN Class模式。可取值：**A**、**B**、**C**。
        * @example `A`
        */ "ClassMode": string;
        /**
        * 专用入网凭证是否使用阿里云统一JoinEUI。
        * @example `true`
        */ "UseDefaultJoinEui": boolean;
        /**
        * 自定义专用入网凭证名称。
        * @example `test`
        */ "JoinPermissionName": string;
    }): Promise<{}>;
    /**
    * 调用DeleteLocalJoinPermission删除当前用户账号所拥有的专用入网凭证。
    */ DeleteLocalJoinPermission(query: {
        "RegionId"?: string;
        /**
        * 要删除的专用入网凭证的ID。
        * @example `123`
        */ "JoinPermissionId": string;
    }): Promise<{}>;
    /**
    * 调用GetJoinPermissionAuthOrder获取专用凭证授权工单的详细信息。
    */ GetJoinPermissionAuthOrder(query: {
        "RegionId"?: string;
        /**
        * 授权工单ID。
        * @example `123`
        */ "OrderId": string;
    }): Promise<{}>;
    /**
    * 调用GetOwnedJoinPermission根据入网凭证ID获取当前用户账号所拥有的入网凭证。
    */ GetOwnedJoinPermission(query: {
        "RegionId"?: string;
        /**
        * 要获取的入网凭证的ID。
        * @example `123`
        */ "JoinPermissionId": string;
    }): Promise<{}>;
    /**
    * 调用UpdateOwnedLocalJoinPermissionEnablingState启用、停用当前用户账号所拥有的专用入网凭证。
    */ UpdateOwnedLocalJoinPermissionEnablingState(query: {
        "RegionId"?: string;
        /**
        * 要操作的专用入网凭证ID。
        * @example `123`
        */ "JoinPermissionId": string;
        /**
        * **true**为启用，**false**为停用。
        * @example `true`
        */ "Enabled": boolean;
    }): Promise<{}>;
    /**
    * 调用GetRentedJoinPermission根据入网凭证ID，获取当前用户账号租用的入网凭证（可能是专用入网凭证或泛在入网凭证）。
    */ GetRentedJoinPermission(query: {
        "RegionId"?: string;
        /**
        * 入网凭证ID。
        * @example `123`
        */ "JoinPermissionId": string;
    }): Promise<{}>;
    /**
    * 调用ListRentedJoinPermissions根据过滤条件，查询当前用户账号所租用的入网凭证列表（可能是专用入网凭证或泛在入网凭证）。
    */ ListRentedJoinPermissions(query: {
        "RegionId"?: string;
        /**
        * 本次查询的起始位置，从 0 开始。
        * @example `0`
        */ "Offset": number;
        /**
        * 本次查询的入网凭证数量的上限，大于等于 1。
        * @example `2`
        */ "Limit": number;
        /**
        * 模糊匹配入网凭证拥有者的阿里云账号ID。
        * @example `some-user`
        */ "FuzzyOwnerAliyunId"?: string;
        /**
        * 模糊匹配入网凭证使用的JoinEUI。
        * @example `d896e0`
        */ "FuzzyJoinEui"?: string;
        /**
        * 按照凭证的启停用状态进行过滤。**true**表示启用，**false**表示停用。
        * @example `true`
        */ "Enabled"?: boolean;
        /**
        * 根据入网凭证是否关联到节点分组进行过滤。**true**表示已关联，**false**表示未关联。
        * @example `true`
        */ "BoundNodeGroup"?: boolean;
        /**
        * 按照入网凭证的类型进行过滤，取值：
        * - **LOCAL**：专用凭证
        * - **ROAMING**：泛在凭证
        * @example `LOCAL`
        */ "Type"?: string;
        /**
        * 模糊匹配入网凭证的名称。
        * @example `凭证1`
        */ "FuzzyJoinPermissionName"?: string;
        /**
        * 指定排序字段，可取值为**CREATED_MILLIS**, 表示根据创建时间排序。
        * @example `CREATED_MILLIS`
        */ "SortingField"?: string;
        /**
        * 配合**SortingField**参数一起使用，**true**表示升序，**false**表示降序。
        * @example `false`
        */ "Ascending"?: boolean;
    }): Promise<{}>;
    /**
    * 调用ListOwnedJoinPermissions根据过滤条件，查询当前用户账号所拥有的入网凭证列表。
    */ ListOwnedJoinPermissions(query: {
        "RegionId"?: string;
        /**
        * 本次查询的起始位置，从 0 开始。
        * @example `0`
        */ "Offset": number;
        /**
        * 本次查询的入网凭证的数量上限，大于等于 1。
        * @example `2`
        */ "Limit": number;
        /**
        * 模糊匹配入网凭证租户的阿里云账号ID。
        * @example `some-user`
        */ "FuzzyRenterAliyunId"?: string;
        /**
        * 模糊匹配入网凭证所使用的JoinEUI。
        * @example `d896e0`
        */ "FuzzyJoinEui"?: string;
        /**
        * 根据入网凭证的启停用状态过滤。
        * @example `false`
        */ "Enabled"?: boolean;
        /**
        * 模糊匹配入网凭证的名称。
        * @example `凭证1`
        */ "FuzzyJoinPermissionName"?: string;
        /**
        * 指定排序字段，可取值为**CREATED_MILLIS**, 表示根据创建时间排序。
        * @example `CREATED_MILLIS`
        */ "SortingField"?: string;
        /**
        * 配合**SortingField**参数一起使用，**true**表示升序，**false**表示降序。
        * @example `true`
        */ "Ascending"?: boolean;
    }): Promise<{}>;
    /**
    * 调用RejectJoinPermissionAuthOrder回绝专用入网凭证授权工单。
    */ RejectJoinPermissionAuthOrder(query: {
        "RegionId"?: string;
        /**
        * 要回绝的授权工单ID。
        * @example `123`
        */ "OrderId": string;
    }): Promise<{}>;
    /**
    * 调用ReturnJoinPermission归还租用的入网凭证（可以是专用入网凭证或泛在入网凭证）。
    */ ReturnJoinPermission(query: {
        "RegionId"?: string;
        /**
        * 要归还的入网凭证ID。
        * @example `123`
        */ "JoinPermissionId": string;
        /**
        * 要归还的入网凭证类型。
        * @example `LOCAL`
        */ "JoinPermissionType": string;
    }): Promise<{}>;
    /**
    * 调用SubmitJoinPermissionAuthOrder发起专用入网凭证授权工单。
    */ SubmitJoinPermissionAuthOrder(query: {
        "RegionId"?: string;
        /**
        * 要授权的专用入网凭证ID。
        * @example `123`
        */ "JoinPermissionId": string;
        /**
        * 要授权的开发者的阿里云账号ID。
        * @example `some_user`
        */ "RenterAliyunId": string;
    }): Promise<{}>;
    /**
    * 调用UpdateOwnedLocalJoinPermission更新当前用户账号所拥有的专用入网凭证。
    */ UpdateOwnedLocalJoinPermission(query: {
        "RegionId"?: string;
        /**
        * 专用入网凭证ID，用来指定要更新的入网凭证。
        * @example `123`
        */ "JoinPermissionId": string;
        /**
        * 专用入网凭证所采用的频段的频段ID，用于更新旧频段。
        * @example `201`
        */ "FreqBandPlanGroupId"?: number;
        /**
        * 专用入网凭证采用的LoRaWAN Class模式，用于更新旧的 Class 模式。可取值：**A**、**B**、**C**。
        * @example `A`
        */ "ClassMode"?: string;
        /**
        * 自定义入网凭证名称，用于更新旧名称。
        * @example `凭证1`
        */ "JoinPermissionName"?: string;
    }): Promise<{}>;
    /**
    * 调用AddNodeToGroup在节点分组中增加新的节点。
    */ AddNodeToGroup(query: {
        "RegionId"?: string;
        /**
        * 节点的DevEUI。
        * @example `0000000000000000`
        */ "DevEui": string;
        /**
        * 节点的PIN Code。
        * @example `123456`
        */ "PinCode": string;
        /**
        * 节点分组ID。
        * @example `123`
        */ "NodeGroupId": string;
    }): Promise<{}>;
    /**
    * 调用CountNodeGroups统计符合过滤条件的节点分组总数。
    */ CountNodeGroups(query: {
        "RegionId"?: string;
        /**
        * 模糊匹配节点分组名称。
        * @example `group1`
        */ "FuzzyName"?: string;
        /**
        * 模糊匹配节点分组中节点所使用的 JoinEUI。
        * @example `d896e0`
        */ "FuzzyJoinEui"?: string;
        /**
        * 模糊匹配节点分组中节点的 DevEUI。
        * @example `d896e0`
        */ "FuzzyDevEui"?: string;
    }): Promise<{}>;
    /**
    * 调用CountNotifications统计符合过滤条件的通知数量。
    */ CountNotifications(query: {
        /**
        * 地域ID。
        * @example `cn-shanghai`
        */ "RegionId"?: string;
        "Category"?: string[];
        /**
        * 根据通知处理状态过滤，传null值则不过滤处理状态。
        * @example `UNHANDLED`
        */ "HandleState"?: string;
        /**
        * 查询开始时间，毫秒为单位的 UNIX 时间戳。
        * @example `1514736000000`
        */ "BeginMillis"?: number;
        /**
        * 查询结束时间，毫秒为单位的 UNIX 时间戳。
        * @example `1514736000000`
        */ "EndMillis"?: number;
    }): Promise<{}>;
    /**
    * 调用GetNotification获取通知信息。
    */ GetNotification(query: {
        "RegionId"?: string;
        /**
        * 通知ID。
        * @example `123`
        */ "NotificationId": string;
    }): Promise<{}>;
    /**
    * 调用ListNotifications获取通知列表。
    */ ListNotifications(query: {
        "RegionId"?: string;
        /**
        * 查询的起始位置，从 0 开始的偏移。
        * @example `0`
        */ "Offset": number;
        /**
        * 查询的通知数量上限，大于等于 1。
        * @example `2`
        */ "Limit": number;
        "Category"?: string[];
        /**
        * 根据通知处理状态过滤，传 null 则不过滤处理状态。
        * @example `HANDLED`
        */ "HandleState"?: string;
        /**
        * 时间查询，毫秒为单位的 UNIX 时间戳。
        * @example `1514736000000`
        */ "BeginMillis"?: number;
        /**
        * 时间查询，毫秒为单位的 UNIX 时间戳。
        * @example `1514736000000`
        */ "EndMillis"?: number;
        /**
        * 排序字段，可取值为**NOTICE_MILLIS**(按照通知发生时间排序)。
        * @example `NOTICE_MILLIS`
        */ "SortingField"?: string;
        /**
        * 配合SortingField参数一起使用，**true**表示升序，**false**表示降序。
        * @example `false`
        */ "Ascending"?: boolean;
    }): Promise<{}>;
    /**
    * 调用UpdateNotificationsHandleState更新通知的处理状态。
    */ UpdateNotificationsHandleState(query: {
        "RegionId"?: string;
        /**
        * 要设置的处理状态，可取值为**HANDLED**（已处理）, **UNHANDLED**（未处理）。
        * @example `HANDLED`
        */ "TargetHandleState": string;
        "NotificationId": number[];
    }): Promise<{}>;
    /**
    * 调用SendUnicastCommand发送单播信息。
    */ SendUnicastCommand(query: {
        "RegionId"?: string;
        /**
        * 目标节点。
        * @example `0000000000000000`
        */ "DevEui": string;
        /**
        * fPort。
        * @example `0`
        */ "FPort": number;
        /**
        * 要发送的内容。
        * @example `xxx`
        */ "Content": string;
        /**
        * 最大重发次数，默认为**0**。
        * @example `1`
        */ "MaxRetries"?: number;
        /**
        * 是否清空该节点的堆积指令，并下发该指令。默认为**false**。
        * @example `false`
        */ "CleanUp"?: boolean;
        /**
        * 是否是confirmed指令，默认为**false**。
        * @example `false`
        */ "Comfirmed"?: boolean;
    }): Promise<{}>;
    GetLabNodeJoinAcceptConfig(query: {
        "RegionId"?: string;
        "DevEui": string;
    }): Promise<{}>;
    ListGatewayTransferFlowStats(query: {
        "RegionId"?: string;
        "BeginMillis": number;
        "EndMillis": number;
        "GwEui": string;
        "TimeIntervalUnit": string;
    }): Promise<{}>;
    ApplyRoamingJoinPermission(query: {
        "RegionId"?: string;
        "FreqBandPlanGroupId": number;
        "ClassMode": string;
        "JoinPermissionName": string;
    }): Promise<{}>;
    BindJoinPermissionToNodeGroup(query: {
        "RegionId"?: string;
        "NodeGroupId"?: string;
        "JoinPermissionId"?: string;
    }): Promise<{}>;
    BindLabNodeToLabGateway(query: {
        "RegionId"?: string;
        "GwEui": string;
        "DevEui": string;
    }): Promise<{}>;
    BindNodesToMulticastGroup(query: {
        "RegionId"?: string;
        "McAddress": string;
        "DevEuiList": string[];
    }): Promise<{}>;
    CheckCloudProductOpenStatus(query: {
        "RegionId"?: string;
        "ServiceCode"?: string;
    }): Promise<{}>;
    CountGatewayTupleOrders(query: {
        "RegionId"?: string;
        "States"?: string[];
    }): Promise<{}>;
    CountLabGateways(query: {
        "RegionId"?: string;
        "FuzzyGwEui"?: string;
        "FreqBandPlanGroupId"?: number;
        "FuzzyName"?: string;
        "OnlineState"?: string;
    }): Promise<{}>;
    CountLabNodes(query: {
        "RegionId"?: string;
        "FuzzyDevEui"?: string;
        "FuzzyName"?: string;
        "FreqBandPlanGroupId"?: number;
        "ActivationState"?: string;
    }): Promise<{}>;
    CountNodeTupleOrders(query: {
        "RegionId"?: string;
        "IsKpm"?: boolean;
        "States"?: string[];
    }): Promise<{}>;
    CountNodesByNodeGroupId(query: {
        "RegionId"?: string;
        "NodeGroupId"?: string;
        "FuzzyDevEui"?: string;
    }): Promise<{}>;
    CountNodesByOwnedJoinPermissionId(query: {
        "RegionId"?: string;
        "JoinPermissionId"?: string;
        "FuzzyDevEui"?: string;
    }): Promise<{}>;
    CreateCustomLocalJoinPermission(query: {
        "RegionId"?: string;
        "FreqBandPlanGroupId": number;
        "ClassMode": string;
        "JoinEui": string;
        "JoinPermissionName": string;
    }): Promise<{}>;
    CreateLabGateway(query: {
        "RegionId"?: string;
        "FreqBandPlanGroupId": number;
        "Name": string;
    }): Promise<{}>;
    CreateLabNode(query: {
        "RegionId"?: string;
        "FreqBandPlanGroupId": number;
        "LoraVersion": string;
        "ClassMode": string;
        "Name": string;
    }): Promise<{}>;
    CreateMulticastGroup(query: {
        "RegionId"?: string;
        "ClassMode": string;
        "Frequency": number;
        "DataRate": number;
        "LoraVersion": string;
        "Periodicity"?: number;
    }): Promise<{}>;
    CreateNodeGroup(query: {
        "RegionId"?: string;
        "NodeGroupName": string;
        "JoinPermissionId"?: string;
    }): Promise<{}>;
    DeleteExternalNodeTuples(query: {
        "RegionId"?: string;
        "DevEuiList": string[];
    }): Promise<{}>;
    DeleteLabGateway(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    DeleteLabNode(query: {
        "RegionId"?: string;
        "DevEui": string;
    }): Promise<{}>;
    DeleteMulticastGroup(query: {
        "RegionId"?: string;
        "McAddress": string;
    }): Promise<{}>;
    DeleteNodeGroup(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
    }): Promise<{}>;
    DescribeRegions(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    GetFreqBandPlanGroup(query: {
        "RegionId"?: string;
        "GroupId": number;
    }): Promise<{}>;
    GetGatewayPacketStat(query: {
        "RegionId"?: string;
        "EndMillis": number;
        "GwEui": string;
        "BeginMillis": number;
    }): Promise<{}>;
    GetGatewayStatusStat(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    GetGatewayTransferPacketsDownloadUrl(query: {
        "RegionId"?: string;
        "Category": string;
        "BeginMillis": number;
        "EndMillis": number;
        "GwEui": string;
        "DevEui"?: string;
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    GetGatewayTupleOrder(query: {
        "RegionId"?: string;
        "OrderId": string;
    }): Promise<{}>;
    GetGatewayTuplesDownloadUrl(query: {
        "RegionId"?: string;
        "OrderId": string;
    }): Promise<{}>;
    GetKpmPublicKey(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    GetLabGateway(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    GetLabGatewayGwmpConfig(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    GetLabNode(query: {
        "RegionId"?: string;
        "DevEui": string;
    }): Promise<{}>;
    GetLabNodeDebugConfig(query: {
        "RegionId"?: string;
        "DevEui": string;
    }): Promise<{}>;
    GetLabNodeDownlinkConfig(query: {
        "RegionId"?: string;
        "DevEui": string;
    }): Promise<{}>;
    GetMulticastGroup(query: {
        "RegionId"?: string;
        "McAddress": string;
    }): Promise<{}>;
    GetNode(query: {
        "RegionId"?: string;
        "DevEui": string;
    }): Promise<{}>;
    GetNodeGroup(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
    }): Promise<{}>;
    GetNodeGroupTransferPacketsDownloadUrl(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
        "Category": string;
        "BeginMillis": number;
        "EndMillis": number;
        "DevEui"?: string;
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    GetNodeMulticastConfig(query: {
        "RegionId"?: string;
        "DevEui": string;
    }): Promise<{}>;
    GetNodeTupleOrder(query: {
        "RegionId"?: string;
        "OrderId": string;
    }): Promise<{}>;
    GetNodeTuplesDownloadUrl(query: {
        "RegionId"?: string;
        "OrderId": string;
    }): Promise<{}>;
    GetUserLicense(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    ListActivatedFeatures(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    ListActiveGateways(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    ListBoundLabGateways(query: {
        "RegionId"?: string;
        "DevEui": string;
    }): Promise<{}>;
    ListBoundLabNodes(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    ListBoundNodesByMcAddress(query: {
        "RegionId"?: string;
        "Offset": number;
        "Limit": number;
        "McAddress": string;
    }): Promise<{}>;
    ListGatewayOnlineRecords(query: {
        "RegionId"?: string;
        "OffSet": number;
        "Limit": number;
        "GwEui": string;
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListGatewayTransferPackets(query: {
        "RegionId"?: string;
        "GwEui": string;
        "Category": string;
        "PageNumber": number;
        "PageSize": number;
        "BeginMillis": number;
        "EndMillis": number;
        "SortingField"?: string;
        "DevEui"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListGatewayTupleOrders(query: {
        "RegionId"?: string;
        "Offset": number;
        "Limit": number;
        "State"?: string[];
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListGatewaysGisInfo(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    ListLabGatewayLogs(query: {
        "RegionId"?: string;
        "GwEui": string;
        "BeginMillis": number;
        "EndMillis": number;
        "PageNumber": number;
        "PageSize": number;
        "DevEui"?: string;
    }): Promise<{}>;
    ListLabGateways(query: {
        "RegionId"?: string;
        "Offset": number;
        "Limit": number;
        "FuzzyGwEui"?: string;
        "FreqBandPlanGroupId"?: number;
        "FuzzyName"?: string;
        "OnlineState"?: string;
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListLabNodeLogs(query: {
        "RegionId"?: string;
        "DevEui": string;
        "BeginMillis": number;
        "EndMillis": number;
        "PageNumber": number;
        "PageSize": number;
    }): Promise<{}>;
    ListLabNodes(query: {
        "RegionId"?: string;
        "Offset": number;
        "Limit": number;
        "FuzzyDevEui"?: string;
        "FuzzyName"?: string;
        "FreqBandPlanGroupId"?: number;
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListNodeGroupTransferFlowStats(query: {
        "RegionId"?: string;
        "BeginMillis": number;
        "EndMillis": number;
        "NodeGroupId": string;
        "TimeIntervalUnit": string;
    }): Promise<{}>;
    ListNodeGroupTransferPackets(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
        "Category": string;
        "PageNumber": number;
        "PageSize": number;
        "BeginMillis": number;
        "EndMillis": number;
        "SortingField"?: string;
        "DevEui"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListNodeGroups(query: {
        "RegionId"?: string;
        "Offset": number;
        "Limit": number;
        "FuzzyName"?: string;
        "FuzzyJoinEui"?: string;
        "FuzzyDevEui"?: string;
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListNodeTransferPacketPaths(query: {
        "RegionId"?: string;
        "PageNumber": number;
        "PageSize": number;
        "DevEui": string;
        "Base64EncodedMacPayload": string;
        "LogMillis": number;
    }): Promise<{}>;
    ListNodeTupleOrders(query: {
        "RegionId"?: string;
        "Offset": number;
        "Limit": number;
        "IsKpm"?: boolean;
        "State"?: string[];
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListNodesByNodeGroupId(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
        "Offset": number;
        "Limit": number;
        "FuzzyDevEui"?: string;
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    ListNodesByOwnedJoinPermissionId(query: {
        "RegionId"?: string;
        "JoinPermissionId": string;
        "Offset": number;
        "Limit": number;
        "FuzzyDevEui"?: string;
        "SortingField"?: string;
        "Ascending"?: boolean;
    }): Promise<{}>;
    RebootLabGateway(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    RegisterKpmPublicKey(query: {
        "RegionId"?: string;
        "PublicKey": string;
    }): Promise<{}>;
    RemoveNodeFromGroup(query: {
        "RegionId"?: string;
        "DevEui": string;
        "NodeGroupId": string;
    }): Promise<{}>;
    SendBusinessCommandToLabNode(query: {
        "RegionId"?: string;
        "DevEui": string;
        "DebugConfig": string;
        "BusinessCommand": string;
    }): Promise<{}>;
    SendMacCommandToLabNode(query: {
        "RegionId"?: string;
        "DevEui": string;
        "DebugConfig": string;
        "MacCommand": string;
    }): Promise<{}>;
    SendMulticastCommand(query: {
        "RegionId"?: string;
        "McAddress": string;
        "FPort": number;
        "Content": string;
    }): Promise<{}>;
    SubmitExternalNodeTuplesImportingTask(query: {
        "RegionId"?: string;
        "NodeTuples": string[];
    }): Promise<{}>;
    SubmitExternalNodesAddingTask(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
        "Nodes": string[];
    }): Promise<{}>;
    SubmitGatewayTupleOrder(query: {
        "RegionId"?: string;
        "RequiredCount": number;
    }): Promise<{}>;
    SubmitNodeTupleOrder(query: {
        "RegionId"?: string;
        "LoraVersion": string;
        "RequiredCount": number;
    }): Promise<{}>;
    TriggerLabGatewayConfigReport(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    TriggerLabGatewayDeviceInfoReport(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    TriggerLabGatewayLogReport(query: {
        "RegionId"?: string;
        "GwEui": string;
    }): Promise<{}>;
    UnbindJoinPermissionFromNodeGroup(query: {
        "RegionId"?: string;
        "NodeGroupId"?: string;
        "JoinPermissionId"?: string;
    }): Promise<{}>;
    UnbindLabNodeFromLabGateway(query: {
        "RegionId"?: string;
        "DevEui": string;
        "GwEui": string;
    }): Promise<{}>;
    UnbindNodesFromMulticastGroup(query: {
        "RegionId"?: string;
        "McAddress": string;
        "DevEuiList": string[];
    }): Promise<{}>;
    UnregisterKpmPublicKey(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    UpdateDataDispatchConfig(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
        "DataDispatchDestination": string;
        "ProductType"?: string;
        "ProductName"?: string;
        "ProductKey"?: string;
        "UplinkRegionName"?: string;
        "UplinkTopic"?: string;
    }): Promise<{}>;
    UpdateDataDispatchEnablingState(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
        "DataDispatchEnabled": boolean;
    }): Promise<{}>;
    UpdateEmbeddedNsAutoSyncEnablingState(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "Enabled": boolean;
    }): Promise<{}>;
    UpdateLabGateway(query: {
        "RegionId"?: string;
        "GwEui": string;
        "Name": string;
    }): Promise<{}>;
    UpdateLabGatewayGwmpConfig(query: {
        "RegionId"?: string;
        "GwEui": string;
        "GwmpConfig": string;
    }): Promise<{}>;
    UpdateLabGatewaySshCtrl(query: {
        "RegionId"?: string;
        "GwEui": string;
        "Enabled": boolean;
    }): Promise<{}>;
    UpdateLabGatewayUartCtrl(query: {
        "RegionId"?: string;
        "GwEui": string;
        "Enabled": boolean;
    }): Promise<{}>;
    UpdateLabNode(query: {
        "RegionId"?: string;
        "DevEui": string;
        "Name"?: string;
        "LoraVersion"?: string;
        "ClassMode"?: string;
    }): Promise<{}>;
    UpdateLabNodeDebugConfig(query: {
        "RegionId"?: string;
        "DevEui": string;
        "DebugConfigJson": string;
    }): Promise<{}>;
    UpdateLabNodeDownlinkConfig(query: {
        "RegionId"?: string;
        "DevEui": string;
        "DebugConfig": string;
        "DownlinkConfig"?: string;
    }): Promise<{}>;
    UpdateLabNodeJoinAcceptConfig(query: {
        "RegionId"?: string;
        "DevEui": string;
        "DebugConfig": string;
        "JoinAcceptConfig"?: string;
    }): Promise<{}>;
    UpdateNodeGroup(query: {
        "RegionId"?: string;
        "NodeGroupId": string;
        "NodeGroupName"?: string;
    }): Promise<{}>;
    UpdateRoamingJoinPermission(query: {
        "RegionId"?: string;
        "JoinPermissionId": string;
        "JoinPermissionName"?: string;
    }): Promise<{}>;
    UpdateRoamingJoinPermissionEnablingState(query: {
        "RegionId"?: string;
        "JoinPermissionId": string;
        "Enabled": boolean;
    }): Promise<{}>;
}
export default LINKWAN;
