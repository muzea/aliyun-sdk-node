export interface ModifyDesktopGroupRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId": string;
    /**
     * 云电脑模板ID。
     * @example `b-7t275tpgjueeu****`
     */
    "OwnBundleId"?: string;
    /**
     * 策略ID。
     * @example `pg-53iyi2aar0nd6****`
     */
    "PolicyGroupId"?: string;
    /**
     * 云电脑池名称。
     * @example `desktopGroupName1`
     */
    "DesktopGroupName"?: string;
    /**
     * 伸缩策略组ID。
     * > 该参数暂未开放使用。
     * @example `s-kakowkdl****`
     */
    "ScaleStrategyId"?: string;
    /**
     * 会话断开连接后继续保留的时间。单位为毫秒，取值范围为180000（3分钟）~345600000（4天）。取值为0时，表示始终保留。
     * 当会话因为用户主动断开或因为其他因素意外断开时，从断开的时刻开始计算，若在该保留时长内用户始终未重新建立与该会话的连接，则该会话注销，未保存的数据都将销毁；若在该保留时长内，用户重新建立连接成功，则仍可进入原来的会话，仍可访问对话断开之前的数据。
     * @example `180000`
     */
    "KeepDuration"?: number;
    /**
     * 备注信息。
     * @example `comment`
     */
    "Comments"?: string;
    /**
     * 包年包月云电脑池内自动创建云电脑的上限。即当参数`ChargeType`取值为`PrePaid`时才生效，且为必选值。默认值为1，取值范围为0~`MaxDesktopsCount`。
     * @example `1`
     */
    "MinDesktopsCount"?: number;
    /**
     * 按量付费云电脑池内能容纳的云电脑最大数量。取值范围：0~500。
     * @example `10`
     */
    "MaxDesktopsCount"?: number;
    /**
     * 是否允许包年包月云电脑池自动创建云电脑。即当参数`ChargeType`取值为`PrePaid`时才生效，且为必选值。
     * @example `1`
     */
    "AllowAutoSetup"?: number;
    /**
     * 按量付费云电脑池内允许预留的云电脑数量。当参数`ChargeType`取值为`PostPaid`时才生效，且为必选值。取值范围：
     * - 0：不预留
     * - N：预留N台（1≤N≤100）
     * > 如果不预留可用云电脑，当终端用户发起连接请求时，系统需要先创建并启动云电脑，然后分配给用户，所需时间相对较长。建议您根据需要预留一定数量的云电脑，保证终端用户的使用体验。
     * @example `1`
     */
    "AllowBufferCount"?: number;
    /**
     * 云电脑重置类型。
     * @example `0`
     */
    "ResetType"?: number;
    /**
     * 多会话云电脑池的负载均衡策略。
     * > 该参数暂未开放使用。
     * @example `0`
     */
    "LoadPolicy"?: number;
    /**
     * 多会话云电脑池中每台云电脑允许的并发会话数。
     * > 该参数暂未开放使用。
     * @example `2`
     */
    "BindAmount"?: number;
    /**
     * 镜像ID。
     * @example `desktopimage-windows-server-2016-64-ch`
     */
    "ImageId"?: string;
    /**
     * 云电脑池的类型。
     * > 该参数暂未开放使用。
     * @example `teacher`
     */
    "Classify"?: string;
    /**
     * 会话占用率阈值，用作多会话云电脑池的自动伸缩触发条件。会话占用率的计算公式为：
     * ```会话占用率 = 已绑定会话数 / (云电脑资源总数 × 每台云电脑支持的最大会话数) × 100%```
     * 当会话占用率达到该阈值时，则会新建云电脑；未达到该阈值时，则删除多余的云电脑。
     * > 该参数暂未开放使用。
     * @example `0.85`
     */
    "RatioThreshold"?: number;
    /**
     * 会话处于连接状态的最大时长。会话连接时长达到此值时将自动断开连接。单位：毫秒。取值范围：900000（15分钟）~345600000（4天）。
     * @example `900000`
     */
    "ConnectDuration"?: number;
    /**
     * 用户会话建立连接后，如果在该最大时长内，始终没有任何键盘或鼠标操作，则该会话断开连接。单位：毫秒。取值范围为360000（6分钟）~3600000（60分钟）。
     * 在达到该时长的30秒前，会话中的终端用户将收到保存文档数据的提示消息，此时终端用户需及时保存文档数据，避免丢失。
     * > 仅适用于镜像版本号不低于1.0.2的云电脑。
     * @example `360000`
     */
    "IdleDisconnectDuration"?: number;
    /**
     * 是否禁用会话管理。
     * @example `true`
     */
    "DisableSessionConfig"?: boolean;
    /**
     * 空闲关机时间。当云电脑空闲时长达到该值时，自动关机。关机后如果有用户连接，会自动开机。单位：毫秒。
     * @example `300000`
     */
    "StopDuration"?: number;
    /**
     * 是否开启用户数据漫游。
     * > 该参数暂未开放使用。
     * @example `false`
     */
    "ProfileFollowSwitch"?: boolean;
    /**
     * 用户数据漫游功能使用的NAS文件系统ID。
     * > 该参数暂未开放使用。
     * @example `04f314****`
     */
    "FileSystemId"?: string;
    /**
     * 策略组ID列表。
     */
    "PolicyGroupIds"?: string[];
    /**
     * - 对于包年包月云电脑池：购买云电脑数量。取值范围：0~200。
     * - 对于按量付费云电脑池：池内云电脑最小创建数量。默认值为1，取值范围为0~`MaxDesktopsCount`。
     * @example `5`
     */
    "BuyDesktopsCount"?: number;
}
